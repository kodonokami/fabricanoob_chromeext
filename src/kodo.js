document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("kodoforum").addEventListener("click", function(){
	window.open("http://fabricadenoobs.boards.net/","","");
  });
  
  document.getElementById("kodocanal").addEventListener("click", function(){
	window.open("https://www.youtube.com/channel/UCGObNjkNjo1OUPLlm8BTb3A/","","");
  });
  
  document.getElementById("kodosite").addEventListener("click", function(){
	window.open("http://fabricadenoobs.wix.com/home","","");
  });
    
  document.getElementById("kodotwitter").addEventListener("click", function(){
	window.open("https://twitter.com/_natanael666","","");
  });
  
  document.getElementById("kododiscord").addEventListener("click", function(){
	window.open("https://discordapp.com/invite/KHd5UAA","","");
  });
  
  fbnoobs_req = new XMLHttpRequest();
	fbnoobs_req.open("GET","https://www.youtube.com/channel/UCGObNjkNjo1OUPLlm8BTb3A/videos",false);
	fbnoobs_req.send();
	fbreg = /yt-lockup-title.*accessible-description/mg;
	fbregurl = /watch\?v.*?<\/a>/m;
	kcont = 0;
	document.getElementById("videos").innerHTML = "";
	while(reto = fbreg.exec(fbnoobs_req.responseText)){
	    if(kcont == 5){
		   break;
		}
		link = fbregurl.exec(reto);
		
		
		
		document.getElementById("videos").innerHTML = document.getElementById("videos").innerHTML + "<a src=https://www.youtube.com/watch?v=" + link + "<br>";
		kcont++;
	}
  
  
});