var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'https://secure.adnxs.com/ptv?id=10898046&appid=com.streema.simpleradio'
};

player.ima(options);
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

player.ima.setAdBreakReadyListener(
  function() {
    console.log('>> setAdBreakReadyListener!');
  }
);

player.ima.addContentEndedListener(
  function() {
    console.log('>> addContentEndedListener!');
  }
);

player.ima.addContentAndAdsEndedListener(
  function() {
    console.log('>> addContentAndAdsEndedListener!');
    player.play()
  }
);

//player.ima.requestAds();

