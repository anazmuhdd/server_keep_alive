const axios = require('axios');


const urls = ['https://pg-app-backend-7pq9.onrender.com','https://jarvis-acsia-teams.onrender.com','https://jarvis-acsia.onrender.com'];

async function ping() {
  try {
    for (const url of urls) {
      console.log(`[Keepalive] Pinging ${url}}`);
      const response = await axios.get(url, { timeout: 10000 });
      console.log(`[Keepalive] Ponged ${url} with status ${response.status}`);
    }
  } catch (error) {
    console.error(`[Keepalive] Failed to ping:`, error.message);
  }
}
ping();

setInterval(ping, 60 * 1000);
