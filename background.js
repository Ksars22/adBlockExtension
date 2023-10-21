let adBlockActive = true;

chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.sync.set({ adblockEnabled: adBlockActive });
});

function blockAds(details) {
	return { cancel: true };
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.type === 'checkboxStateChanged') {
		var isChecked = message.isChecked;

		if (isChecked) {
			adBlockActive = true;
		} else {
			adBlockActive = false;
		}
	}
});

if (adBlockActive) {
	chrome.webRequest.onBeforeRequest.addListener(
		blockAds,
		{ urls: blocked_sites },
		["blocking"]
	);
}
else {
	chrome.webRequest.onBeforeRequest.removeListener(blockAds);
}
