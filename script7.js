const countPrefixes = function(words, s) {
    let count = 0;
    for(let i = 0; i<words.length; i++)
    if (isPrefix(s, words[i])) {
        count++;
    }
    return count
};
function isPrefix(s, word) {
    if(s.length>=word.length) {
        for(let i = 0; i  < word.length; i++) {
            if(word.charAt(i !== s.charAt(i))) {
                return false
            }
        }
        return true
    }
}