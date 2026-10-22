interface SubmissionResult {
  ok: boolean;
  requestId?: string;
}
document
  .querySelectorAll<HTMLFormElement>('[data-inquiry-form]')
  .forEach((form) => {
    const submitButton = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]',
    );
    if (submitButton) submitButton.disabled = false;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector<HTMLElement>('[data-form-status]');
      const button = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      const label = form.querySelector<HTMLElement>('[data-submit-label]');
      if (!status || !button || !label) return;
      const announce = (
        message: string,
        state: 'success' | 'error' | 'demo',
      ) => {
        status.textContent = message;
        status.dataset.state = state;
        status.focus();
      };
      const data = new FormData(form);
      // Validação adicional: espaços em branco não são dados válidos.
      if (
        String(data.get('fullName') ?? '').trim().length < 3 ||
        (form.dataset.kind === 'contact' &&
          String(data.get('message') ?? '').trim().length < 10)
      ) {
        announce(
          'Preencha o nome e a mensagem com conteúdo válido, além de espaços em branco.',
          'error',
        );
        return;
      }
      if (data.get('website')) {
        announce('Não foi possível conferir o formulário.', 'error');
        return;
      }
      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        announce(
          'Dados conferidos. Esta é uma demonstração: nenhuma mensagem foi enviada e nenhum dado foi armazenado.',
          'demo',
        );
        return;
      }
      const payload = {
        kind: form.dataset.kind,
        fullName: String(data.get('fullName') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        phone: String(data.get('phone') ?? '').trim() || undefined,
        subject: String(data.get('subject') ?? '').trim() || undefined,
        message: String(data.get('message') ?? '').trim(),
        privacyAcknowledged: data.get('privacyAcknowledged') === 'on',
        website: '',
      };
      const originalLabel = label.textContent;
      button.disabled = true;
      label.textContent = 'Enviando…';
      form.setAttribute('aria-busy', 'true');
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
          credentials: 'omit',
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Resposta sem confirmação');
        const result: SubmissionResult = await response.json();
        if (
          result.ok !== true ||
          typeof result.requestId !== 'string' ||
          !result.requestId.trim()
        )
          throw new Error('Recebimento não confirmado');
        announce(
          `Recebimento confirmado. Protocolo: ${result.requestId}`,
          'success',
        );
        form.reset();
      } catch {
        announce(
          'Não foi possível confirmar o recebimento. Seus campos foram mantidos. Verifique sua conexão ou tente novamente mais tarde.',
          'error',
        );
      } finally {
        window.clearTimeout(timeout);
        button.disabled = false;
        label.textContent = originalLabel;
        form.removeAttribute('aria-busy');
      }
    });
  });
