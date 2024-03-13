import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from 'antd';
import { useActions } from "./hooks/useActions";

function App() {
  const {setUser, setIsAuth} = useActions();
  useEffect(() => {
    // Якщо в "localStorage" по ключу 'auth' щось знаходиться, то тоді користувача буде логінити
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')})
      setIsAuth(true);
    }
  }, [])

  return (
    // Компонент Layout - добавляє деякі адаптивні, вирівнюючі властивості
    <Layout>
      <Navbar/>
      <Layout.Content> {/* Це вже чисто семантика, обгортання <AppRouter> в <Layout.Content> */}
        <AppRouter/>
      </Layout.Content>
    </Layout>
  );
}

export default App;