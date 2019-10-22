function swap(array, i) {
  let placeholder = array[i];
  array[i] = array[i + 1];
  array[i + 1] = placeholder;
}

function bubbleSort(array) {
  for (let j = array.length - 1; j > 0; j--) {
    let counter = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i);
        counter++;
      }
    }
    if (counter === 0) {
      return array;
    }
  }
  return array;
}
