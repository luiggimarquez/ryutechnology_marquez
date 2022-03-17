import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer saludo="Bienvenidos a Ryu Technology" />
    
    </>
  );
}

export default App;
