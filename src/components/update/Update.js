import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [ID, setId] = useState(null);

  const sendDataToAPI = () => {
    axios.post(`http://34.101.172.140:3005/api/propinsi/update/${ID}?id_prov=${ID}`, { 
      name : name
    })
  }

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setId(localStorage.getItem('ID'));
  }, [])

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Nama Provinsi</label>
          <input name="lname" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nama Provinsi" />
        </Form.Field>
        <Link to ="/">
          <Button type="submit" onClick={sendDataToAPI}>Update</Button>
        </Link>
      </Form>
    </div>
  );
}
