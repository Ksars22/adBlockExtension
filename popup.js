document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('iput');

    chrome.storage.sync.get('adblockEnabled', function(data) {
        checkbox.checked = data.adblockEnabled;
    });

    checkbox.addEventListener('change', function(event) {

        chrome.runtime.sendMessage({ type: 'checkboxStateChanged', isChecked: event.target.checked });
        chrome.storage.sync.set({adblockEnabled: checkbox.checked});
    });
});