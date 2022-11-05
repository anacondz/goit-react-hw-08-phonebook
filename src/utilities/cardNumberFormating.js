export const cardNumberFormating = number => {
  const formatingArr = [];

  number.split('').forEach((symbol, index) => {
    if (index === 3) return formatingArr.push(` (${symbol}`);
    if (index === 5) return formatingArr.push(`${symbol}) `);
    if (index === 9) return formatingArr.push(`-${symbol}`);
    if (index === 11) return formatingArr.push(`-${symbol}`);
    formatingArr.push(symbol);
  });

  return formatingArr.join('');
};
