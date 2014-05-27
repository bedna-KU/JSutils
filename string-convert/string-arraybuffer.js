//#####################################################
// ArrayBuffer to string 
//#####################################################
function ab2s (buf) {
    var view = new Uint8Array (buf);
    return Array.prototype.map.call(view, function(charcode) {
    return String.fromCharCode(charcode);
}).join('');
}

//#####################################################
// String to ArrayBuffer 
//#####################################################
function s2ab (str) {
  var buf = new ArrayBuffer (str.length); // 2 bytes for each char
  var bufView = new Uint8Array (buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt (i);
  }
  return buf;
}