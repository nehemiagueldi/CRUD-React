import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
// import axios from "axios"; 
import { Link } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [ID, setId] = useState(null);

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setId(localStorage.getItem('ID'));
  }, [])

  return (
    <div>
      <Form>
        <Form.Field>
          <label>ID</label>
          <input name="ID" 
          value={ID}
          readOnly />
        </Form.Field>
        <Form.Field>
          <label>Nama Provinsi</label>
          <input name="fname" 
          value={name}
          readOnly />
        </Form.Field>
        <Link to ="/">
          <Button >Back to Home</Button>
        </Link>
      </Form>
    </div>
  );
}
