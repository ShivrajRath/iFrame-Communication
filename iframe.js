$('body').on('click', '#btnTriggerParent', function(e){
	
	// window.top.postMessage('Message which iframe needs to pass', 'allowed domains')
    window.top.postMessage($(e.target).data("command"),"*");
});