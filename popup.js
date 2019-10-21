let toggleColor = document.getElementById('toggleColor');
  toggleColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + "#000000" + '";' + 'document.body.style.color = "' + "#ffffff" + '";'});
    });
  };