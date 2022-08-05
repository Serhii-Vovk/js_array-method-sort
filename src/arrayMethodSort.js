'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = withoutParam) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function withoutParam(first, second) {
  const a = '' + first;
  const b = '' + second;

  if (a > b) {
    return 1;
  }

  if (a === b) {
    return 0;
  }

  return -1;
}

module.exports = applyCustomSort;
