
function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function selection(arr) {
  var lens = arr.length;
  for (var i = 0; i < lens; i++) {
    var min = i;
    for (var j = i + 1; j < lens; j++) {
      if ( arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min)
  }
  return arr
}


function bubble(arr) {
  var lens = arr.length;
  for (var i = lens - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}


function insertion(arr) {
  var lens = arr.length;
  for (var i = 1; i < lens; i++) {
    for (var j = i; j > 0 && arr[j - 1]  > arr[j]; j--) {
      swap(arr, j, j - 1)
    }
  }
  return arr;
}

function insertion2(arr) {
  var lens = arr.length;
  for (var i = 1; i < lens; i++) {
    var j = i - 1;
    while ( j > 0 && arr[j] > arr[i] ) {
      swap(arr, j, j + 1)
      j--;
    }
  }
}


function quickSort(arr) {
  var lens = arr.length;
  if (lens < 2) {
    return arr; 
  }
  var pivot = arr[0];
  var lesser = [];
  var greater = [];
  for (var i = 0; i < lens; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

