// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispath = useDispatch();
  const handleDeleteItems = id => {
    dispath(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts(contacts, filter).map(item => {
        return (
          <li key={item.id}>
            {item.name} {item.number}{' '}
            <button type="button" onClick={() => handleDeleteItems(item.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.protoTypes = {
//   contacts: PropTypes.arrayOf({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }),
//   filter: PropTypes.string.isRequired,
// };
