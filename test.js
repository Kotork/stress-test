const axios = require('axios')

// URL to be testes
const url = "https://url.com"
// Number of call to be made
const calls = 1000;

const getData = async (url) => {
  try {
    const response = await axios.get(url)
    const data = response.data
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

for (let i = 0; i < calls; i++) {
  getData(url);
  console.log(i);
}