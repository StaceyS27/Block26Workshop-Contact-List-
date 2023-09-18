import React from 'react'
import ContactRow from './contactRow'
import ContactList from './ContactList'
import App from '../App'
import { useState, useEffect } from 'react'


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchSingleContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleContact();
    }, [])

    console.log(contact);

    return (
        <div>
            {contact ? (
                <div>
                    <p>{contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            ) : (
                <p>No contact</p>
            )}
        </div>

    )

} 