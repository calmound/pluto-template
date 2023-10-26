import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

// 格式化日期
export function formatDate(
  date: Dayjs | string,
  formatString: string = 'YYYY-MM-DD',
): string {
  return dayjs(date).format(formatString);
}

// 获取当前日期
export function getCurrentDate(formatString: string = 'YYYY-MM-DD'): string {
  return dayjs().format(formatString);
}

// 计算日期差
export function calculateDateDifference(
  startDate: Dayjs | string,
  endDate: Dayjs | string,
): number {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  return end.diff(start, 'day');
}

// 自定义功能示例：判断日期是否是工作日
export function isWeekday(date: Dayjs | string): boolean {
  const dayOfWeek = dayjs(date).day();
  return dayOfWeek >= 1 && dayOfWeek <= 5; // 星期一到星期五为工作日
}

export default dayjs;
