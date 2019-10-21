chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({backgroundColor: document.body.style.backgroundColor, color: document.body.style.color}, function() {
    console.log('setting colors');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {schemes: ['https', 'http']},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});