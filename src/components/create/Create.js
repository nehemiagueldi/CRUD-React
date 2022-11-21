import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  var randomID = Math.floor(Math.random().toFixed(2)*100);


  const sendDataToAPI = () => {
    axios.post(`http://34.101.172.140:3005/api/propinsi/add`, {
      id : randomID,
      name : name
    });
  };
  return (
    <div>
      <Form>
        {/* <Form.Field>
          <label>ID</label>
          <input
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field> */}
        <Form.Field>
          <label>Nama Provinsi</label>
          <input name="lname" 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nama Provinsi" />
        </Form.Field>
        <Link to='/'>
          <Button type="submit" onClick={sendDataToAPI}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
