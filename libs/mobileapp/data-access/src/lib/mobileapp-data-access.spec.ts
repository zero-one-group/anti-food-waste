import { getProductFromOfficial } from './mobileapp-data-access';

describe('mobileappDataAccess', () => {
  it('should work', () => {
    expect(getProductFromOfficial()).toEqual('mobileapp-data-access');
  });
});
