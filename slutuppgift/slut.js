const changeBgBtn = document.getElementById('change-bg-btn');
const goodVibesBtn = document.getElementById('good-vibes-btn');
const timeBtn = document.getElementById('time-btn');
const changePicBtn = document.getElementById('change-pic-btn');
const hidePicBtn = document.getElementById('hide-pic-btn');
const showPicBtn = document.getElementById('show-pic-btn');
const title = document.getElementById('title');
const picture = document.getElementById('picture');
const grayBox = document.getElementById('gray-box');

changeBgBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});

goodVibesBtn.addEventListener('click', () => {
  title.textContent = 'Good Vibes Only';
});

timeBtn.addEventListener('click', () => {
  const now = new Date();
  title.textContent = now.toLocaleTimeString();
});

changePicBtn.addEventListener('click', () => {
  picture.src = 'bilder/WIN_20221118_12_28_02_Pro.png';
});

hidePicBtn.addEventListener('click', () => {
  picture.style.display = 'none';
});

showPicBtn.addEventListener('click', () => {
  picture.style.display = 'block';
});


