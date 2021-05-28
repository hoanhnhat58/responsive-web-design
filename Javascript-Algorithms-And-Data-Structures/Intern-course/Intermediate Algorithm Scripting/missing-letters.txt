function fearNotLetter(str) {
   for (var i = 0; i < str.length; i++) {
    var word = str.charCodeAt(i);
    if (word !== str.charCodeAt(0) + i) {
      return String.fromCharCode(word - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");