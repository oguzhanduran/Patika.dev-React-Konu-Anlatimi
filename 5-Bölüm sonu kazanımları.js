// Bu bölümde anlatılanlar react bölümünde en çok ihtiyacımız olacak olan tanımlar, terimler, keyword'lerdi. 

// React tarafında JavaScript temellerine sahip olmak oldukça önemli.

// {
//     "name": "learning-node",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "type": "module",
//     "scripts": {
//       "start": "node index"
//     },
//     "author": "oguzhnduran@gmail.com",
//     "license": "ISC",
//     "dependencies": {
//       "axios": "^0.24.0",
//       "node-fetch": "^3.1.0",
//       "slugify": "^1.6.2"
//     }
//   }


// Giriş bölümünde bir node.js projesi nasıl oluşturulur bir modül nasıl indirilir nasıl kullanılır  konuları konuşmaya çalıştık bizim package.json adında bir dosyamız vardı bu dosya altında aslında yaptığımız proje ile alakalı birçok tanımı config'i tutuyoruz. Ordaki en önemli kısım bağımlılıklar kısmı biz herhangi bir module kurduğumuz anda o modul en alta eklenir, ve daha sonra node_modules dosyasını kaybettiğimizde veya sildiğimizde tek bir komutla en alttaki bağımlılıkları tekrar kurabiliyoruz. Onun dışında script adında bir bölüm daha var. Burda yaptığımız şey ise biz node komutunu çalıştıracağımız zaman normalde terminalde node index komutunu çalıştırırken bunun daha uzun olabileceğini farz ettiğimizde terminalde her defasında o komutu girmek hatırlamak zor olabilir diye bunları birer script'e atıyorduk ve o şekilde kullanmaya çalışıyorduk npm start diyerek.

// Sonrasında slugify isminde bir tane modülümüz vardı o modülü internetten npm.js üzerinden indirdik ve kullanmaya çalıştık dışardaki bir modulü nasıl indirebilirim nasıl kullanabilirim onu öğrenmiştik 

//Sonrasında ise kendi modülümüzü yazmayı denedik


//İmport gibi keywordleri kullanmak için neye ihtiyacımız olduğunu söyledik 

//sonrasında mymodule.js isminde bir module yazdık ve sonrasında bunları dışa aktardık. ---> 
// import hello, {topla, cıkar, text, user, users} from "./my-module.js";  şeklinde.

