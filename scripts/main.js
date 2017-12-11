window.onload = function() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../service-worker.js")
      .then(function(registration) {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      }, function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
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
