chrome.runtime.onInstalled.addListener(function() {
    'use strict';
    var href = document.location.href;
    if (href.indexOf("/embed/") == -1) {
        if (href.indexOf("disable_polymer") == -1) {
            document.location += (href.indexOf("?") == -1 ? "?":"&") + "disable_polymer=1";
        }
    }
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
      })
});
