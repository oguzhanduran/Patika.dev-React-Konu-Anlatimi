// yarn add react-router-dom@5.2.0 diyerek mevcut versiyonu install ettim. Sonra react-router web yazarak ulaştıgım ekrandaki gerekli kodları kopyala yapıstır ile app.js'e ekledim.

// Bizim burda dikkat etmemiz gereken şey butona basınca sayfa yenilenmiyor. Normalde bir sayfadan başka bir sayfaya gidince sayfa yenilenir. Yani aslında sayfa komple gider baştan yüklenir. Ama biz bu react Rooter dom'u kullandıgımızda sadece değişmesini istediğimiz alanları değiştirebiliyoruz. 

// Neler yapıldı?

// Öncelikle react rooter dom kütüphanesini "import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; " şekilde import ettik.

// react-router-dom kütüphanesinin altınada "BrowserRouter as Router, Switch, Route, Link" adında bir takım tanımlar var. 

// "BrowserRouter as Router" burda as'in anlamı BrowserRouter'ı aşağıda Router olarak kullanmak istemesi. Yani bir nevi kısaltma yapmış oluyor.