var tabStates = [];

function tabUpdated(tabId, changeInfo, tab) {
	if (tab.url.indexOf('://www.facebook.com') != -1) {
    	chrome.pageAction.show(tabId);

    	if (tabStates[tabId] == 'enabled') {
    		chrome.pageAction.setIcon({tabId: tab.id, path: 'creeper.png'});
    		if (changeInfo.status == 'complete') {
    			chrome.tabs.insertCSS(tabId, {file: "content.css"});
    		}
    	}
    }
}

function creeperButtonClicked(tab) {
	if (tabStates[tab.id] == 'enabled') {
		delete tabStates[tab.id];
		chrome.pageAction.setIcon({tabId: tab.id, path: 'creepout.png'});
		chrome.tabs.reload(tab.id);
		
	} else {
		tabStates[tab.id] = 'enabled';
		chrome.pageAction.setIcon({tabId: tab.id, path: 'creeper.png'});
		chrome.tabs.insertCSS(tab.id, {file: "content.css"});
	}
	
}

chrome.tabs.onUpdated.addListener(tabUpdated);
chrome.pageAction.onClicked.addListener(creeperButtonClicked);