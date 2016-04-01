var trkt = (function () {
  'use strict';

  var module = {};

  module.init = function (cfg, container) {
    module.default_lang = cfg.default_lang;
    module.translation_files = cfg.translation_files;
    module.apply(container);
  };

  module.apply = function (container) {
    module.findElements(container);
    module.parseElements();
  };

  module.findElements = function (container) {
    module.elements = container.querySelectorAll('[data-translate]');
    module.parseElements();
  };

  module.parseElements = function () {
    for (var i = 0; i < module.elements.length; i++) {
      var element = module.elements[i];
      if (element.getAttribute('data-translate-date')) {
        module.parseDate(element);
      } else {
        module.parseTranslate(element);
      }
    }
  };

  module.parseTranslate = function (element) {
  };

  module.parseDate = function (element) {
  };

  return module;

})();
