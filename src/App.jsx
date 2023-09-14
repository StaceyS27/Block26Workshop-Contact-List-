import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import dummyContacts from './components/ContactList'


function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts: ", contacts)

  return (
    <>
      <ContactList />
    </>
  )
}

export default App
