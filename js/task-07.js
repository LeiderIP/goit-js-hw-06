const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', updateFontSize);

function updateFontSize() {
  const fontSize = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSize;
}
