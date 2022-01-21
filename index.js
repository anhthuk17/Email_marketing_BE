const express = require("express");
const app = express();
const port = 3000
require('dotenv').config()
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3002;
const db = require("./database/config");
const cors = require("cors");
const initAPI = require('./routers/')
const ApiError = require('./utils/api.res/api.error');

const router = express.Router();
const controller = require("./src.web/controllers/compaign.controller");
const response = require('./utils/api.res/response');

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
app.use('/images', express.static(__dirname + '/images/'));
app.get('/images/girl.png/', async(req, res) => {
    // var id = request.query.id;
    // response.end("I have received the ID: " + id);
    const id = req.query.id;
    try {
        const result = await controller.updateStatusActHisToO(id);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});
// var proxy = require('http-proxy').createProxyServer({
//     host: 'https://www.google.com/',
//     // port: 80
// });
// app.use('/blog', function(req, res, next) {
//     proxy.web(req, res, {
//         target: 'https://www.google.com/'
//     }, next);
// });

// app.listen(80, function() {
//     console.log('Listening!');
// });

app.get('/images/boy.png/', async(req, res) => {
    const id = req.query.id;

    try {
        const result = await controller.updateStatusActHisToC(id);

        // response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }

});


const {
    message
} = require('./utils//api.res')
const {
    errorConverter,
    errorHandler
} = require('./middlewares/error');
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.use(bodyParser.json({
    limit: "50mb"
}));
app.use(
    session({
        secret: "123",
        resave: false,
        httpOnly: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 3600,
            secure: false
        }
    })
);
// swaggerDOC(app);
//db
db.authenticate()
    .then(() => console.log("Database Connected"))
    .catch(err => console.log("error: " + err));

// routes
initAPI(app);
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    if (req.url === "/") {
        app.get('/', function(req, res) {
            res.render("index.html");
        });
        // ``
    } else {
        // next(new ApiError(message.getMessage('status.notfound'), message.getMessage('http.notfound')));
    }
});
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color:red;">Hello World!</h1>
        `)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})