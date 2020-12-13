const greetings: Array<{ greet: string, test: (hours: number) => boolean }> = [
  {
    greet: 'Good Night!',
    test: (hours: number): boolean => hours >= 21 && hours <= 24,
  },
  {
    greet: 'Good Evening!',
    test: (hours: number): boolean => hours >= 18 && hours <= 20,
  },
  {
    greet: 'Good Afternoon!',
    test: (hours: number): boolean => hours >= 13 && hours <= 17,
  },
  {
    greet: 'Good Noon!',
    test: (hours: number): boolean => hours === 12,
  },
  {
    greet: 'Have a nice day!',
    test: (hours: number): boolean => hours >= 9 && hours <= 11,
  },
  {
    greet: 'Good Morning!',
    test: (hours: number): boolean => hours >= 0 && hours <= 8,
  },
];

export const greetingByHour = (): string => {
  const now = new Date();
  const hours = now.getHours();

  return greetings.find(greeting => greeting.test(hours))!.greet;
};
