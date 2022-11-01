import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddUsers from './Pages/AddUsers/AddUsers';
import UpdateUser from './Pages/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users/add' element={<AddUsers></AddUsers>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
