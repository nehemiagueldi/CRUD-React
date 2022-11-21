import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import "./Read.css";
import { Link } from "react-router-dom";

export default function Read() {
  var i = 0;
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getData();
  });

  const setID = (id, name) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
  };

  const getData = () => {
    axios
    .get(`http://34.101.172.140:3005/api/propinsi/list`)
    .then((getData) => {
      setApiData(getData.data.data);
    });
  }

  const onDelete = (id) => {
    axios.post(`http://34.101.172.140:3005/api/propinsi/delete`,{id_prov : id})
    .then(() => {
      getData();
    })
  }

  return (
    <div>
      <div className="read">
        <h3>React CRUD Operation</h3>
        <Link to="/create">
          <Button color="yellow">
            <i className="plus icon"></i>
            Create
          </Button>
        </Link>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Nama Provinsi</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{i += 1}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button color="green" onClick={() => setID(data.id, data.name)}>
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to="/">
                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to="/detail" onClick={() => setID(data.id, data.name)}>
                    <Button color="blue">Detail</Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
