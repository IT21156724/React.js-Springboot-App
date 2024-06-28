// Dialog.js
import React, { Component } from "react";
import "./Dialog.css";
import { FaTimes } from "react-icons/fa";

class Dialog extends Component {
    render() {
        const { isOpen, onClose, uploadImage } = this.props;

        if (!isOpen) return null;

        return (
            <div className="dialog-overlay">
                <div className="dialog-content">
                    <button className="close-button" onClick={onClose}>
                        <FaTimes />
                    </button>
                    <h2>Create Post</h2>
                    <input type="text" className="upload_textbox" placeholder="Description..." />
                    {/* Display the uploaded image */}
                    <img src={uploadImage} alt="Uploaded Content" className="uploadImage" />
                    <input type="button" value="Post" onClick={onClose} className="upload_button" />
                </div>
            </div>
        );
    }
}

export default Dialog;
