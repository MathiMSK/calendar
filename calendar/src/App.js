import './App.css';
import AddEvent from './components/AddEvent';
import Sample from './components/sample';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <Sample/> */}
      {/* </header> */}
      <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" index element={<Sample/>} />
          <Route path='/addevent' element={<AddEvent/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
