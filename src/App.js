import './App.css';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddCourse/>}/>
      <Route path="/view" element={<ViewCourse/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
