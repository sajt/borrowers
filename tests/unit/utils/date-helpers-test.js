import dateHelpers from '../../../utils/date-helpers';
import { module, test } from 'qunit';

module('Utils: formatDate');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = dateHelpers();
  assert.ok(result);
});

test('formats a date object', function(assert) {
  var date = new Date("11-3-2014");
  var result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');
  assert.equal(result, 'Mon Nov 03 2014', 'returns a readable string');
});
