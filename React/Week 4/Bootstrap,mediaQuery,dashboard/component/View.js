import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function View() {
    const history = useHistory();
    const [det, setDet] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:4005/student");
            setDet(result.data);
        };
        fetchData();
    }, [det]);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Medium</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        det.map((x) => {
                            return (
                                <tr>
                                    <th scope = "row">{x.id}</th>
                                    <td>{x.sname}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.age}</td>
                                    <td>{x.address}</td>
                                    <td>{x.medium}</td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>
            {" | "}
            <Button onClick={() => history.push("/")}>
                Back
            </Button>
        </div>
    )
}
