const merge = (
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] => {
  let collect = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    let val1 = i <= collection_1.length - 1 ? collection_1[i] : Infinity;
    let val2 = j <= collection_2.length - 1 ? collection_2[j] : Infinity;
    let val3 = k >= 0 ? collection_3[k] : Infinity;

    let result = Math.min(Number(val1), Number(val2), Number(val3));

    if (result === val1) {
      collect.push(val1);
      i++;
    } else if (result === val2) {
      collect.push(val2);
      j++;
    } else if (result === val3) {
      collect.push(val3);
      k--;
    }
  }
  return collect;
};

module.exports = { merge };
