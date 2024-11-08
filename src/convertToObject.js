'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // declare and initialize the object that will be return:
  const convertedStyleToObject = {};

  // convert the source string (methods chaining):
  sourceString
    // split the source string into an array of strings with
    // a separate css - declaration using the separator ';':
    .split(';')
    // filter out in the array only those elements that are valid declarations
    // - contain ':' as a separator for css - property and its value:
    .filter((el) => el.includes(':'))
    // split each string of the css-declaration into sub-arrays
    // with two elements: the css - property(index 0) and its value(index 1):
    .map((el) => el.split(':'))
    // add keys (css-property) and value (css-value) to the resulting object,
    // having previously removed all whitespace characters from the beginning
    // and at the end of the string (space, tab, non-breaking space,
    // end - of - line characters, line breaks):
    .forEach((el) => (convertedStyleToObject[el[0].trim()] = el[1].trim()));

  // return result (the end)
  return convertedStyleToObject;
}

module.exports = convertToObject;
