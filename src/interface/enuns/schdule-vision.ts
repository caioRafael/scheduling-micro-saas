export enum ScheduleVisionEnum {
  DAY = 'day',
  MONTH = 'month',
  WEEK = 'week',
}

export const VisionTypeRecord = {
  [ScheduleVisionEnum.DAY]: 'Dia',
  [ScheduleVisionEnum.MONTH]: 'Mês',
  [ScheduleVisionEnum.WEEK]: 'Semana',
}
