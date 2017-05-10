'use strict'

var Testsuite = require('./Testsuite');

class Testsuites {
  constructor (results) {
    this.testsuites = results.testResults.map(function(result, i) {
      return new Testsuite(i, result)
    });
  }
}

module.exports = Testsuites;
