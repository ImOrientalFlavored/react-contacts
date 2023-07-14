interface ContactRowProp{
    name:string,
    phone:string,
    email:string;
}

export default function ContactRow({name, phone, email}:ContactRowProp){
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}