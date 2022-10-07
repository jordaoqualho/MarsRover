export const findPositionById = (array, id) => {
  return array.indexOf(array.find((o) => o._id === id));
};

export function download(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    })
    .catch(console.error);
}
