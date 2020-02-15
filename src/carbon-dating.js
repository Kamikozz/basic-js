const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  // check if string, not negative & not zero
  if (typeof sampleActivity !== 'string' ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY)
    return false;

  // check for characters (except '.') in the string
  for (let i = 0; i < sampleActivity.length; i++)
    if (!(sampleActivity[i] >= 0 && sampleActivity[i] < 10) &&
      sampleActivity[i] !== '.')
      return false;

  const RATE_HALF_LIFE = LN_2 / HALF_LIFE_PERIOD;
  let date = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_HALF_LIFE;
  return Math.ceil(date);
};