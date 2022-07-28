let objURL;
export const openB64 = (b64data, mime) => {
  const blob = b64toBlob(b64data, mime);
  if (objURL) {
    URL.revokeObjectURL(objURL);
  }
  objURL = URL.createObjectURL(blob);
  window.open(objURL, "_blank");
};

const b64toBlob = (b64data, mime) => {
  const arrayBuffer = b64toArrayBuffer(b64data);
  return new Blob([arrayBuffer], { type: mime });
};

const b64toArrayBuffer = (b64data) => {
  const binaryStr = atob(b64data);
  const length = binaryStr.length;

  const arrayBuffer = new ArrayBuffer(length);
  const u18Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < length; i += 1) {
    u18Array[i] = binaryStr.charCodeAt(i);
  }

  return arrayBuffer;
};