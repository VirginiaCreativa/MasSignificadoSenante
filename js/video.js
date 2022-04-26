let boxVideo = document.querySelector('.box_selection_video');
let refVideo = document.querySelector('.control_video');

boxVideo.addEventListener('mouseover', (e) => refVideo.play());
boxVideo.addEventListener('mouseout', (e) => {
  refVideo.pause();
  refVideo.currentTime = 0;
});
