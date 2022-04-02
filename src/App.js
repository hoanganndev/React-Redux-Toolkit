import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    const [listUsers, setListUsers] = useState([]);
    const fetchAllUsers = async () => {
        let res = await axios.get("http://localhost:8080/users/all");
        console.log(">>> check data:", res.data);
        setListUsers(res.data ? res.data : []);
    };
    useEffect(() => {
        fetchAllUsers();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers &&
                                listUsers.length > 0 &&
                                listUsers.map((user, index) => {
                                    return (
                                        <tr key={`user-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Container>
            </header>
        </div>
    );
}

export default App;
