// initial activity of C14: 15 dpm/g
const MODERN_ACTIVITY = 15;
// half life period of C14: 5.7 * 10^3
const HALF_LIFE_PERIOD = 5730;
// calculate the rate constant for the reaction from its half-life
const RATE_HALF_LIFE = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  // check if string, not negative & not zero
  if (typeof sampleActivity !== 'string' ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY)
    return false;

  // filter everything except numbers and periods
  for (let i = 0; i < sampleActivity.length; i++)
    if (!(sampleActivity[i] >= 0 && sampleActivity[i] < 10) &&
      sampleActivity[i] !== '.')
      return false;

  let date = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_HALF_LIFE);
  return date;
};