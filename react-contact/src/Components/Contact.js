import React from 'react'
import ContactCard from './ContactCard'
const Contact = ({ contacts }) => { 
    contacts.sort((a, b) => a.first_name.localeCompare(b.first_name))
    return (

        <>
        
            {contacts.map((contact) => (
                <ContactCard  id={contact.id} contact={contact}/>
            ))}
        </>

    )
}

export default Contact
