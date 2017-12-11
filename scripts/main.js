window.onload = function() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../service-worker.js")
      .then(function(registration) {
        // Returns registration object
        // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
      }, function(err) {
        // registration failed
      });
  } else {
    // Service workers are not supported
    // Show indicator for poor offline support
  }
}

window.addEventListener("online", function(e) {
  // User went online
  // Resync data with server.
});

window.addEventListener("offline", function(e) {
  // User went offline
  // Queue up events for server.
});
