export function formatNum(num: number) {
  const numLength = String(num).length;
  return numLength === 1 ? '00' + num : numLength === 2 ? '0' + num : num;
}
