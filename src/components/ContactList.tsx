//import React from "react"; 
import ContactRow from "./ContactRow";

interface Contact{
    id:number,
    name:string,
    phone:string,
    email:string;
}
interface ContactListProp{
    contacts: Contact[];
}

export default function ContactList({contacts}: ContactListProp) { 

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               contacts.map((contact)=>{
                return <ContactRow 
                    key={contact.id} 
                    name={contact.name} 
                    phone={contact.phone} 
                    email={contact.email} />
               }
               )
             }
          </tbody>
        </table>
    ); 
}