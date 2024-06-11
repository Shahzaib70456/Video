let player;
const menuContainer = document.getElementById('menu-container');

// This function is called when the YouTube API is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390', // Player height
    width: '640', // Player width
    videoId: 'HqIMiD2sj10', // YouTube video ID
    playerVars: {
      'rel': 0, // Disable related videos
      'modestbranding': 1, // Reduce YouTube branding
      'autoplay': 1, // Auto-play the video
      'controls': 1, // Show controls
      'showinfo': 0, // Hide video information
      'fs': 1, // Allow fullscreen
      'iv_load_policy': 3, // Disable annotations
      'cc_load_policy': 0, // Disable closed captions
      'playsinline': 1 // Play inline on mobile devices
    },
    events: {
      'onReady': onPlayerReady, // Function to call when player is ready
      'onStateChange': onPlayerStateChange // Function to call when player state changes
    }
  });
}

// Function to handle player readiness
function onPlayerReady(event) {
  console.log('Player is ready');
  // Perform actions when the player is ready, if needed
}

// Function to handle player state changes
function onPlayerStateChange(event) {
  // Check if the video has ended
  if (event.data === YT.PlayerState.ENDED) {
    // Show the menu
    showMenu();
  }
}

// Function to show the menu
function showMenu() {
  menuContainer.style.display = 'flex'; // Display the menu container as flexbox
}

// Function to redirect to a different page
function redirectToPage(page) {
  window.location.href = page; // Redirect to the specified page
}
