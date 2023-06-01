let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfing = require("./database/db");


const petRoute = require("../backend_server/routes/pet_route");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfing.db).then(() => {
    console.log("Database sucessfully connected!")
},
    error => {
        console.log("Could not connect to database: " + error)
    }
)
mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(cors());
app.use("/pets", petRoute)

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log("Connected to port " + port)
})

app.use((req, res, next) => {
    res.status(404).send("Error 404!")
});

app.use(function(err, req, res, next){
    console.log(err.message);
    if(!err.statusCode){
        err.statusCode = 500;
        res.status(err.statusCode).send(err.message);
    }
});