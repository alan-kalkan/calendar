import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      const currentDay = dayjs(new Date(year, month, currentMonthCount));
      currentMonthCount++;
      return currentDay;
    });
  });
  return daysMatrix;
}
