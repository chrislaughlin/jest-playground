import React from 'react';
import PropTypes from 'prop-types';
import Modal from "./modal";

const MyComponent = ({
    showModal
}) => {
    return (
        <div>
            <span>This is some test text</span>
            {
                showModal &&
                    <Modal/>
            }
        </div>
    );
};

MyComponent.propTypes = {};

export default MyComponent;

