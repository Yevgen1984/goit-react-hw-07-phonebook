import { useDispatch, useSelector } from 'react-redux';
import {deleteContact} from 'redux/contactsOperations';
import { selectContacts } from 'redux/contactsSelector';

import s from './PhoneList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();
  // // const renderContacts = contacts.filter(({ name }) =>
  // //   name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <>
      <ul className={s.phoneList}>
        {!contacts.length && <p>There are no contacts found!</p>}
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <span className={s.phoneName}>{name} :</span>
                {number}
                <button
                  className={s.btnDelete}
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

