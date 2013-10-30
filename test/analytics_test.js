'use strict';

var grunt = require('grunt');
var exists = grunt.file.exists;
var read = grunt.file.read;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.section = {
  'All': function (test) {
    test.expect(2);

    test.ok(exists('tmp/text.html'), 'Expected html file to be generated.');
    test.ok(
      ~read('tmp/text.html').indexOf('JesusIsKing'),
      'Expected to find tracking code inside the html file.'
    );

    test.done();
  }
};
