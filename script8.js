const digitSum = function(s, k) {
    while(s.length > k) {
        let str = ''
        for(let i= 0; i< s.length; i+=k){
            let sum = 0;
            for(let j =i; j<s.length && j < i + k; j++){
                sum+= parseInt(s[j]);
            }
            str += sum.toString()
        }
        s =str
    }
    return s
};