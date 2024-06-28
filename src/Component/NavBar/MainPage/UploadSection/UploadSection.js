/*import React, { Component } from "react";
import "./UploadSection.css";
import camera from "../../../../images/camera.png";
import Dialog from "./Dialog"; // Import Dialog component from the correct path
import firebase from "../../../../firebase";

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            uploadImage: null,
            image: null
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    openDialog = (event) => {
        this.setState({ open: true });
        this.setState({ uploadImage: URL.createObjectURL(event.target.files[0])});
        this.setState({image: event.target.files[0]});
    };

    uploadToFirebase=()=>{
        var uploadTask = firebase.storage().ref("images").child(this.state.image.name).put(this.state.image);
        uploadTask.on(
            "state_changed",
            function (snapshot){

            },
            function (error){

            }, 
            function (){
                uploadTask.snapshot.ref.getDownloadURL().then(function (donloadURL){

                })
            }
        );
    };
    

    render() {
        const { open, uploadImage } = this.state;

        return (
            <div>
                {/*<Dialog isOpen={open} onClose={this.handleClose} uploadImage={uploadImage} />*//*}
                <Dialog isOpen={open} onClose={this.handleClose} aria-labelledby="simple-dialog-title" uploadImage={uploadImage} uploadToFirebase={this.uploadToFirebase} />

                <div className="upload_container">
                    <div className="upload_top">
                        <div className="upload_topic">What's on your mind ?</div>
                    </div>
                    <div>
                        <input className="upload-box" type="text" placeholder="Description..." />
                    </div>

                    <div className="upload_bottom">
                        <div className="upload_tabs">
                            <label for="file-upload" className="upload_tabs">
                                <img src={camera} alt="camera" width="30px" />
                                <div className="upload_text">Photo/Video</div>
                            </label>
                            <input type="file" id="file-upload" onChange={this.openDialog} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadSection;*/



/*import React, { Component } from "react";
import "./UploadSection.css";
import Dialog from "./Dialog";
import camera from "../../../../images/camera.png";
import firebase from "firebase/compat/app"; // Import firebase from the compatible version
import "firebase/compat/storage"; // Import Firebase storage

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            uploadImage: null
        };
    }

    handleFileInputChange = (event) => {
        // Open the dialog when a file is selected
        const file = event.target.files[0]; // Get the selected file
        this.setState({ isDialogOpen: true, uploadImage: URL.createObjectURL(file) });
        this.fileToUpload = file; // Store the file to upload
    };

    handleCloseDialog = () => {
        // Close the dialog
        this.setState({ isDialogOpen: false });
    };

    uploadToFirebase = () => {
        if (!this.fileToUpload) {
            return; // No file selected, do nothing
        }

        const storageRef = firebase.storage().ref("images");
        const imageRef = storageRef.child(this.fileToUpload.name);

        // Upload file to Firebase storage
        imageRef.put(this.fileToUpload).then((snapshot) => {
            console.log("File uploaded successfully!");

            // Get download URL of the uploaded file
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("Download URL:", downloadURL);

                // Perform additional tasks with the download URL (e.g., save to database)
            });
        }).catch((error) => {
            console.error("Error uploading file:", error);
        });
    };

    render() {
        return (
            <div className="upload_container">
                {/* Render the custom dialog */ /*}
                <Dialog isOpen={this.state.isDialogOpen} onClose={this.handleCloseDialog} uploadImage={this.state.uploadImage} uploadToFirebase={this.uploadToFirebase} />

                <div className="upload_top">
                    <div className="upload_topic">What's on your mind?</div>
                </div>
                <div>
                    <input className="upload-box" type="text" placeholder="Description..." />
                </div>
                <div className="upload_bottom">
                    <div className="upload_tabs">
                        {/* Trigger file input when label is clicked */ /*}
                        <label htmlFor="file-upload" className="upload_tabs">
                            <img src={camera} alt="camera" width="30px" />
                            <div className="upload_text">Photo/Video</div>
                        </label>
                        {/* Actual file input, hidden from view *//*}
                        <input
                            type="file"
                            id="file-upload"
                            onChange={this.handleFileInputChange}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadSection;*/



