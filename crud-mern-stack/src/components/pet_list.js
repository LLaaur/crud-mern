import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import PetTableRow from "./pet_table_row";

const PetList = () => {
    
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get(
            "http://localhost:4000/pets"
        )
            .then(({data}) => {
                setPets(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    const DataTable = () => {
        return pets.map((res, i) => {
            return <PetTableRow obj={res} key={i}/>;
        });
    };

    return (
        <div className="table-wrapper">
            <Table stripped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Breed</th>
                        <th>Age</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default PetList;