/* Errorgasm - A savior to deal with Web Programming errors 		*/
/* Detecting error of JavaScript(currently) and send Message to BG	*/
//Dummying error event
chrome.extension.sendMessage({ dev_code_error: "invalid character"}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------


	}
	}, 10);
	$('<div id="selesaiMasalah">Logo Errorgasm 5<br><ul id="solution"></ul></div>').prependTo('body');
	
	for(var solution in response.errorgasm_solver.items)
	{
		var $res = $("<li />");
		$res.append(response.errorgasm_solver.items[solution].title);
		$res.appendTo($('#solution'));
	}
	
	
	 
});


