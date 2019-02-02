  var myS = new Set(['a', 'e', 'i', 'o', 'u']);
    var myS2 = new Set(['b', 'c', 'd', 'f', 'g']);
    var myS3 = new Set(['h', 'j', 'k', 'l', 'm']);
    switch (true) {
        case myS.has(s[0]):
            letter = 'A';
            break;
        case myS2.has(s[0]):
            letter = 'B';
            break;
        case myS3.has(s[0]):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}