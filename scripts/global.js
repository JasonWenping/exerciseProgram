function addClass(elem,value){
  if (!elem.className)
  {
	  elem.className = value;
  }
  else{
	  var classname = elem.calssName;
	  classname += " ";
	  classname += value;
	  elem.classname = classname;
  }
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
			}
	}
}

function insertAfter(newelem,targetElem){
	var parent = targetElem.parentNpde;
	if (parent.lastChild == targetElem)
	{
		parent.appentChild(newelem);
	}
	else{
		var next = targetElem.nextSibling;
		parent.insertBefore(newelem,next);
	}
}

function moveElement(elem,left,top,interval){
	alert("ddd");
	if(!document.getElementById) return false;
	if(!document.getElementById(elem)) return false;
	var elems = document.getElementById(elem);
	var xpos = parseInt(elems.style.left);
	var ypos = parseInt(elems.style.top);
	if (xpos == left && ypos == top )
	{
		return true; 
	}
	if (xpos < left)
	{
		xpos ++;
	}
	if (xpos >left)
	{
		xpos --;
	}
	if (ypos < top)
	{
		ypos ++;
	}
	if (ypos > top)
	{
		ypos --;
	}
	elems.style.left = xpos + "px";
	elsms.style.top = ypos + "px";
	var repeat = "moveElement('"+elem+","+left+","+top+","+interval+"')";
	movement = setTimeout(repeat,interval);
}