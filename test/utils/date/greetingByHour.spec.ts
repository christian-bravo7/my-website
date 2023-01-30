import MockDate from 'mockdate';
import { greetingByHour } from '@/utils/date/greetingByHour';

describe('greetingByHour function', () => {
  it('it should return good morning key between 0 and 11 AM', () => {
    MockDate.set('Wed Nov 25 2020 09:00:00 GMT-0600 (Central Standard Time)');

    const greetingKey = greetingByHour();

    expect(greetingKey).toBe('good-morning');
  });

  it('it should return good afternoon key at 12 AM', () => {
    MockDate.set('Wed Nov 25 2020 12:45:00 GMT-0600 (Central Standard Time)');

    const greetingKey = greetingByHour();

    expect(greetingKey).toBe('good-afternoon');
  });

  it('it should return good afternoon key between 13 and 17 PM', () => {
    MockDate.set('Wed Nov 25 2020 15:45:00 GMT-0600 (Central Standard Time)');

    const greetingKey = greetingByHour();

    expect(greetingKey).toBe('good-afternoon');
  });

  it('it should return good evening key between 18 and 24 PM', () => {
    MockDate.set('Wed Nov 25 2020 22:45:00 GMT-0600 (Central Standard Time)');

    const greetingKey = greetingByHour();

    expect(greetingKey).toBe('good-evening');
  });
});
