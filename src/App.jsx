import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import Pokemones from "./components/Pokemones";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cards from "./components/Cards";


function App() {

  return (
    <>
      <Navbar/>
      <Buscador/>
      <Pokemones/>
      <Router>
        <Routes>
          <Route path="/card" element={<Cards/>}></Route>
        </Routes>
      </Router>
    </>  
  )
}

export default App
