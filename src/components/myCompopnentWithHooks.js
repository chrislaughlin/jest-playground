import React from 'react';
import Modal from "./modal";

const MyCompopnentWithHooks = () => {
    const [ showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <span>This is example test</span>
            <button
                onClick={() => setShowModal(true)}
            >
                show Modal
            </button>
            {
                showModal &&
                <Modal/>
            }
        </div>
    );
};

export default MyCompopnentWithHooks;

