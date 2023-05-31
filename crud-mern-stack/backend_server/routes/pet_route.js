let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let PetSchema = require("../models/Pet");

router.post("/add_pet", (req, res, next) => {
    PetSchema.create(req.body, (error, data) => {
        if(error){
            return next(error);
        }
        else{
            console.log(data);
            res.json(data);
        }
    });
});


router.get("/", (req, res) => {
    PetSchema.find((error, data) => {
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    });
});


router.route("/update_pet/:id")
    .get((req, res) => {
        PetSchema.findById(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                }
                else {
                    res.json(data);
                }
            });
    })

    .put((req, res, next) => {
        PetSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error){
                    console.log(error);
                    return next(error);
                }
                else{
                    res.json(data);
                    console.log("pet data updated successfully")
                }
            }
        );
    });


router.delete("/delete_pet/:id", (req, res, next) => {
    PetSchema.findByIdAndRemove(
        req.params.id, (error, data) => {
            if(error){
                return next(error);
            }
            else{
                res.status(200).json({
                    msg: data,
                });
            }
        }
    )
});

module.exports = router;