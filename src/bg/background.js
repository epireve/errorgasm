/* Errorgasm - A savior to deal with Web Programming errors 		*/
/* Receiving Message from Injest.js and currently call the SOF API*/
console.log('inside background.js');
//window.addEventListener('error',function(){alert('an error occurred');});
// chrome.windows.getCurrent({},function(Window window){
//   alert(window);
// });
chrome.extension.onMessage.addListener(
 function(request, sender, sendResponse) {
 	console.log("Receiving error data");
 	var xhr = new XMLHttpRequest();
 	var theerror = request.dev_code_error;
 	console.log("The error: " + theerror + "\n");
 	var url = "https://api.stackexchange.com/2.1/search/advanced?order=desc&sort=activity&title=" + theerror + "&site=stackoverflow&pagesize=5";
 	console.log('The URL: ' + url + "\n");
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    console.log("XHR: " + xhr.responseText + "\n");
	    // JSON.parse does not evaluate the attacker's scripts.
	    var stack_data = JSON.parse(xhr.responseText);
	    sendResponse({errorgasm_solver:stack_data});
	  }
	}

	xhr.send();
	return true;
});
