function handleResponse(message) {
  console.log("message from the content script:");
  console.log(message.response);
}

function sendMessageToTab(tabs) {
  console.log("sendMessageToTab() start");
	console.log("tabs="+tabs);
	if ( tabs == undefined || tabs == null ) return;

  console.log("tabs.length=" + tabs.length);
  console.log("tabs[0].id=" + tabs[0].id);

    for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
	console.log("tab.id="+tab.id);
    console.log("chrome.tabs.sendMessage() start");
    chrome.tabs.sendMessage(
      tab.id,
      {greeting: document.querySelector("#nglist").value},
      handleResponse
    );
    console.log("chrome.tabs.sendMessage() end");
    }
/*
  if (tabs.length > 0) {
    console.log("chrome.tabs.sendMessage() start");
    chrome.tabs.sendMessage(
      tabs[0].id,
      {greeting: document.querySelector("#nglist").value},
      handleResponse
    );
    console.log("chrome.tabs.sendMessage() end");
  }
*/
}

function saveOptions(e) {
  console.log("saveOptions() start");
  chrome.storage.local.set({
    nglist: document.querySelector("#nglist").value
  });
  console.log("chrome.tabs.query() start");
  chrome.tabs.query({}, sendMessageToTab);
}

function restoreOptions() {
  chrome.storage.local.get("nglist", (res) => {
    document.querySelector("#nglist").value = res.nglist || "";
  });
}



document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);