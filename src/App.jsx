import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
