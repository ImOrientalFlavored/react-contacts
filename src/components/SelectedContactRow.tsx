import { Contact } from "./ContactList";


interface SelectedContactRowProp{
    contact:Contact,
    setSelectedContactID(x:number): void;
}
export default function SelectedContactRow({contact, setSelectedContactID}:SelectedContactRowProp){
    return(
        <table onClick={()=>{setSelectedContactID(0)}}>
            <thead>
                <tr>
                <th colSpan={1}>{contact.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{contact.username}</td>
                </tr>
                <tr>
                    <td>{contact.phone}</td>
                </tr>
                <tr>
                    <td>{contact.email}</td>
                </tr>
                <tr>
                    <td>{contact.website}</td>
                </tr>
              
            </tbody>
        </table>
    )
}