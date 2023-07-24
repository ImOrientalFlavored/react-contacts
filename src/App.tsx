import { useState } from 'react';
import ContactList from './components/ContactList';
import './App.css';

function App() {

  const [selectedContactID, setSelectedContactID] = useState(0);

  return(
      <ContactList activeContact={selectedContactID} setSelectedContactID={setSelectedContactID}/>
  )
}

export default App