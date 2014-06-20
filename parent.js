/**
 * Receiving message from iFrame
 */
window.addEventListener('message', function(event) {
	switch(event.data){
		case 'color':
			document.body.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
			break;
		case 'alert':
			alert('An alert event from iFrame');
			break;
	}
},false);

/**
 * Open link into iFrame
 */
$('body').on('click', '.cls_navLink', function(e){
	e.stopPropagation();
	$('#myFrame').attr('src', $(e.target).attr("href"));
	return false;
});