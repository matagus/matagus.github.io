var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'https://secure.adnxs.com/ptv?id=10898046&appid=com.streema.simpleradio'
};

// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

//player.ima.requestAds();

var events = [
	google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
	google.ima.AdEvent.Type.CLICK,
	google.ima.AdEvent.Type.COMPLETE,
	google.ima.AdEvent.Type.FIRST_QUARTILE,
	google.ima.AdEvent.Type.LOADED,
	google.ima.AdEvent.Type.MIDPOINT,
	google.ima.AdEvent.Type.PAUSED,
	google.ima.AdEvent.Type.RESUMED,
	google.ima.AdEvent.Type.STARTED,
	google.ima.AdEvent.Type.THIRD_QUARTILE
];

for (var index = 0; index < events.length; index++) {
	player.ima.addEventListener(events[index], function(event) { console.log(event.type); });
};

player.ima(options);
