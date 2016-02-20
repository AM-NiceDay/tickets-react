const MONTHS = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Декабря', 'Января'];

export function getFormatedCurrentDate() {
  const now = new Date();
  return `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`
}
