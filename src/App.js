import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "./App.css";
import PhoneBookItem from "./components/PhoneBookItem";
function App() {
  const [phoneBook, setPhoneBook] = useState([
    {
      id: 1,
      name: "Do coding" ,
    },
    {
      id: 2,
      name: "Do coding",
    },
    {
      id: 3,
      name: "Do coding",
    },
  ]);
  const [name, setName] = useState(" ");
  const [searchText, setSearchText] = useState("");

  const addItem = () => {
    setPhoneBook([...phoneBook, { name: name }]);
    setName("");
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            {" "}
            Add
          </div>
          <div className="col-4">
            {" "}
            Active
          </div>
          <div className="col-4">
            Completed
          </div>
        </div>
        <div className="col-4">
            {" "}
            <input
              value={name}
              type="text"
              className="form-control"
              placeholder="add"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={addItem}>
              Thêm
            </button>
          </div>
          <div className="row mt-4">
          {  phoneBook

            .map((item) => {
              return <PhoneBookItem item={item} />;
            })}
        </div>
        </div>
    </div>
  );
}
export default App;