/*import React, { Component } from "react";
import "./UploadSection.css";
import camera from "../../../../images/camera.png";
import Dialog from "./Dialog";
import storage from "../../../../firebase"; // Import Firebase storage instance

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            uploadImage: null,
            image: null
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    openDialog = (event) => {
        this.setState({ open: true });
        this.setState({ uploadImage: URL.createObjectURL(event.target.files[0]) });
        this.setState({ image: event.target.files[0] });
    };

    uploadToFirebase = () => {
        const { image } = this.state;

        if (image) {
            const storageRef = storage.ref(); // Get the root reference of Firebase storage
            const imagesRef = storageRef.child('images'); // Create a reference to the 'images' directory
            const fileRef = imagesRef.child(image.name); // Create a reference to the image location
            fileRef.put(image).then((snapshot) => {
                console.log("File uploaded successfully");
                // Get download URL of uploaded file (optional)
                fileRef.getDownloadURL().then((downloadURL) => {
                    console.log("Download URL:", downloadURL);
                    // You can use the downloadURL as needed
                });
            }).catch((error) => {
                console.error("Error uploading file:", error);
            });
        } else {
            console.error("No image selected for upload");
        }
    };

    render() {
        const { open, uploadImage } = this.state;

        return (
            <div>
                <Dialog
                    isOpen={open}
                    onClose={this.handleClose}
                    uploadImage={uploadImage}
                    uploadToFirebase={this.uploadToFirebase}
                />

                <div className="upload_container">
                    <div className="upload_top">
                        <div className="upload_topic">What's on your mind?</div>
                    </div>
                    <div>
                        <input className="upload-box" type="text" placeholder="Description..." />
                    </div>

                    <div className="upload_bottom">
                        <div className="upload_tabs">
                            <label htmlFor="file-upload" className="upload_tabs">
                                <img src={camera} alt="camera" width="30px" />
                                <div className="upload_text">Photo/Video</div>
                            </label>
                            <input type="file" id="file-upload" onChange={this.openDialog} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadSection;*/


/*import React, { Component } from "react";
import "./UploadSection.css";
import camera from "../../../../images/camera.png";
import Dialog from "./Dialog";
import firebase from "../../../../firebase/app"; // Correct Firebase import

class UploadSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      uploadImage: null,
      image: null,
      downloadURL: null // Store download URL after successful upload
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  openDialog = (event) => {
    this.setState({ open: true });
    const file = event.target.files[0];
    this.setState({ uploadImage: URL.createObjectURL(file), image: file });
  };

  uploadToFirebase = () => {
    const { image } = this.state;
    const storageRef = firebase.storage().ref(`images/${image.name}`);
    const uploadTask = storageRef.put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress, pause, and resume states
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        // Upload completed successfully, now get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          this.setState({ downloadURL }); // Store the download URL in state
        });
      }
    );
  };

  render() {
    const { open, uploadImage } = this.state;

    return (
      <div>
        <Dialog
          isOpen={open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          uploadImage={uploadImage}
          //uploadToFirebase={this.uploadToFirebase}
        />

        <div className="upload_container">
          <div className="upload_top">
            <div className="upload_topic">What's on your mind ?</div>
          </div>
          <div>
            <input className="upload-box" type="text" placeholder="Description..." />
          </div>

          <div className="upload_bottom">
            <div className="upload_tabs">
              <label htmlFor="file-upload" className="upload_tabs">
                <img src={camera} alt="camera" width="30px" />
                <div className="upload_text">Photo/Video</div>
              </label>
              <input type="file" id="file-upload" onChange={this.openDialog} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadSection;
*/


// UploadSection.js
import React, { Component } from "react";
import "./UploadSection.css";
import Dialog from "./Dialog";
import purphoto from "../../../../images/purphoto.png";

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            uploadImage: null
        };
    }

    handleFileInputChange = (event) => {
        this.setState({ isDialogOpen: true });
        this.setState({ uploadImage: URL.createObjectURL(event.target.files[0]) });
    };

    handleCloseDialog = () => {
        this.setState({ isDialogOpen: false });
    };

    render() {
        return (
            <div className="upload_container">
                <Dialog isOpen={this.state.isDialogOpen} onClose={this.handleCloseDialog} uploadImage={this.state.uploadImage} />

                <div className="upload_top">
                    <div className="upload_topic">What's on your mind?</div>
                </div>
                <div>
                    <input className="upload-box" type="text" placeholder="Description..." />
                </div>
                <div className="upload_bottom">
                    <div className="upload_tabs">
                        <label htmlFor="file-upload" className="upload_tabs">
                            <img src={purphoto} alt="purphoto" width="30px" />
                            <div className="upload_text">Photo/Video</div>
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            onChange={this.handleFileInputChange}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadSection;

