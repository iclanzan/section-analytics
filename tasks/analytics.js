/*
 * section-analytics
 * https://github.com/iclanzan/section-highlight
 *
 * Copyright (c) 2013 Sorin Iclanzan
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
  var evt = grunt.event;
  var templateFn;

  evt.on('section.init', function (options) {
    if (options.analytics && !templateFn) {
      templateFn = grunt.util._.template(
        grunt.file.read(path.join(__dirname, 'scripts/trackingCode.js'))
      );
    }
  });

  evt.on('section.render.html', function ($, page) {
    var config = page.options.analytics;
    if (config) {
      $('head').append('<script>' + templateFn(config).trim() + '</script>');
    }
  });
};
