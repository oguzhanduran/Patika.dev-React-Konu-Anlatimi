import logo from './logo.svg';
import './App.css';

function App() {

const isim = "Oğuzhan Duran"
const isAutorized = true 
  return (
    <div className="App">
     
   <p> Onun adı {isim} </p>

   {
     isAutorized ? <p>Doğrudur!</p> : <p>Yanlıştır!</p>
   }

   <h4>User App</h4>
    
    </div>
  );
}

export default App;
