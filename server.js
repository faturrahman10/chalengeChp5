const express = require("express");

var bodyParser = require("body-parser");

const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const { getUsers, Register, Login, Logout, registerAdmin } = require("./controllers/userController");
const { getCars, getCarById, getDeletedCars, deleteCar, updateCar, createCar } = require("./controllers/carController");
// const { getCars, getDeletedBooks, getBookById, deleteBook, updateBook, createBook } = require('./controllers/bookController')
const { verifyToken } = require("./middleware/VerifyToken");

const prefix = "/v1/api/";

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//user apis
app.get(prefix + "users", verifyToken, getUsers);
app.post(prefix + "register", Register);
app.post(prefix + "Login", Login);
app.delete(prefix + "logout", Logout);
app.post(prefix + "registeradmin", verifyToken, registerAdmin);

//book apis
app.get(prefix + "cars", verifyToken, getCars);
app.get(prefix + "car/:id", verifyToken, getCarById);
app.get(prefix + "deletedcar", verifyToken, getDeletedCars);
app.put(prefix + "updatecar/:id", verifyToken, updateCar); // update buku
app.put(prefix + "car/:id", verifyToken, deleteCar); //delete book api
app.post(prefix + "createcar", verifyToken, createCar); //create book api

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
