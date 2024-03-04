


const countPref = (words, pref) => {
    let count = 0;

    for (let i = 0; i<words.length; i++) {
        let isPrefix = true;

        console.log(words[i]);
        for (let j = 0; j<pref.length; j++) {
            console.log(j, words[i] [j], pref[j])
            if(words[i][j] !== pref[j]) {
                isPrefix = false;
                break;
            }
        }

        if(isPrefix) {
            count++;
        }
    }
}

return count;