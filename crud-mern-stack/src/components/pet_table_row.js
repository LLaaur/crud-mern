import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


const PetTableRow = () => {

    const {_id, name, species, breed, age, location} = props.obj;

    const deletePet = () => {
        axios.delete(
            "http://localhost:4000/pets/delete_pet" + _id
        )
            .then((res) => {
                if(res.status === 200){
                    alert("Pet successfully deleted.");
                    window.location.reload();
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert("Something went wrong, please try again");
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{species}</td>
            <td>{breed}</td>
            <td>{age}</td>
            <td>{location}</td>
            <td>
                <Link className="edit-link" to={"/edit_pet_info/" + _id}>
                    Edit
                </Link>
                <Button onClick={deletePet} size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );

};

export default PetTableRow;