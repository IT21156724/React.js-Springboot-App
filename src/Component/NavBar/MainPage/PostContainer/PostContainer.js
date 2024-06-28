import React, {Component} from "react";
import "./PostContainer.css";
import Post from "./Post";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    //calling the rest from our backend
    getData=()=>{ 
        let json=[

            {
                "post_ID": 1,
                "user_id": 12345678,
                "user_img": "url....",
                "user_name": "Prajila Shehani",
                "description": "Eating healthy promotes overall well-being and vitality.",
                "post_img": "url of the image",
                "like": "1",
            },

            {
                "post_ID": 2,
                "user_id": 12345678,
                "user_img": "url....",
                "user_name": "Prajila Shehani",
                "description": "The popularity that the health and fitness niche has reached online is unprecedented.",
                "post_img": "url of the image",
                "like": "25",
            },

            {
                "post_ID": 3,
                "user_id": 12345678,
                "user_img": "",
                "user_name": "Dhanuka Shehan",
                "description": "My Healthy Plate serves as a guide to help you plan a healthy diet meal plan.",
                "post_img": "",
                "like": "105",
            }  
        ]

        this.setState({data : json});
    }
    
    componentDidMount(){
        this.getData();
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item} />
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer;



