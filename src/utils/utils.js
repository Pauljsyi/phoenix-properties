/**
 *
 * @param {*} str
 * @returns a string with the first letter capitalized
 */
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
