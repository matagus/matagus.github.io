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

player.ima(options);

var startEvent = 'click';

var initAdDisplayContainer = function() {
  // Initialize the ad container when the video player is clicked, but only the
  // first time it's clicked.
  player.ima.initializeAdDisplayContainer();
  wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);

  player.ima.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function(event) { console.log(event.type); player.play(); });

  events.forEach(function(eventType) {
    player.ima.addEventListener(eventType, function(e) {
      console.log(e);
      var eventLogElem = document.getElementById('event-log');
      var newItem = document.createElement("li");
      var itemText = document.createTextNode((new Date()).toJSON() + ': ' + e.type);
      newItem.appendChild(itemText);
      eventLogElem.appendChild(newItem);
    });
  });
}

var wrapperDiv = document.getElementById('content_video');
wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
