require('dotenv').config();
const axios = require('axios');

console.log('🪞 Market Mirror Engine is running...');

async function fetchBitcoinPrice() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const rate = response.data.bpi.USD.rate;
    console.log(`Current BTC Price: $${rate}`);
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error.message);
  }
}

fetchBitcoinPrice();
