// style
import "./App.css";
// hooks
import { useState } from "react";

// components

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewuserForm from "./components/newuser/NewuserForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  // add users

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  // delete user

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  // closeModal

  const closeModal = (e) => {
    if (e.target.className === "overlay" || e.key === "Escape")
      setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList deleteUser={deleteUser} users={users} />
      </main>
      {showModal && <NewuserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
