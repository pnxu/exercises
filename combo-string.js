function comboString(a, b){
    const longString = a.length > b.length ? a : b;
    const shortString = a.length < b.length ? a : b;   
    // console.log({shortString, longString})
    return shortString + longString + shortString;
}