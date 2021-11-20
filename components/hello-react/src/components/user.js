// function User(props) {
//     // console.log(props); // consolda çalıitırdığımızda console'da göndermiş olduğumuz propertyi görürüz.
//     return(
// <h1>
//   {
//       props.isLoggedIn ? `${props.name} ${props.surName}` : "Giriş Yapmadınız"
//   }

// </h1>
    
//     )
// }

// export default User

//  app.js'den gönderdiğimiz name parametresini {props.name} şeklinde kullanabiliriz. süslü parantez kullandığımıza dikkat et

// Yukaridaki gibi her defasında props yazmak yerine props'un bir obje olduğunu ve altında name surName ve isLoggedIn olduğunu biliyorum.

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {
//     friends.map((friend) => ( 
//     <div>{friend}</div>
//     ))}
// </>
    
//     )
// }

// export default User

// map işlemini yaparken yani listeleme işlemini yaparken döngüler içersinde return ettiğimiz ifadelerin performans kaybı yaşanmadan listelenmesi için bizden react bir key prob'u isiyor. Bu key prop'u dediğimiz şeyde aslında benzersiz bir ifade. Yani döngü içersinde return ettiğiniz jsx'in en dışındaki elemente benzersiz bir key prob'u tanımlamanız gerekiyor bu map her döndüğünde index veriyor ya bize bu index O'dan başlayıp kaç eleman varsa ora kadar saymaya devam ediyor. 



// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {
//     friends.map((friend, index) => ( 
//     <div key={index}>
//         {index} - {friend.name}
//     </div>
//     ))}
// </>
    
//     )
// }

// export default User

// Bunu index adında bir key verdik div içine ve uyarı kaayboldu. Bunu çalıştırdığımız her döngü listelemesinde mutlaka en dıştaki elemana vermemiz gerekecek. Bu illa bu index olmak zorunda değil bizim array'imizin altında yani friends gibi benzersiz bir ifade varsa biz onu da kullanabiliriz.

// Biz aşağıda index'i silip benzersiz ifade olan Id'yi koyabiliriz.

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {
//     friends.map((friend, index) => ( 
//     <div key={friend.id}>{friend.name}
//     </div>
//     ))}
// </>
    
//     )
// }

// export default User


// Bazen return deyip alttaki gibi de yazdırabilirler
function User({name, surName, isLoggedIn, age, friends}) {
    
    return(
<>
<h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>


    {friends.map((friend) => {
    // const x = friend.id + 2; böyle bir şey kullanacaksak bu yapıyı return şeklinde kullanabiliriz.
     return <div key={friend.id}>{friend.name}</div>
    })}
</>
    
    )
}

export default User;
