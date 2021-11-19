
// import './App.css';

// import Header from "./components/header";

// function App() {
//   return(
//     <div>
//       <Header/> 
//       <Header/> 
//       <Header/> 
      
//     </div>
//   )
// }

// export default App;

// <Header> </Header> şeklindede yazabilirdik child eklemek istesek.

//--------------------------------------------------------------------------------------------------------------------

// JSX ve Temel Kuralları

// JavaScript uzantılı bir dosyamız var ama içersinde HTML etiketi var. JavaScript dosyaları bu HTML etiketlerini nasıl yorumluyor buna bakıcaz. Bu yukarda gördüğümüz Header ve div'de aslında birer javascript ifadesi peki nasıl.

// Biz burda jsx ifadelerini kullanmak istemeseydikte react projelerimizi geliştirebilir miydik cevap evet.
// import './App.css';
// import React from 'react' // Önceki versiyonlarda react'ı her component'imize import etmemiz gerekiyordu fakat artık yeni versiyonla beraber böyle bir şeye ihtiyacımız yok.

// import Header from "./components/header";

// function App() {
// return React.createElement('div', null, 'Hello')
// // Yukardaki gibi yazınca gene ekranda gözüktü.Düşünün ki bu div'in içinde onlarca hatta yüzlerce farklı element olacak. Paragraf tagleri ul li vs. Hal böyle olunca her bir elementi olusturmak için yukardaki yapıyı kullanırsak oldukca fazla javascript kodu yazmam gerekecek dolayısıyla React'in yapıcıları JSX adında bir yaapıyı keşfetmişler ve biz bu JSX'i kullarak aslında HTML yazar gibi Javascript yazabiliyoruz. 
//   // return(
//   //   <div>
//   //     <Header/> 
//   //     <Header/> 
//   //     <Header/> 
      
//   //   </div>
//   // )
// }

// export default App;



// import './App.css';

// import Header from "./components/header";

// function App() {
//   return(
//     <>
//       <Header/> 
//       <p className = "xyz"> lorem ipsum </p>
//       <label htmlFor="myinput"> 
//         Name
//         <input id="myInput"/>
//       </label>
//     </>
//   )
// }

// export default App;

// 1- import Header from "./components/header"; Bir component olustururken mutlaka component'imizin isminin baş harfini büyük yazmaya dikkat edelim Header gibi. Sebebi ise biz bazen HTML etiketlerini render ediyoruz bazende kendi yazmış olduğumuz componentleri render ediyoruz. Baş harfi küçük olanlar HTML etiketlerinin render edilmesi olarak baş harfi büyük olanlar ise bizim yazdığımız custom componentlerin ise render edilmesi olarak algılanıyor.

// illa div kullanmak zorunda değiliz div yerine doğrudan bir etiket açıp kapatmak yeterli <> </> gibi.

// 2- Bazi özel kalıplı keywordler var if, class, for bunlar özel tanımlı keywordlerimiz. Bunları jsx yazarken kullanmamamız önemli.Javascriptte kullanacaksak class'ı class yerine className kullanalım.

// <label for="myinput"> burda bir id'yi referans gösteririrz ve bu label'a tıklandığı zaman o input'a focus olabilir.  

//for javascript için özel tanımlı bir keyword olduğu için burda for yerine htmlFor ifadesini kullanmamız önemli. 

//--------------------------------------------------------------------------------------------------------------------

// Componentlerde Değişken Render Etmek 

// Bu derste bir değişkeni veya sabiti nasıl render edebileceğimizi görmeye çalışcaz. Bu dersimize kadar hep statik ifadeler yazdık birde bir değişkenden almaya çalışalım veya sabitten.

// import './App.css';

// const name = "Mehmet"
// const surName = "Seven"

// function App() {
//   return(
//     <>
//       <h1>{`Benim adım ${name} soyadım ${surName}`}</h1>
//     </>
//   )
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------------

// Koşullu Render İşlemi

// componentlerimizde koşullu render işlemi yapabilmemiz için izlememiz gereken adımlar söyle.

import './App.css';

const name = "Mehmet"
const surName = "Seven"
const isLoggedIn = false; // Bu true olursa isloggedIn yazısı görünür false olursa görünmez.
//false olursa Giriş yapmadınız yazısı ekranda görünür.

// Onun altındada ternary operatörünü kullarak işlemi gerçekleştirdik.

function App() {
  return(
    <>
      {/* <h1>{isLoggedIn && `Benim adım ${name}, soyadım ${surName}`}</h1>
      {!isLoggedIn && "Giriş yapmadınız."} */}

<h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surName}` : "Giriş yapmadınız."}</h1>

    </>
  )
}

export default App;

//--------------------------------------------------------------------------------------------------------------------

// Bölüm Sonu Kazanımları

// Create-react-app Bir react projesine ilk adımları atabilmek için bütün geliştirme ortamı test ortamı vs hepsinin kurulu bir şekilde bize örnek bir component ile birlikte gelmesiyle ve bizim bunun üzerine çalışmamızı yapabilmemize olanak sağlayan bir yapı bunu çalıştırdığımızda bize hazır bir örnek veriliyor ve biz o örneğin üzerine devam edebiliyorduk. Ve şu an react ile yapılan örneklerin çalışmaların projelerin çok büyük bir yoğunluğu create react app ile başlıyor diyebiliriz.

// Biz react'i create-react-app olmadan kullanabiliyoruz. React'in JavaScript dosyasını aynı jquery'yi sayfamıza dahil eder gibi dahil edip yine kullanabiliiriz. Ama o zaman bizim geliştirme ortamı, test ortamı web pack ayarları gibi durumları göze almamız lazım ve bunlarla uğraşmak bazen oldukça can sıkıntısı ve zaman kaybına neden olabiliyor ayrıca burda hazır yapılmışı var ve üzerine gitmek en kolayı gibi geliyor. Eğer kendinize özel bir şey yapmak isterseniz create-react-app gibi bir repo olusturup bunun gibi çalışan bir servis oluştrup kullanabiliriz.

// Yarn start komutuyla birlikte default olarak 3000 portunda çalışmaya başlıyor. 