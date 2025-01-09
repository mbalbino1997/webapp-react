import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail';
import DefaultLayout from './layout/DefaultLayout';
import './App.css'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" Component={DefaultLayout} >
          <Route index Component={HomePage} />
          <Route path=":id" Component={Detail} />
        </Route>
      </Routes>

    </BrowserRouter >
  );
}

