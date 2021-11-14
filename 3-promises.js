// import fetch from "node-fetch";

// Biz önceki derste yukarıdaki gibi node-fetch kütüphanesini kullandık. Bunun yerine kullanabileceğimiz axios adında bir kütüphane daha var. Onun biraz daha kullanımı kolay söyle ki; aşağıda .json(); işlemini yapıyoruz ya axiosta buna gerek yok. Hemde react tarafına geçtiğimizde hep biz axios kullanıcaz o yüzden şimdiden göz aşinalığı olması iyi olur.

// axios adındaki kütüphaneyi npm i axios yazarak kuruyoruz. ve aşağıda node-fetch yerine axios'u yazıyoruz.

// import fetch from "node-fetch";
// import axios from "axios";

// (async () => {

//     const users =  (await axios("https://jsonplaceholder.typicode.com/users"))
    
   
//     const post1 =  (await axios("https://jsonplaceholder.typicode.com/posts/1"))
    
   
//     const post2 =  (await axios("https://jsonplaceholder.typicode.com/posts/2"))
    
   
   
//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
   
//       })
      
//       ()

      // Yukarda fetch ifadelerinin yerine axios yazdık, .json() işlemlerini ve json kullandığımız için kullanmamız gereken await işlemlerini sildim.
      // Bunu yukardaki şekilde çalıştırdığımızda anlam veremediğimiz datalar geliyor.
      // Bunun nedeni axios bize users post1'in altında birer data getiriyor. Yani data adında bir field getiriyor.

import fetch from "node-fetch";
import axios from "axios";

// (async () => {

//     const {data: users} =  (await axios("https://jsonplaceholder.typicode.com/users"))
    
   
//     const {data: post1} =  (await axios("https://jsonplaceholder.typicode.com/posts/1"))
    
   
//     const {data: post2} =  (await axios("https://jsonplaceholder.typicode.com/posts/2"))
    
   
   
//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
   
//       })
      
//       ()

      // böyle yaparsak ilgili kullanıcılar bize gelir. hepsi data olarak dönüyor hepsini farklı şekilde sunmak için : ile açıklayabiliriz.
      // Bu da fetch'e göre çok daha kullanışlı. 


// PROMİSES

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
console.log("Users yüklendi!", users)

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((data) => data.json())
.then((post) => { 
    console.log("Post 1 Yüklendi",post)

fetch("https://jsonplaceholder.typicode.com/posts/2")
.then((data) => data.json())
.then((data) => console.log("Post 2 Yüklendi", data))
   });
});

// Yukarda en üstte fetch diye bir kütüphane yazmışlar, sonra then ile devame ediyor, bu then fetch aslında bir promises dönüyor demek. Yani ben fetch gibi yazdığımda then ile devam edebileceğim fonksiyonlar nasıl yazabilirimin cevabını vermeye çalışcam.

const getComments = () => {
     return new Promise(() => {})
} 



