jasmine.getFixtures().fixturesPath = 'base/test/fixtures';

describe('trkt', function () {

  beforeEach(function () {
    spyOn(trkt, 'init').and.callThrough();
  });

  it('should load fixtures', function () {
    loadFixtures('simple.test.html');
    var elem = $('b');
    expect(elem).toHaveText('Test2');
  });

  it('should be defined', function () {
    expect(trkt).toBeDefined();
  });

  it('should be able to initialize', function () {
    expect(trkt.init).toBeDefined();
    trkt.init();
    expect(trkt.init).toHaveBeenCalled();
  });

});
