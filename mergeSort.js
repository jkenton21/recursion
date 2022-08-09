//mergeSort.js
// Merge Sort recursive function for sorting an array.

function mergeSort(array) {

    if(array.length < 2) {
        return array;
    } else {
        const array1 = mergeSort(array.slice(0, array.length / 2));
        const array2 = mergeSort(array.slice(array.length / 2));
        const merge = [];
        while(array1.length > 0 || array2.length > 0) {
            merge[merge.length] = (array1.length === 0 || array2[0] < array1[0] ? array2 : array1).shift();
        }
        return merge;
    }
}

console.log(mergeSort([5, 7, 20, 1, 4, 2, 12]));