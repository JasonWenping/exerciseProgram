//window.onload = picGallery;
function picGallery(){
   if(!document.getElementsByTagName) return false;
   if(!document.getElementById) return false;
   if(!document.getElementById("gallery")) return false;

   var gallerys = document.getElementById("gallery");
   var link = gallerys.getElementsByTagName("a");		   

   for ( var i = 0 ; i<link.length  ; i ++ )
   {
	   link[i].onclick = function(){

		   return showPic(this) ? true:false;
	   }
   }
}

function showPic(witchpic){
	//if(!document.getElementById) return false;
	//if(!document.getElementById("palceholder") return false;

	var source = witchpic.getAttribute("href");
	var img = document.getElementById("placeholder");
	img.setAttribute("src",source);
}

addLoadEvent(picGallery);