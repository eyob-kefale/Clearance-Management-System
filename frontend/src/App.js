import './App.css';
import {useState, useEffect} from 'react'
import Axios from "axios"


function App() {
  const [listofUsers, setListofUsers] = useState([])

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListofUsers(response.data);
      console.log(response.data)
    });
  }, []);

  console.log(listofUsers)

  return (
    <div className="App">
        {listofUsers.map((user)=>{
            <div>
              <h1>First Name:{user.fname}</h1>
              <h1>Last Name:{user.lname}</h1>
              <h1>Username:{user.username}</h1>
              <h1>ID:{user.ID}</h1>
              <h1>role:{user.role}</h1>
            </div>
        })}
    </div>
  );
}

export default App;
