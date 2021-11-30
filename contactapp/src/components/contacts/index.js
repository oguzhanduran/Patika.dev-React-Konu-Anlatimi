// Bu dosya contact componentimizi çağırdığımızda kullanacağımız dosyamız.

import {useState, useEffect} from 'react'

import List from "./list";
import Form from "./Form";
function Contacts() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
console.log(contacts)
    }, [contacts]) // form submit edildiğinde yapılan ekleme işlemini bize bildircek bu sayede. Yani contacts değiştiği anda loglanacak.


    return (

        <div>
           <List/> 
           <Form addContact={setContacts} contacts={contacts}  />  
        </div>
    )
}
 // Forma birden fazla isim eklenmesini sağladık.
export default Contacts

// // Dikkat!!! list dizininin altında olusturdugumuz index dosyasını app.js'e eklemedik direk contact componentine yani buraya ekledik contact list contact'ın alt dizini olduğu için.