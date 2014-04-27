/*
 *  Just trigger the content script, they know what they are doing
 */
var _fn_contextMenuClick = function (info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "doit"}, function(response) {
            console.log(JSON.stringify(response));
        });
    });
};

chrome.contextMenus.create({"title": "isolate image", "contexts":["all"], "onclick": _fn_contextMenuClick});