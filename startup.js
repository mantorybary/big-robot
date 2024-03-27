if (w !== '') {
      result.push(dictionary[w]);
    }

    return result;
  };

  exports.LZW.decompress = function (compressedData) {
    var i;
    var dictionary = [];
    var w;
    var result;
    var key;
    var entry = '';

    for (i = 0; i < this.dictionarySize; i = i + 1) {
      dictionary[i] = String.fromCharCode(i);
    }

    w = String.fromCharCode(compressedData[0]);
    result = w;

    for (i = 1; i < compressedData.length; i = i + 1) {
      key = compressedData[i];
      if (dictionary[key]) {
        entry = dictionary[key];
      } else {
        if (key === this.dictionarySize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
