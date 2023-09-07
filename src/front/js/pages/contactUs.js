import React, { useContext, useEffect } from 'react'
import '../../styles/contactUs.css'
import { ContactUsTable } from '../component/contactUsTable';
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

export const ContactUs = () => {
    const { store, actions } = useContext(Context)
    

    return (
        <div>
            <div>
                <ContactUsTable />
            </div>
        </div>
    )
}

export default ContactUs