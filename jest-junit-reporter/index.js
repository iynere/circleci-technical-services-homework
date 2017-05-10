'use strict'

var Testsuites = require('./src/Testsuites');
var xml = require('xml');
var fs = require('fs');
var path = require('path');

module.exports = (results) => {
  var out = process.env.TEST_REPORT_PATH || process.cwd();
  var filename = process.env.TEST_REPORT_FILENAME || 'test-report.xml';
  var testSuites = new Testsuites(results);
  var data = xml(testSuites, { declaration: true, indent: '  ' });
  fs.writeFileSync(path.join(out, filename), data);
  return results;
};
