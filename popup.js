let toggleColor = document.getElementById('toggleColor');

let originalBackgroundColor;
let originalColor;
chrome.storage.sync.get('backgroundColor', function(data) {
  originalBackgroundColor = data.backgroundColor;
});

chrome.storage.sync.get('color', function(data) {
  originalColor = data.color;
});

let backgroundColor;
let color;
if(document.body.style.backgroundColor === ""){
  backgroundColor = "#000000";
  color = "#ffffff";
}
else{
  backgroundColor = originalBackgroundColor;
  color = color;
}

toggleColor.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + backgroundColor + '";' + 'document.body.style.color = "' + color + '";'});
  });
};