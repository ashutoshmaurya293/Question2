let firstUniqChar = function(s) {
    let char_count = { };
    for (let i = 0; i < s.length; i++) {
        if (char_count[s[i]] === undefined) {
            char_count[s[i]] = 1;
        } else {
            char_count[s[i]] += 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (char_count[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};