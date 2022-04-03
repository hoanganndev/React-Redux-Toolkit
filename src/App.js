import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchAllUsers } from "./redux/slices/userSlice";
function App() {
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.user.listUsers);
    const isLoading = useSelector(state => state.user.isLoading);
    const isError = useSelector(state => state.user.isError);
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);
    if (isError == true && isLoading == false) {
        return <div>Something wrong. Please try again !</div>;
    }
    if (isError == false && isLoading == true) {
        return <div>Loading data ...</div>;
    }
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
