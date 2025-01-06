import React from 'react';

const Success = ({ show, handleClose }) => {
  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`} 
      id="SucessModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!show} 
      style={{ backgroundColor: 'rgba(179, 100, 100, 0.5)' }} 
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-success" id="exampleModalLabel">
              Success
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose} 
            ></button>
          </div>
          <div className="modal-body">
            Your form has been successfully submitted!
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary bg-primary"
              onClick={handleClose} 
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
