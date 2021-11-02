const initClientAPI = require('./client')
let initAPI = (app) => {
    initClientAPI(app, "/api/");
}

module.exports = initAPI;