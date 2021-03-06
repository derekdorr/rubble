/**
 * Determine if all values in array satisfy function
 *
 * @module everyBy
 * @func
 * @since 1.17.0
 * @param {function} fn
 * @param {Array} arr
 * @return {function|boolean}
 * @example
 *
 *     const isTrue = val => val === true;
 *     everyBy(isTrue, [true, true]) //=> true
 *     everyBy(isTrue)([true, false]) //=> false
 */

import _every from './_internal/_every';
import INT_TWO from './_constants/INT_TWO';
import reverse from './reverse';

const everyBy = reverse(_every, INT_TWO);

export default everyBy;
