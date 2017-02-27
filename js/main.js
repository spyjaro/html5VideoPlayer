var vid,playButton,currentTimeText,durationTimeText,muteButton, volumeSlider, nextVideo;
var firstVideo , secondVideo , thirdVideo , fourthVideo , fifthVideo;
function initializePlayer(){
	//set object references
	vid = document.getElementById('my_video');
	prevVideo = document.getElementById('previousVideoButton')
	playButton = document.getElementById('playpauseButton');
	nextVideo = document.getElementById('nextVideoButton');
	seekSlider = document.getElementById('seekSlider');
	currentTimeText = document.getElementById('currentTimeText');
	durationTimeText = document.getElementById('durationTimeText');
	muteButton = document.getElementById('muteButton');
	volumeSlider = document.getElementById('volumeSlider');
	fullScreenButton = document.getElementById('fullScreenButton');

	//add event listeners 
	prevVideo.addEventListener('click',nextVideoFunc,false);
	playButton.addEventListener('click',playPause,false);
	nextVideo.addEventListener('click',nextVideoFunc,false);
	seekSlider.addEventListener('change',vidSeek,false);
	vid.addEventListener('timeupdate',seekTimeUpdate,false);
	muteButton.addEventListener('click',vidMute,false);
	volumeSlider.addEventListener('change',setVolume,false);
	fullScreenButton.addEventListener('click',fullScreen,false);

	list.addEventListener('click',playVideoFromPlaylist,false);

}
var videos = ["videos/1.mp4","videos/2.mp4","videos/3.mp4","videos/4.mp4","videos/5.mp4"];
window.onload = initializePlayer;
var currentVideo = 0;
function playPause() {
	if(vid.paused){
		vid.play();
		playButton.innerHTML = "&nbsp;&#10073&#10073&nbsp;"
	}else{
		vid.pause();
		playButton.innerHTML = "&#9658"
	}
}
function vidSeek(){
	var seekTo = vid.duration * (seekSlider.value / 100);
	vid.currentTime = seekTo;
}
function seekTimeUpdate() {
	var newTime = vid.currentTime*(100/vid.duration);
	seekSlider.value = newTime;

	var currentMinutes = Math.floor(vid.currentTime / 60);
	var currentSeconds = Math.floor(vid.currentTime - currentMinutes*60);
	var durationMinutes = Math.floor(vid.duration / 60);
	var durationSeconds = Math.floor(vid.duration - durationMinutes*60);

	if(currentSeconds < 10 ){currentSeconds = "0" + currentSeconds;}
	if(durationSeconds < 10 ){durationSeconds = "0" + durationSeconds;}
	if(currentMinutes < 10 ){currentMinutes = "0" + currentMinutes;}
	if(durationMinutes < 10 ){durationMinutes = "0" + durationMinutes;}

	currentTimeText.innerHTML= currentMinutes +":" + currentSeconds;
	durationTimeText.innerHTML= durationMinutes +":" + durationSeconds;
}
function vidMute(){
	if(vid.muted){
		vid.muted = false;
		muteButton.innerHTML = "&#128266;"
	}else{
		vid.muted = true;
		muteButton.innerHTML = "&#128263;"
	}
}
function setVolume(){
	vid.volume = volumeSlider.value/100;
}

function fullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	}
	else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	}
	else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}
function nextVideoFunc(){
	currentVideo++;
	vid.src=videos[currentVideo];
	if(currentVideo>videos.length){
		console.log("there is no more videos");
		currentVideo--;
		vid.play();
	}
	else{
		vid.play();
	}
};

function prevVideoFunc(){
	currentVideo--;
	vid.src=videos[currentVideo];
	vid.play();
};

// function playVideoFromPlaylist(e){
// 	e.target.play();
// }