import { useState } from "react";
import styles from "./Modal.module.css";

function Modal({ setIsOpen, selectedUser }) {
  const [user, setUser] = useState(selectedUser);

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setUser({ ...user, firstName: value });
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Update User Details</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className={styles.modalContent}>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  for="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={user.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  for="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={user.lastName}
                />
              </div>
              <div className="mb-5">
                <label
                  for="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  University
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={user.university}
                />
              </div>
              <div className="mb-5">
                <label
                  for="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  SSN
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={user.ssn}
                />
              </div>
            </form>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Update
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
