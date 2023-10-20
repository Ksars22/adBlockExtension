function skipAd() {
    const skipAdButton = document.querySelector('.ytp-ad-skip-button-container button');
    const video = document.querySelector('video');
    const adClass = document.querySelector('.ytp-ad-module div');
    
    if (skipAdButton == null && video && video.currentTime <= 5 && adClass)
    {
        video.currentTime = video.duration;
    }
    else if (skipAdButton && video && video.currentTime <= 5) {
        skipAdButton.click();
    }

}
    
setInterval(skipAd, 1000);
