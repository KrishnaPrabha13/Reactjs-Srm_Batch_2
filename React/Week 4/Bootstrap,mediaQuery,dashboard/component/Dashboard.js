import React from 'react'
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Dash() {
    const history = useHistory();
    const [det,setDet]=React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:4005/student");
          setDet(result.data);
        };
        fetchData();
      }, [det]);
    return (

        <div>
          No of students: {det.length} 
          <br/>
          <Button onClick={() => history.push("/studentview")}>
              Student View
            </Button>
            {" | "}
            <Button onClick={() => history.push("/studentedit")}>
              Add Student 
            </Button>
        </div>
    )
}
