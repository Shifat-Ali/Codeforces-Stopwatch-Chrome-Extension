try {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      chrome.scripting.executeScript({
        files: ["contentScript.js", "popup.js"],
        target: { tabId: tab.id },
      });
    }
  });
} catch (error) {
  console.log(error);
}
