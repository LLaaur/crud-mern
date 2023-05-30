import React, {useState, useEffect} from "react";
import axios from "axios";
import PetForm from "./petform";

const EditPetInfo = (props) => {
    
    const [formValues, setFormValues] = useState({name: "", species: "", breed: "", age: "", location: ""})
 
    const onSubmit = (petObject) => {
        axios.put(
            "http://localhost:4000/pets/update_pet" + props.match.params.id,
            petObject
        )
            .then((res) => {
                if(res.status === 200){
                    alert("Pet info updated sucessfully");
                    props.history.push("/pet_list");
                } 
                else{
                    Promise.reject();
                };
            })
            .catch((err) => alert("Something went wrong.")); 
    };

    //load data from the server and initialize pet form
    useEffect(() => {
        axios.get(
            "http://localhost:4000/pets/update_pet" +
            props.match.params.id
        )
            .then((res) => {
                const {name, species, breed, age, location} = res.data;
                setFormValues({name, species, breed, age, location});
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return(
        <PetForm initialValues={formValues}
                 onSubmit={onSubmit}
                 enableReinitialize
        >
            Update pet info
        </PetForm>
    );
};

export default EditPetInfo;

