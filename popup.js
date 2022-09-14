document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('optm');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      'use strict';
      var href = document.location.href;
  
      if (href.indexOf("/embed/") == -1) {
          if (href.indexOf("disable_polymer") == -1) {
              document.location += (href.indexOf("?") == -1 ? "?":"&") + "disable_polymer=1";
          }
      }
    });
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green-loop.");
    });

    function reloadMainTab() {
      chrome.tabs.reload();
  }
/*
  function clearMe(tab) {
    var ms = (30 * 60) * 1000; // 30 minutes
    var time = Date.now() - ms;
    chrome.browsingData.removeCache({"since": time}, function() {
      chrome.tabs.update(tab.id, { url: 'http://youtube.com/' });
    });
  }
*/
  document.getElementById('optm').addEventListener('click', reloadMainTab);
    //alert("This is pure shit!");
  }, false);
}, false);