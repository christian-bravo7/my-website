const months: any = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const formatDate = (rawDate: string): string => {
  const ms = Date.parse(rawDate);
  const date = new Date(ms);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const formattedDate = `${months[month]} ${day}, ${year}`;

  return formattedDate;
};
