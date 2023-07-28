let retweetCount = 0;

function retweet() {
    retweetCount++;
    updateRetweetCount();
}

function updateRetweetCount() {
    const retweetCountElement = document.getElementById("retweetCount");
    retweetCountElement.textContent = retweetCount;
}