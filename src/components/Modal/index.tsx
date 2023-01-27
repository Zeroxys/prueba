import React from 'react'
import Modal from 'react-modal';

const Modal = ({children}) => {
  return (
    <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => isModalOpen(false)}
        style={customStyles}
        overlayClassName={styles.modalStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={() => isModalOpen(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>the modal</button>
        </form>
      </Modal>
  )
}

export default Modal
