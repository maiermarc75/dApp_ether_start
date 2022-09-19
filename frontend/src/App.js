import { useEffect, useState } from 'react';
import Web3 from 'web3';
import contacts_abi from './ABI/Contacts.json'
// const data = require('../ABI/Contacts.json');

const CONTACT_ADDRESS = '0x230dFE49ed5D13Df1AcE2E7F6AB45e01060492C5'


function App() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function load() {

      const web3 = new Web3('http://127.0.0.1:8545');
      // await window.ethereum.enable();
      
      const Contact =new web3.eth.Contract(contacts_abi.abi, CONTACT_ADDRESS);
      Contact.methods.getName().call().then((result) => {
        console.log(result)
      })
    }
    
    load();
    
  }, []);
  
  return (
    <div>
      Your account is: {account}
      <h1>Contacts</h1>
      <ul>
      {
        Object.keys(contacts).map((contact, index) => (
          <li key={`${contacts[index].name}-${index}`}>
            <h4>{contacts[index].name}</h4>
            <span><b>Phone: </b>{contacts[index].phone}</span>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;