import { Component } from 'react';
import PropTypes from 'prop-types';
import ModalForm from './ModalForm';
import ModalContent from './ModalContent';

class Modal extends Component {

  static propTypes = {
    closeModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    details: PropTypes.shape({
      alias: PropTypes.string,
      name: PropTypes.string,
      form: PropTypes.bool
    })
  }

  closeModal = e => {
    // For closing modal (by clicking outside modal-container)
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  }

  render() {
    const details = this.props.details;
    return (
      <section onClick={this.closeModal} className={`modal-container ${this.props.modalVisible ? '' : 'hidden'}`}>
        <div className="modal">
          <div className="modal-content">
            <h4>{details.name ? details.name.toUpperCase() : ''}</h4>
            {details.alias && !details.form ? <ModalContent details={details} /> : null}
            {details.form ? <ModalForm /> : null}
          </div>
        </div>
      </section>
    );
  };
};

export default Modal;
