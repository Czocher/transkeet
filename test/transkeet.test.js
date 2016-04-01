describe('trkt', function () {

  var cfg = {
    default_language: 'en',
    translation_files: {
    }
  }

  var container = null;

  beforeAll(function () {
    var span = document.createElement('span');
    span.setAttribute('data-translate', true);

    var hello = document.createTextNode('Hello!');
    span.appendChild(hello);

    var date = document.createElement('span');
    date.setAttribute('data-translate', true);
    date.setAttribute('data-translate-date', true);

    var dateText = document.createTextNode('04 01 2014');
    date.appendChild(dateText);

    container = document.createElement('div');
    container.appendChild(span);
    container.appendChild(date);
  });

  beforeEach(function () {
    spyOn(trkt, 'init').and.callThrough();
  });

  it('should be defined', function () {
    expect(trkt).toBeDefined();
  });

  it('should be able to initialize', function () {
    expect(trkt.init).toBeDefined();
    trkt.init(cfg, container);
    expect(trkt.init).toHaveBeenCalled();
  });

  it('should find all translate elements', function () {
    expect(trkt.elements.length).toBe(2);
  });

  it('should call the appropriate methods for each element', function() {
    spyOn(trkt, 'parseTranslate').and.callThrough();
    spyOn(trkt, 'parseDate').and.callThrough();
    trkt.parseTranslate.calls.reset();
    trkt.parseDate.calls.reset();

    trkt.init(cfg, container);

    expect(trkt.parseTranslate).toHaveBeenCalled();
    expect(trkt.parseDate).toHaveBeenCalled();
  });

});
