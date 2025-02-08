import "./App.css";
import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/common/NavBar'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { SignIn, SignUp } from '@clerk/clerk-react'


interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = `${import.meta.env.VITE_API_URL}/posts`;
      console.log("Fetching from:", apiUrl);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Network error: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        console.log("Raw response:", text); // Debugging

        const result = JSON.parse(text) as Post[];
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='login' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  </div>
      <h1>Tasty Kitchen</h1>
      <p>for the streak</p>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
