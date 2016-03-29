describe('trkt', function () {

  beforeEach(function () {
    spyOn(trkt, 'init').and.callThrough();
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
