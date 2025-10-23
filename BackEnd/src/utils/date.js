export const oneYearFromNow = () =>
  new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);

export const thirtyDaysFromNow = () =>
  new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

export const fifteenMinutesFromNow = () =>
  new Date(Date.now() + 15 * 60 * 1000);

export const fiveMinutesAgo = () => new Date(Date.now() - 5 * 60 * 1000);

export const oneHourFromNow = () => new Date(Date.now() + 60 * 60 * 1000);

export const ONE_DAY_MS = 1000 * 60 * 60 * 24;
