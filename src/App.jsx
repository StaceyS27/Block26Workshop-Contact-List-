import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import ContactRow from './components/contactRow';
import SelectedContact from './components/selectedContact'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <SelectedContact 
      selectedContactId={selectedContactId}
      setSelectedContactId={setSelectedContactId}
      />
    ) : (
      <ContactList 
      setSelectedContactId={setSelectedContactId} />
      
    )}

    </>
  )
}

export default App
