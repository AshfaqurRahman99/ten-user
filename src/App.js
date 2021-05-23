import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './Components/User/User';
import Cart from './Components/Cart/Cart';

function App() {
  const [users, setUsers] = useState([]);

  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    // fetch('https://mocki.io/v1/4189a756-2875-43ce-bcce-1c210f7c34e2')
    fetch('https://mocki.io/v1/6dc6dd3f-deeb-4673-826e-ee2bf678176a')
    .then (res => res.json())
    .then (data => {
      setUsers(data);
      // console.log(data);
      const user = data.map(user => user)
      // console.log(user);
    })
    .catch(error =>console.log(error))
   }, [])

   const handleAddUser = (addUser) => {
     console.log('added', addUser);
     const newUser = [...cart , addUser ];
     setCart(newUser);
   }
 
  return (
    <div className="App">
     <h1>User Info:{users.length}</h1>
     <Cart cart={cart}></Cart>
      <div>
       {
         users.map(user => <User user={user} handleAddUser={handleAddUser}> </User>)
         
       }
      </div>
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
