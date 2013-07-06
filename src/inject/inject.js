/* Errorgasm - A savior to deal with Web Programming errors 		*/
/* Detecting error of JavaScript(currently) and send Message to BG	*/
//Dummying error event
chrome.extension.sendMessage({ dev_code_error: "invalid character"}, function(response) {

	//$('<div id="selesaiMasalah">Logo Errorgasm 5<br><ul id="solution"></ul></div>').prependTo('body');
	var solutions = "";
	for(var i in response.errorgasm_solver.items)
	{
		//var $res = $("<li />");
		//$res.append(response.errorgasm_solver.items[solution].title);
		//$res.appendTo($('#solution'));
		solutions = solutions + response.errorgasm_solver.items[i].title+"<br />";
	}

	$.gritter.add({
	// (string | mandatory) the heading of the notification
	title: 'Errorgasm - A savior to deal with Web Programming errors',
	// (string | mandatory) the text inside the notification
	text: solutions,
	// (string | optional) the image to display on the left
	image: chrome.extension.getURL("src/images/logo.png"),
	// (bool | optional) if you want it to fade out on its own or just sit there
	sticky: true, 
	// (int | optional) the time you want it to be alive for before fading out (milliseconds)
	time: 8000,
	// (string | optional) the class name you want to apply directly to the notification for custom styling
	
	});
});


