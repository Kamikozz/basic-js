module.exports = function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';

  // prevent everything, except objects with prototype of Date object
  if (!Date.prototype.isPrototypeOf(date))
    throw new Error;

  // check if it's not default clean Date object
  // construction for..in iterates only through own object properties'
  for (item in date)
    throw new Error;

  // 1. call getMonth() to get indices, starting from [0 to 11]
  // 2. increment by 1 make them [1..12]
  // 3. normalize numbers by dividing by 3 & apply Math.ceil() (= num | 0)
  // 3*. numbers looks like [0,0,1,1,1,2,2,2,3,3,3,4]
  // 4. make december (4) equal to 0 by getting mod 4
  date = ((date.getMonth() + 1) / 3 | 0) % 4;

  switch (date) {
    case 0: return 'winter';
    case 1: return 'spring';
    case 2: return 'summer';
    case 3: return 'autumn';
  }
};