// import { useContext } from "react"; // aşağıdaki ThemeContext ifadesini kullanabilmek için useContext hook'unu import ettik.
// import ThemeContext from "../context/ThemeContext";

// function Button() {
//   const data = useContext(ThemeContext); // ThemeContext tanımını useContext hook'unun içine parametre olarak geçtik. Böylece app.js'de sağladığımız dataya (value) eriştik yani logladığımızda console'da dark yazıyor. Bu demek oluyor ki ben contex'in import işlemini ve useContext işlemini hangi componentte yaparsam yapıyım o veriye erişebiliyorm demektir bu. Bu derste context'i oluşturup onun ilgili veriisine ulaşmış olduk. Bundan sonraki derste de gidip o datayı değiştiricez. Değiştirdiğimiz anda da farklı bir component içinde gerçekten değişip değişmediğini gözlemlemiş olacağız.

//   return <div>Button ({data})</div>;
// }

// export default Button;

//-------------------------------------------------------------------------------------------------------------------------------------

// Context Provider
// Bu derste context'den sağlamış olduğumuz dataları değiştirdiğimiz anda kullanılan componentlerde de anlık olarak değiştiğini gözlemlemeye çalışcaz.

import { useContext } from "react"; // aşağıdaki ThemeContext ifadesini kullanabilmek için useContext hook'unu import ettik.
import ThemeContext from "../context/ThemeContext";

function Button() {
  // app.js'de buton componentinin içine yazdıklarımızı children yazıp return ettiğimizde tüm biligleri alırız.
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
