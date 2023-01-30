const greetings: Array<{ greet: string, test: (hours: number) => boolean }> = [
  {
    greet: 'good-morning',
    test: (hours: number): boolean => hours >= 0 && hours <= 11,
  },
  {
    greet: 'good-afternoon',
    test: (hours: number): boolean => hours >= 12 && hours <= 17,
  },
  {
    greet: 'good-evening',
    test: (hours: number): boolean => hours >= 18 && hours <= 24,
  },
];

export const greetingByHour = (): string => {
  const now = new Date();
  const hours = now.getHours();

  return greetings.find(greeting => greeting.test(hours))!.greet;
};
