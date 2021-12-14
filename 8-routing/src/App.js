import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

import About from "./components/about";
import Home from "./components/home";
import Users from "./components/users";

function App() {
  return (
    
      <Router>
      <div>
        <nav> {/* Bu kısım Home About ve Users kısımlarının aayarlandğı kısım*/}
          <ul>
            <li>
              <Link to="/">Home</Link>
              {/* <a href="">Home</a> biz buraya html tag'ini kullanıp bir Home yazsaydık sayfa yenileirdi yani komple gider baştan gelirdi. Bu yüzden a tag'i yerine Link tag'ini kullanıyoruz çünkü sayfanın yenilenmesini istemiyoruz, sadece content'in değişmesini istiyoruz*/} 
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>              {/*Switch bölümünün çalışma mantığı normal switch ile aynı hangisiyle eşleşiyorsa onu çalıştırıyor, aşağıyı daha kolay anlaşılması için düzenledik.   */}
          
          <Route path="/about" component={About} /> 
           
          <Route path="/users" component={Users} /> {/* Eğer end point users ise component olarak users'ı çalıştır dedik.*/}
           
          <Route path="/" component={Home} /> 
            
        </Switch>
      </div>
    </Router>
    
  );
}

// Biz alttaki fonksiyonlar için ayrı bir component oluşturalım.
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
