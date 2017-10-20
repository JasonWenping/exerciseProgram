function navStyle(){
	if(!document.getElementsByTagName) return false;

	var navigate = document.getElementsByTagName("nav");
	if(navigate.length == 0) return false;

	var url = window.location.href;
	var link = navigate[0].getElementsByTagName("a");
	//alert(url);
	for ( var i = 0 ; i<link.length ; i ++ )
	{
		var linkurl = link[i].getAttribute("href");
		//alert(linkurl);
		if (url.indexOf(linkurl) != -1)
		{
			//alert(url.indexOf(linkurl));
			link[i].setAttribute("class","hover");
		}
	}
}

addLoadEvent(navStyle);