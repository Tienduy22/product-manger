const express = require("express");
require('dotenv').config();

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const session = require("express-session");

const methodOverride = require("method-override");

const database = require("./config/database.js");

const systemConfig = require("./config/system.js");

const route = require("./routes/client/index.route.js");

const routeAdmin = require("./routes/admin/index.route.js");

const flash = require("express-flash");

database.connect();

const app = express();
const port = 3000;

app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('keyboard cat'));
app.use(session({cookie : {maxAge: 60000}}));
app.use(flash());
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// App Local Variables 
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static(`${__dirname}/public`));

routeAdmin(app);
route(app);

app.listen(port , () => {
    console.log(`App listening on port ${port}`);
});

