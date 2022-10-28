import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoneContact } from 'redux/contactSlice';
import { selectPhoneContacts, selectedFilter } from 'redux/contactsSelector';

import s from './PhoneList.module.css';

export const PhoneList = () => {
  const phoneContacts = useSelector(selectPhoneContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();
  const renderContacts = phoneContacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <span className={s.phoneName}>{name} :</span>
                {number}
                <button
                  className={s.btnDelete}
                  type="button"
                  onClick={() => dispatch(deletePhoneContact(id))}
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
PhoneList.propTypes = {
  phoneContacts: PropTypes.array,
  onDelete: PropTypes.func,
};
