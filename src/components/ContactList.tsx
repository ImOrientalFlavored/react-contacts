//import React from "react"; 
import ContactRow from "./ContactRow";
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { useState } from "react";
import SelectedContactRow from "./SelectedContactRow";

interface ContactListProp{
  activeContact: number;
  setSelectedContactID: Dispatch<SetStateAction<number>>;
}
export interface Contact{
  id:number
  name:string,
  username:string,
  phone:string,
  email:string,
  website:string,
  address:ReactNode,
  company:ReactNode;
}


export default function ContactList({activeContact, setSelectedContactID}:ContactListProp) { 
    const API_URL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users';
    const [contacts, setContacts] = useState([] as Contact[]);

    useEffect(()=>{
        const fetchContacts = async ()=>{
            try{
                const req:Response = await fetch(API_URL);
                const resp = await req.json() as Contact[];
                console.log(resp)
                setContacts(resp);
            } catch(e){
              console.error("there was a booboo fetching data " , e);
            }
        }
        void fetchContacts();
    },[])

    const selectedContact = contacts[activeContact-1]

  return (
    <>
    {activeContact ? (
      <SelectedContactRow
        contact={selectedContact}
        setSelectedContactID={setSelectedContactID}  />
    ):( 
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
            {
               contacts.map((contact:Contact)=>{
                return <ContactRow 
                    key={contact.id}
                    setSelectedContactID={setSelectedContactID}
                    id={contact.id}
                    name={contact.name} 
                    phone={contact.phone} 
                    email={contact.email} />
               }
               )
             }
          </tbody>
        </table>
    )} 
    </>);
}
