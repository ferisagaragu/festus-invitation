import { dateFormat } from './date.format';

describe('dateFormat', () => {

  it('get all members of the object', () => {
    expect(dateFormat.display).toEqual({
      dateInput: 'dddd DD [de] MMMM [del] YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    });
  });

});
