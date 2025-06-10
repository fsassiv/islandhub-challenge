export const convertToNominal = (n: number): string => {
  const billion = 1000000000;
  const million = 1000000;
  const kilo = 1000;

  if (n >= billion) {
    return (n / billion).toFixed(0) + 'B+';
  }
  if (n >= million) {
    return (n / million).toFixed(0) + 'M+';
  }
  if (n >= kilo) {
    return (n / kilo).toFixed(0) + 'K+';
  }
  return n.toString();
};

export const toCurrency = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(value);
};
