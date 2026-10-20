// 1. Click a button to show or hide its matching sticker.
const stickerButtons = document.querySelectorAll('.stickers button');
const artwork = document.querySelector('#artwork');
const original = document.querySelector('#original');
const pink = document.querySelector('#pink');

stickerButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const sticker = document.getElementById(button.dataset.sticker);
    sticker.classList.toggle('visible');
    button.classList.toggle('active');
    button.setAttribute('aria-pressed', button.classList.contains('active'));
  });
});

// 2. Switch between the two color palettes.
function changeColor(isPink) {
  artwork.classList.toggle('pastel', isPink);
  original.classList.toggle('active', !isPink);
  pink.classList.toggle('active', isPink);
  original.setAttribute('aria-pressed', !isPink);
  pink.setAttribute('aria-pressed', isPink);
}
original.addEventListener('click', function() { changeColor(false); });
pink.addEventListener('click', function() { changeColor(true); });
