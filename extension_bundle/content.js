alert("Generating summary highlights. This may take up to 30 seconds depending on length of article.");

function unicodeToChar(text) {
	return text.replace(/\\u[\dA-F]{4}/gi, 
	      function (match) {
	           return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
	      });
}

// capture all text
var textToSend = document.body.innerText;

// summarize and send back
const api_url = 'YOUR_GOOGLE_CLOUD_FUNCTION_URL';

fetch(api_url, {
  method: 'POST',
  body: JSON.stringify(textToSend),
  headers:{
    'Content-Type': 'application/json'
  } })
.then(data => { return data.json() })
.then(res => { 
	$.each(res, function( index, value ) {
		value = unicodeToChar(value).replace(/\\n/g, '');
		document.body.innerHTML = document.body.innerHTML.split(value).join('<span style="background-color: #fff799;">' + value + '</span>');
	});
 })
.catch(error => console.error('Error:', error));






