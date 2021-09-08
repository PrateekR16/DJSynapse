import { useState, useEffect } from 'react'
import Contact from './Components/Contact'
import Header from './Components/Header'
function App() {

  const [contacts, setContact] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const con = await fetchContacts()
      setContact(con)
    }
    getContacts();
  })

  const fetchContacts = async () => {
    let apiurl = 'https://gist.githubusercontent.com/YatharthVyas/93b13e4fd8687ecb6d692fedf852299a/raw/e9515185ca107d05dad1032c60917e2f511a805c/contact.json';
    const response = await fetch(apiurl);
    const data = await response.json();
    return data;
  }

  // const searchContact= (e)=>{
  //   const searchWord= e.target.value.toLowerCase
  //   const newFilter = contacts.filter((v)=>{
  //     return v.first_name.includes(searchWord)
  //   })
  //    setFilterContacts(newFilter);
  // }
  
  return (
    <>
      <Header  contacts={contacts}  id={contacts.id}/>
      <div className="contact py-3">
        <Contact contacts={contacts} />
      </div>
    </>
  );
}

export default App;
