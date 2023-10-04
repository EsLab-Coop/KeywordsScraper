document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("scrapeButton").addEventListener("click", function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "scrapeKeywords"}, function(response) {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    return;
                }

                // Alınan veriyi tailwind ile  tabloda göstereceğim.
                if (response && response.keywords) {
                    const table = document.getElementById("resultsTable");
                    table.innerHTML = "";

                    for (const keyword of response.keywords) {
                        const row = table.insertRow();
                        const cell = row.insertCell(0);
                        cell.textContent = keyword;
                    }
                } else {
                    console.error("No valid response received.");
                }
            });
        });
    });
});
