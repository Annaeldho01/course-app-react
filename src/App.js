import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import ViewCourse from './components/ViewCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddCourse/>}/>
      <Route path="/view" element={<ViewCourse/>}/>
      <Route path="/search" element={<SearchCourse/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
