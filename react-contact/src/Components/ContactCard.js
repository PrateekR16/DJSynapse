import { FaStar, FaPhoneAlt, FaEnvelope, FaUniversity } from 'react-icons/fa'
const ContactCard = ({ contact, id }) => {

    return (
        <div key={id} className="card contactcard m-2 p-3">
            <img src={contact.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{contact.first_name} {contact.last_name}  </h5>
                <FaStar className="star" />
            </div>
            <ul className="list-group list-group-flush bg-dark">
                <li className="list-group-item"> <FaPhoneAlt className="phone" /> : {contact.phone_number}</li>
                <li className="list-group-item"><FaEnvelope className="email" /> : {contact.email}</li>
                <li className="list-group-item"><FaUniversity className="uni" /> : {contact.university}</li>
            </ul>
        </div>
    )
}

export default ContactCard


