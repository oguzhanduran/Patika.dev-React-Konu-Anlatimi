// React kullanıcı ara yüzleri oluşturmak için kullanılabilecek bir kütüphane.

// Facebook ilk  bunu kendi sayfasında uygulayıp daha sonra ayrı bir kütüphane haline getirip paylaşıyor.

// Facebook neden buna ihtiyaç duydu, çünkü Facebook'da sürekli bir güncelleme işlemi var mesela bir şey beğeniyorsun beğeni sayısı 6 oluyor vs gibi.

// React kullanılmasaydı, mesela biz bir şeyi beğendiğimizde tüm sayfanın baştan render edilmesi gerekecekti sadece o bölüm dışında. Yani ufacık bir veriyi güncellemek için komple ekranı güncellememiz gerekiyor. Bu da bize DOM'da maliyetle beraber geri dönüyor.

// Facebook tüm ekranı güncellemek yerine sadece güncellenmesi gereken alanı güncellemek istedi.

// Yani her ufak birimi birer bileşen olarak tasarlayalım ve o bileşen içersinde bir değişim işlemi gerçekleştiği anda sadece o component render edilsin mantığına dayanıyor. 

// Twitter'da da sürekli bir DOM hareketi işlemi var o yüzden onlarda react kullanıyor. Mesela Githubda React kullanılmıyor çünkü bir sayfayı bir kere açıyoruz ve sonrasında kolay kolay bir manüpülasyon işlemi olmuyor.

// Yani React'ı biri dedi diye her projede kullanmanın bir anlamı yok ihtiyaçları göz önünde bulundurarak kullanmalıyız.

// Ne zaman React kullanmak mantıklı?
// Eğer UI'ınız çok fazla manüpülasyon yapılacak bir UI ise facebook, twitter, twitch gibi bu gibi durumlarda bizim react kullanmamız mantıklı.

// İhtiyacımız olmadığı halde react kullanırsak gereksiz bir efor sarf etmiş yani overengineering yapmış oluruz.