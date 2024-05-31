import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomeLoader } from "../components/CustomeLoader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [user, setuser] = useState({});

  const handleClose = () => {
    setshow(false);
  };
  const handleShow = async (id) => {
    //api data....

    const user = await axios.get("https://node5.onrender.com/user/user/" + id);
    console.log("user", user);
    setuser(user.data.data);

    setshow(true);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log("delete res", res);
    if (res.status === 204) {
      toast.error("User Deleted Successfully..");
      getUsers();
    }
  };
  const getUsers = async () => {
    //apicall start
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log("axis res", res);
    console.log("api actual res", res.data);
    console.log("api actual res", res.data.message);
    console.log("api actual res", res.data.data);
    setmessage(res.data.message);
    setusers(res.data.data); //set data array to users
    //api call end
    setisLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>API DEMO 1</h1>
      {isLoading && <CustomeLoader />}
      <h1>{message}</h1>
      {/* <ul>
            {
                users?.map((user)=>{
                    return <li>{user.name}</li>
                })
            }
        </ul> */}
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive == "true" ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      handleShow(user._id);
                    }}
                    className="btn btn-info"
                  >
                    DETAIL
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title>USER DETAIL</Modal.Title>
        </Modal.Header>
        <Modal.Body>{user.name}</Modal.Body>
        <Modal.Body>{user.email}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
