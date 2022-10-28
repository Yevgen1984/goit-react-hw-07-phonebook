import { useDispatch, useSelector } from 'react-redux';
import {deleteContact} from 'redux/contactsOperations';
import { selectContacts, selectedFilter,selectIsLoading, selectError } from 'redux/contactsSelector';
import { Loader } from 'components/Loader';

import s from './PhoneList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const renderContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
    {isLoading && <Loader/>}
      {error && (
        <p>
          Sorry!The action was not completed, try again later.
        </p>
      )}
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

