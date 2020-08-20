// Create ranges from unsorted array
// compress([1, 4, 5, 2, 3, 9, 8, 11, 0]); // '0-5,8-9,11'
// compress([1, 4, 3, 2, 6, 7, 8]); // '1-4,6-8'
// compress([1, 4]); // '1,4'
// compress([]); // ''
// compress([1]); // '1'

// First approach
function compress(arr) {
    if (arr.length === 0) {
        return '';
    }

    if (arr.length === 1) {
        return arr.join('');
    }

    arr.sort((a, b) => a - b);
    const result = [];
    let currRange = [];
    
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        const prev = arr[i - 1];
        
        if (currRange.length === 0) {
            currRange[0] = prev;
        }

        if (curr - prev === 1) {
            currRange[1] = curr;

            if (i === arr.length - 1) {
                result.push(currRange);
            }
        }

        if (curr - prev > 1) {

            result.push(currRange);
            currRange = [];
            
            if (i === arr.length - 1) {
                result.push([curr]);
            }
        }
    }

    return result.map(item => item.join('-')).join(',');
}
