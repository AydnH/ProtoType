ga(function(tracker) {
  var originalSendHitTask = tracker.get('sendHitTask');
  tracker.set('sendHitTask', function(model) {
    var payLoad = model.get('hitPayload');
    originalSendHitTask(model);
    var gifRequest = new XMLHttpRequest();
    // Send __ua.gif to a remote server
    var gifPath = "https://www.your-domain.com/__ua.gif";
    gifRequest.open('GET', gifPath + '?' + payLoad, false);
    gifRequest.send();
  });
});