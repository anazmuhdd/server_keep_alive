const axios = require('axios');

// Your target Render service URLs
const urls = [
  'https://pg-app-backend-7pq9.onrender.com',
  'https://jarvis-acsia-teams.onrender.com',
  'https://jarvis-acsia.onrender.com'
];

async function ping() {
  console.log(`\n[${new Date().toISOString()}] --- Starting Keepalive Cycle ---`);

  for (const url of urls) {
    try {
      console.log(`[Keepalive] Pinging ${url}...`);
      
      // 10-second timeout to prevent the script from hanging indefinitely
      const response = await axios.get(url, { timeout: 10000 });
      
      console.log(`[Keepalive] Success: ${url} (Status: ${response.status})`);
    } catch (error) {
      // Log errors but continue to the next URL in the list
      console.error(`[Keepalive] Error pinging ${url}: ${error.message}`);
    }
  }

  console.log(`[${new Date().toISOString()}] --- Cycle Complete ---`);
  
  // Wait exactly 60 seconds AFTER the last ping finishes before starting again
  setTimeout(ping, 60 * 1000);
}

// Start the first ping immediately
ping();
