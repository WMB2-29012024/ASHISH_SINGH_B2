function isIsomorphic(a, n) {
    if (a.length !== n.length) {
        return false;
    }

    let mapAtoN = {};
    let mapNtoA = {};

    for (let i = 0; i < a.length; i++) {
        let charA = a[i];
        let charN = n[i];

        if (mapAtoN[charA] === undefined && mapNtoA[charN] === undefined) {
            mapAtoN[charN] = charN;
            mapNtoA[charA] = charA;
        } else {
            if (mapAtoN[charA] !== charN || mapNtoA[charN] !== charA) {
                return false;
            }
        }
    }

    return true;
}


console.log(isIsomorphic("egg", "add")); 
console.log(isIsomorphic("foo", "bar")); 
console.log(isIsomorphic("paper", "title")); 


