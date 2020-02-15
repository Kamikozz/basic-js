module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members
    .filter(val => typeof val === 'string')
    .map(val => {
      return val.trim().split(' ')[0].toUpperCase()[0];
    })
    .sort()
    .join('');
};