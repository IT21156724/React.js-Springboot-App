import React, { Component } from "react";
import "./MainPage.css";
import UploadSection from "./UploadSection/UploadSection";
import PostContainer from "./PostContainer/PostContainer";

class Layout extends Component {
    render() {
        return (
            <div className="layout-container">
                
                <div className="grid-item" style={{ flex: 3 }}>
                  
                </div>
                
                <div className="grid-item_middle" style={{ flex: 6 }}>
                    <UploadSection />
                    <PostContainer />
                </div>
                
                <div className="grid-item" style={{ flex: 3 }}>
                   
                </div>
            </div>
        );
    }
}

export default Layout;

