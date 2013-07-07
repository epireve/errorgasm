console.log("Loaded rails catcher\n");

var isRailsError;
var theRailsError = '';

isRailsError = checkIsRailsError(document);
console.log('isRailsError = ' + isRailsError + "\n")
if(isRailsError == true)
{
  console.log('The Error = ' + getRailsError() + "\n")
}

function getRailsError()
{
  if(isRailsError == true)
  {
    error = document.getElementsByTagName('h1')[0].innerHTML;
    var n = error.indexOf('in');
    error = error.substring(0,n);
    error = error.replace(/^\s+|\s+$/g, '')
    error = error.replace(" ","%20");
    return error;
  }
  else
  {
    return ''
  }
}

function checkIsRailsError(thePage)
{
  if(document.getElementById('Framework-Trace') != "" && 
  document.getElementById('Application-Trace') != "" &&
  document.getElementById('Full-Trace') != "" )
  { 
    return true
  }
  else {
    return false
  }
}