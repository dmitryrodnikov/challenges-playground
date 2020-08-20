// flatten([1,12, [13]]) => [1,12,13]
// flatten([1,12, [13,[14],1] 12]], 1) => [1,12,13, [14], 1, 12]

function flatten(arr, depth = Infinity) {
    const newArr = [];
    let level = 0;

    function step(a) {
        level += 1;
        a.forEach(item => {
            if (level <= depth && Array.isArray(item)) {
                step(item);
            } else {
                newArr.push(item);
            }
        });
    }

    step(arr);
    return newArr;
}
