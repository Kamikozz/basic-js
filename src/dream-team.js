module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members
    // exclude not strings
    .filter(val => typeof val === 'string')
    // delete spaces, split string into items array
    // take first item, make him uppercase
    // and return the first letter to the array
    .map(val => val.trim().split(' ')[0].toUpperCase()[0])
    // sort alphabetically
    .sort()
    // make string from array
    .join('');
};