export function addHoursToDate(date: Date, hours: number): Date {
  date.setHours(date.getHours() + hours);
  return date;
}

export function dateTimeToSeconds(date: Date): number {
  return date.getTime() / 1000;
}

export const zeroLeft = (n: number) =>
  Math.floor(n).toString().padStart(2, '0');

export function secondsToTimes(seconds: number): string[] {
  const year = Math.floor(seconds / (365 * 86400));
  const month = Math.floor((seconds % 31536000) / 2628000);
  const day = Math.floor(((seconds % 31536000) % 2628000) / 86400);
  const hour = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const min = Math.floor((seconds / 60) % 60);
  const sec = Math.floor((seconds % 60) % 60);

  const dateArray = [year, month, day, hour, min, sec];

  return dateArray.map((date) => zeroLeft(date));
}

export function checkIfDateIsValid(
  date: Date,
  year: number,
  month: number,
  day: number,
) {
  if (
    date.getFullYear() == year &&
    date.getMonth() == month - 1 &&
    date.getDate() == day
  ) {
    return true;
  }
  return false;
}
