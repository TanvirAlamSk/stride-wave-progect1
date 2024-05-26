import React from 'react';

const Modal = ({ children }) => {

    return (
        <dialog id="update_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <p className="py-4 text-green-400 text-lg font-semibold">{children}</p>
                <div className="modal-action flex items-center">
                    <form method="dialog">
                        <button className="btn btn-sm btn-active border border-solid">cancel</button>
                    </form>
                    <div className="modal-action inline mt-0">
                        <button className="btn btn-sm btn-active btn-secondary text-white ms-2">Confirm</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;