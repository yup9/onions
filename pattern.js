(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // detect require.js amd
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // detect node
    module.exports = factory();
  } else {
    // browser globals
    root.dialog = factory();
  }

})(this, function() {
  'use strict';
  //default settings

  //utils
  // ...

})