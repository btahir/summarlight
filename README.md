# Summarlight

The Summarlight Chrome Extension highlights the most important parts of posts/stories/articles. You can find the extension here: https://chrome.google.com/webstore/detail/summarlight/ligjmagakdphdlenhhncfegpdbbendlg?hl=en-US&gl=US



## Project Summary

The Summarlight Chrome extension is a simple chrome extension that uses a serverless architecture to generate summaries of the text of a web page. 

## Files Structure

The extension_bundle folder has all the files required to publish a Chrome Extension.

popup.html and popup.js handle the look and behavior of our extension. In this case it is a simple dropdown with a 'Highlight Summary' option. An event is triggered when this option is clicked. The event fired is contained in the content.js file.

The content.js file has a fetch request that triggers our Google Cloud Function. It sends over the text of the article and returns the summary (generated by our google cloud function).

The main.py file is the python file for our Google Cloud Function. We use gensim text summarisation to generate summaries of texts. The read article function processes the incoming text and the generate summary returns the summary of that text.
