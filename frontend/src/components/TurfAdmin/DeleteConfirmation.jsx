// import React from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const DeleteConfirmation = ({
//   showModal,
//   hideModal,
//   confirmModal,
//   id,
//   message,
// }) => {
//   // return (<div className="h-[200px] w-[200px]">
//     <Modal scrollable={true} show={showModal} onHide={hideModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>Delete Confirmation</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="alert alert-danger">{message}</div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="default" onClick={hideModal}>
//           Cancel
//         </Button>
//         <Button variant="danger" onClick={() => confirmModal(id)}>
//           Delete
//         </Button>
//       </Modal.Footer>
//     </Modal>
//     </div>
//   );
// };

// export default DeleteConfirmation;

import React from 'react'

const DeleteConfirmation = ({showModal,
  hideModal,
  confirmModal,
  id,
  message,}) => {
  return (
    <div className='w-[350px] h-[200px] bg-white '>
      <p>Are you sure want to delete?</p>
      <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Danger</button>

    </div>
  )
}

export default DeleteConfirmation