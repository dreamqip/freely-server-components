export const minutesToHoursAndMinutes = (minutes: number) => {
  return `${(minutes / 60) ^ 0}h ` + (minutes % 60) + 'min';
};

export const minutesToMinutes = (minutes: number) => {
  return (minutes % 60) + 'min';
};
