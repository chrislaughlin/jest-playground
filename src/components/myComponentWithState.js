import React from 'react';
import Modal from "./modal";

class MyComponentWithState extends React.Component {

    state = {
        showModal: false
    }

    showModal = () => {
        this.setState({
            showModal: true
        });
    }

    render() {
        const {
            showModal
        } = this.state;
        return (
            <div>
                <span>This is example text</span>
                <button
                    onClick={this.showModal}
                >
                    Show
                </button>
                {
                    showModal &&
                        <Modal/>
                }
            </div>
        );
    }
}

export default MyComponentWithState;
