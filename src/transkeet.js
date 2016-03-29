var trkt = (function () {
  'use strict';

  var module = {};

  module.init = function () {
    module.apply();
  };

  module.apply = function () {
    console.log(document.querySelectorAll("[data-translate]"));
  }

  return module;

})();
