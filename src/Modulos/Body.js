
import React, {Component} from "react";
import pikachu1 from "../Photos/pikachu1.png"
import pikachu2 from "../Photos/pikachu2.png";
import pikachu3 from "../Photos/pikachu3.png";
import video from "../Photos/cha.mp4";
import { render } from "@testing-library/react";


class Body extends Component {
    render(){
        return(
            <body>
                <div
                style={{
                    backgroundColor: "000000",
                    height: "110%",
                    width: "90%",
                    position: "left",
                }}>
                    <h1 class="title"
                    style={{
                       
                        color: "#000000",
                        textAlign: "center"

                    }}>
                        Pagina web<br></br><br></br>
                    </h1>
                <div
                style={{
                    float: "left",
                    backgroundColor: "#000000",
                    height: "80%",
                    width: "40%",
                    marginLeft: "30px",
                    }}>

                <figure style={{
                    marginLeft: "-8%",
                    marginTop: "25%"
                    }}>
                        <img
                            src={pikachu1}
                            style={{
                                float: "left",
                                marginLeft: "15%",
                                width: "200px",
                                height: "300px"
                            }}
                        /
                    </figure>

                <figure style={{
                    marginLeft: "5%",
                    marginTop: "25%"
                    }}>
                        <img
                        src={pikachu2}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"280px",
                            height:"300px"
                        }}
                    />
                </figure>

                <figure style={{
                    marginLeft: "5%",
                    marginTop: "25%"
                    }}>
                        <img
                        src={pikachu3}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"280px",
                            height:"300px"
                        }}
                    />
                </figure>

            </div>
            <div
                style={{
                    float: "left",
                    backgroundColor: "#000000",
                    height: "80%",
                    width: "40%",
                    marginLeft: "14%",
                }}>
                <figure style={{
                    maginTop: "24%",
                    marginLeft: "15%"
                }}>
                <video
                    src={video}
                    autoplay="true" muted="true" loop="true" 
                    style={{
                         width: "90%",                       
                    }}
                />
            </figure>
        </div>
    </div>
        </body>
    );
}}
    
export default Body
