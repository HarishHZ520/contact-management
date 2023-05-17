import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Store/Slices/ContactSlice';
import { useNavigate } from 'react-router';

const ContactsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: any) => state.Contacts.contacts);

  const handleEditContact = (contact: any) => {
    navigate(`/edit-contact/${contact.firstName}`);
  };

  const handleDeleteContact = (firstName: string) => {
    dispatch(deleteContact(firstName));
  };

  return contacts.map((contact: any, index: number) => (
    <div key={index} className="flex flex-col w-40">
      <div className="border border-gray-500 p-4 list-none">
        <li>First Name : {contact.firstName}</li>
        <li>Last Name : {contact.lastName}</li>
        <li>Status : {contact.status}</li>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <button
          className="mt-4 py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded"
          onClick={() => handleEditContact(contact)}
        >
          Edit
        </button>
        <button
          className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded"
          onClick={() => handleDeleteContact(contact.firstName)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

export default ContactsList;
