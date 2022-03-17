const axios = require("axios");
const { generateHmac } = require("./hmacGenerator");

const ACCESS_KEY = "8ffaeca8-2c9d-4e68-a208-2ac6d728fc51";
const SECRET_KEY = "e6b0e1c0e5589ff34061c21fc338e3ccd1ba954a";

module.exports = {
  generateProductData: async (keyword, URL, DOMAIN, REQUEST_METHOD) => {
    const authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
    axios.defaults.baseURL = DOMAIN;

    try {
      const response = await axios.request({
        headers: { Authorization: authorization },
        method: REQUEST_METHOD,
        url: URL,
      });
      console.log(response.data.data.productData);
      fs.writeFile(
        `./${now}_${keyword}.json`,
        JSON.stringify(response.data.data.productData, null, 4),
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("File has been created");
        }
      );
    } catch (err) {
      console.error(err.response.data);
    }
  },
};
