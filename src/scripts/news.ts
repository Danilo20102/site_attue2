const controls = document.querySelector<HTMLElement>('[data-news-controls]');
const search = document.querySelector<HTMLInputElement>('[data-news-search]');
const buttons = [
  ...document.querySelectorAll<HTMLButtonElement>('[data-category-filter]'),
];
const cards = [...document.querySelectorAll<HTMLElement>('[data-news-card]')];
const count = document.querySelector<HTMLElement>('[data-results-count]');
const empty = document.querySelector<HTMLElement>('[data-news-empty]');
let category = 'Todas';
const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim();
const update = () => {
  const query = normalize(search?.value ?? '');
  let matches = 0;
  cards.forEach((card) => {
    const visible =
      (category === 'Todas' || card.dataset.category === category) &&
      normalize(card.dataset.search ?? '').includes(query);
    card.hidden = !visible;
    if (visible) matches++;
  });
  if (count)
    count.textContent = `${matches} ${matches === 1 ? 'publicação encontrada' : 'publicações encontradas'}`;
  if (empty) empty.hidden = matches !== 0;
  buttons.forEach((button) =>
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.categoryFilter === category),
    ),
  );
};
if (controls) controls.hidden = false;
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    category = button.dataset.categoryFilter ?? 'Todas';
    update();
  }),
);
search?.addEventListener('input', update);
document
  .querySelector('[data-clear-filters]')
  ?.addEventListener('click', () => {
    category = 'Todas';
    if (search) search.value = '';
    update();
    search?.focus();
  });
