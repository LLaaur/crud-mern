import React, { useState } from "react";
import axios from "axios";
import PetForm from "./petform";

const AddPet = () => {

    const [formValues, setFormValues] = useState({name: "", species: "", breed: "", age: "", location: ""});
    
    const onSubmit = petObject => {
        axios.post(
            "http://localhost:4000/pets/add_pet", petObject
        )
            .then((res) => {
                if (res.status === 200){
                    alert("pet added sucesfully")
                }
                else{
                    Promise.reject()
                }
            })
            .catch((err) => alert("Something went wrong, please try again."))
    }

    return(
        <PetForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Add pet
        </PetForm>
    )
}

export default AddPet