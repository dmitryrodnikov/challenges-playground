const strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }

    if (haystack.length < needle.length) {
        return -1;
    }

    for (let i=0, k=0; i<haystack.length; i++) {
        if (haystack[i] === needle[k]) {
            if (k === needle.length - 1) {
                return i - k;
            }
            k++;
        } else {
            i -= k;
            k = 0;
        }
    }

    return -1;
};
