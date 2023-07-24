interface ContactRowProp{
    name:string,
    phone:string,
    email:string,
    id:number,
    setSelectedContactID(x:number): void;
}

export default function ContactRow({name, setSelectedContactID, id}:ContactRowProp){
    return(
        <tr onClick={()=>{setSelectedContactID(id)}}>
            <td>{name}</td>
        </tr>
    )
}