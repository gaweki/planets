export const thousandFormat = (text: string) => (Number.isNaN(parseInt(text, 10)) ? text : Number(text).toLocaleString('id'));

export const dateFormat = (text: string) => (new Date(text).toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
}));
