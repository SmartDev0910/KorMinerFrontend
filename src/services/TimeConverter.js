export function secondsToYMD(seconds) {
  const numyears = Math.floor(seconds / 31536000);
  const numdays = Math.floor((seconds % 31536000) / 86400);
  const numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  const numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  const numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  const timeRemaining = { numyears, numdays, numhours, numminutes, numseconds };
  return timeRemaining;
}

export function ymdToString(timeObject) {
  const { numyears, numdays, numhours } = timeObject;
  const result =
    (numyears > 0 ? numyears + " years " : "") +
    (numdays > 0 ? numdays + " days " : "") +
    (numhours > 0 ? numhours + " hours " : "");
  return result;
}
