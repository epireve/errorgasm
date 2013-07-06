/* Errorgasm - A savior to deal with Web Programming errors 		*/
/* Receiving Message from Injest.js and currently call the SOF API*/
chrome.extension.onMessage.addListener(
 function(request, sender, sendResponse) {
 	console.log("Receiving error data");
 	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.stackexchange.com//2.1/search?pagesize=5&order=desc&sort=relevance&tagged=javascript;¬tagged=jquery&site=stackoverflow", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    // JSON.parse does not evaluate the attacker's scripts.
	    var stack_data = JSON.parse(xhr.responseText);
	    sendResponse({errorgasm_solver:stack_data});
	  }
	}
	xhr.send();
	return true;
});
