import React, {Component} from "react";
import "./Post.css";
//import dp1 from "../../../../images/dp1.png";
import Usericonnav from "../../../../images/Usericonnav.png";
//import post2 from "../../../../images/post2.jpeg";
import purlike from "../../../../images/purlike.png";
import purlikebutton from "../../../../images/purlikebutton.png";
import purplcommentbutton from "../../../../images/purplcomment.png";
import purplesharebutton from "../../../../images/purpleshare.png";
import eatinghealthy from "../../../../images/eatinghealthy.jpg";



class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    isImageAvailabel=(data)=>{
        return data===""?false:true;
    }

    render() { 
        return ( 
            <div className="post_container">
                {/* header */}
                <div className="post_header">
                    <div className="post_header_img"> 
                    <img src={Usericonnav} alt="camera" width="40px" /></div>
                    <div className="post_header_text">
                        {this.props.object.user_name}
                    </div>
                </div>

                {/* description - The State Of The Fitness Industry 2023: Key Trends & Statistics*/}
                <div className="post_description">
                {this.props.object.description}
                </div>

                {/* header */}
                <div></div>

                {/* image */}
                <div className="post_image">
                {/*
                    this.isImageAvailabel(this.props.object.post_img) ? <img src={this.props.object.post_img} width="600px"/> : <span></span>
        */}
                {/*<img src={fitness_man} width="600px""/>*/}
                <img src={eatinghealthy} width="600px"/>
                </div>
              
                {/* like count */}
                <div className="post_likeCountConntainer">
                    <div className="post_like">
                       <img className="post_img" src={purlike} alt="like" width="600px"/>
                    </div>
                    <div className="post_likeCount">
                    {this.props.object.like}
                    </div>
                </div>

                {/* like share box */}
                <div className="post_likeShare">
                    
                    <div className="post_tab">
                        <div className="post_tabfirst">
                           <img className="post_tabing" alt="likebutton" src={purlikebutton} />
                        </div>
                        <div className="post_tabtext">
                            Like
                        </div>
                    </div>

                    <div className="post_tab">
                        <div className="post_tabfirst">
                           <img className="post_tabing" alt="commentbutton" src={purplcommentbutton} />
                        </div>
                        <div className="post_tabtext">
                            Comment
                        </div>
                    </div>

                    <div className="post_tab">
                        <div className="post_tabfirst">
                           <img className="post_tabing" alt="sharebutton" src={purplesharebutton} />
                        </div>
                        <div className="post_tabtext">
                            Share
                        </div>
                    </div>
                </div>

                {/* comment box */}
                <div className="upload_comment">
                <div className="upload_top">
                    <div className="post_header_img">
                         <img src={Usericonnav} alt="camera" width="40px" />
                    </div>
                    <div className="description_input">
                        <input className="upload-box" type="text" placeholder="Write a comment..." />
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Post;


