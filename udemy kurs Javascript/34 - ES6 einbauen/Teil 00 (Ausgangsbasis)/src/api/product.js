"use strict"

const axios = require("axios")

module.exports.search = function search(term) {
  const url = "https://downloads.codingcoursestv.eu/041%20-%20javascript/proxy/search.php"
  return axios
    .get(url, {
      params: {
        q: term
      }
    })
    .then((response) => response.data['foods'])
}

module.exports.info = function info(fdcId) {
  const url = "https://downloads.codingcoursestv.eu/041%20-%20javascript/proxy/product.php"
  return axios
    .get(url, {
      params: {
        q: fdcId
      }
    })
    .then((response) => response.data)
}



/*
"use strict";

const axios = require("axios");

module.exports.search = function search(term) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo",
            query: term
        }
    })
    .then((response) => response.data['foods'])
}


module.exports.info = function info(fdcId) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcId, {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo"
        }
    })
    .then((response) => response.data)
}
*/

