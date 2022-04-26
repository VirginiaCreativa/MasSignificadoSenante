let boxVideo = document.querySelector('.box_selection_video');
let refVideo = document.getElementsByTagName('video');

for (let i = 0; i < refVideo.length; i++) {
  refVideo[i].addEventListener('mouseover', (e) => refVideo[i].play());
}

for (let i = 0; i < refVideo.length; i++) {
  refVideo[i].addEventListener('mouseout', (e) => {
    refVideo[i].pause();
    refVideo[i].currentTime = 0;
  });
}
