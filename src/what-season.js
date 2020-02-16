module.exports = function getSeason(date) {
  if (arguments.length === 0)
    return 'Unable to determine the time of year!';
  if (!Date.prototype.isPrototypeOf(date))
    throw new Error;

  // check if it's not default clear Date object
  for (item in date)
    throw new Error;

  date = date.getMonth();
  if (date > 10 || date < 2) {
    return 'winter';
  } else if (date > 1 && date < 5) {
    return 'spring';
  } else if (date > 4 && date < 8) {
    return 'summer';
  } else if (date > 7 && date < 11) {
    return 'autumn';
  }
};