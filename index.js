require('dotenv').config();
const axios = require('axios');

console.log('Market Mirror Engine is running');

async function fetchBitcoinPrice() {
  try {
    const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    const rate = data.bpi.USD.rate;
    console.log(`Current Bitcoin Price in USD: $${rate}`);
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error.message);
  }
}

fetchBitcoinPrice();
