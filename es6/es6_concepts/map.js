const arr1 = ["hello", "hi", "bye", "namaskar"];

arr1.pop();

arr1.map((val,idx,arr) => {
    console.log(val,idx,arr);
});
