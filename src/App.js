import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import AddUser from './Components/AddUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Update from './Components/Update';

function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <User></User>,
    loader:()=> fetch(`http://localhost:5000/user`)
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader:({params})=> fetch(`http://localhost:5000/user/${params.id}`)
  },
  {
    path: 'user/add',
    element: <AddUser></AddUser>
  }
])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
