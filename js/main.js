function playPause(btn,vid) {
	var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
		btn.innerHTML = "&nbsp;&#10073&#10073&nbsp;"
	}else{
		vid.pause();
		btn.innerHTML = "&#9658"
	}
}