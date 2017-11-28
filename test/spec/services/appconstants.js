'use strict';

describe('Service: AppConstants', function () {

  // load the service's module
  beforeEach(module('publicationsApp'));

  // instantiate service
  var AppConstants;
  beforeEach(inject(function (_AppConstants_) {
    AppConstants = _AppConstants_;
  }));

  it('should do something', function () {
    expect(!!AppConstants).toBe(true);
  });

});
