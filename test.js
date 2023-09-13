// Initialize Firebase
var firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyBozOO8DoF7OfRb-kI2WZxY5Djk3nKj6Fg",
    authDomain: "counter-test-project.firebaseapp.com",
    databaseURL: "https://counter-test-project-default-rtdb.firebaseio.com",
    projectId: "counter-test-project",
    storageBucket: "counter-test-project.appspot.com",
    messagingSenderId: "414979204747",
    appId: "1:414979204747:web:97a15a0242107e2ed0168e",
    measurementId: "G-VTJYGQF8Q1"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the visitors count in the database
  var visitorCountRef = firebase.database().ref('visitorCount');
  
  // Update the visitor count
  function updateVisitorCount(count) {
    var visitorCountElement = document.getElementById('visitor-count');
    visitorCountElement.textContent = count;
  }
  
  // Increment the visitor count
  function incrementVisitorCount() {
    visitorCountRef.transaction(function(currentCount) {
      return (currentCount || 0) + 1;
    });
  }
  
  // Listen for changes in the visitor count
  visitorCountRef.on('value', function(snapshot) {
    var count = snapshot.val();
    updateVisitorCount(count);
  });
  
  // Increment the visitor count when the page loads
  incrementVisitorCount();
