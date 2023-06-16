"use strict";

const axios = require("axios");

function search(term) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo",
            query: term
        }
    })
    .then(function(response) {
        return response.data['foods'];
    })
}


function info(fdcId) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcId, {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo"
        }
    })
    .then(function(response) {
        return response.data;
    })
}

info(1103344).then(function(p) {
    console.log(p)
})