import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveContact } from '../../Store/Slices/ContactSlice';
import { useNavigate } from 'react-router-dom';

const CreateContactForm = ({
  efirstName,
  elastName,
  estatus,
  editMode,
  onEditContact,
}: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(efirstName || '');
  const [lastName, setLastName] = useState(elastName || '');
  const [status, setStatus] = useState(estatus || '');
  const [error, setError] = useState('');

  const handleSaveContact = () => {
    if (!firstName || !lastName || !status) {
      setError('Please enter all fields.');
      return;
    }

    const newContact = {
      firstName,
      lastName,
      status,
    };
    if (editMode === true) {
      // call the handler function with the updated contact
      onEditContact(newContact);
    } else {
      dispatch(saveContact(newContact));
    }

    setFirstName('');
    setLastName('');
    setStatus('');
    navigate('/');
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center lg:gap-x-4 md:gap-x-3 sm:gap-x-0 mb-5 lg:p-2 md:p-0">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          className="border grow p-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center lg:gap-x-4 md:gap-x-3 sm:gap-x-0 mb-5 lg:p-2 md:p-0">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          className="border grow p-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center lg:gap-x-4 md:gap-x-3 sm:gap-x-0 mb-5 lg:p-2 md:p-0">
        <label htmlFor="status">Status:</label>
        <div className="flex flex-row sm:flex-col grow">
          <div className="flex p-2 justify-center items-center gap-2">
            <input
              type="radio"
              id="statusActive"
              name="status"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
            />
            <label htmlFor="statusActive">Active</label>
          </div>
          <div className="flex p-2 justify-center items-center gap-2">
            <input
              type="radio"
              id="statusInactive"
              name="status"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
            />
            <label htmlFor="statusInactive">Inactive</label>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-center">
        <button
          className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
          onClick={handleSaveContact}
        >
          {editMode === true ? 'Save Edited Contact' : 'Save Contact'}
        </button>
      </div>
    </>
  );
};

export default CreateContactForm;
