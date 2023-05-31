const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let PetSchema = new Schema({
    name: {
        type: String
    },
    species: {
        type: String
    },
    breed: {
        type: String
    },
    age: {
        type: String
    },
    location: {
        type: String
    },
}, {
    collation: "pets"
})

module.exports = mongoose.model("Pet", PetSchema);