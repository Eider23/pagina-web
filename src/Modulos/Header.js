
import React, {Component} from "react"
import profile from "../Photos/profile.png"
import logo from "../Photos/logo.png"

// Barra superior

class Header extends Component {
    render(){
        return(
            <header
            id= "hd"
            style={{
                backgroundColor: "#00CB7B ",
                border: "1px solid white",
                width: "100%",
            }}>
                <ul style={{
                    fontWeight:"600px",
                    fontSize:"20px",
                    marginTop:"3%",
                    fontSize:"20px"
                }}>
                    <a href="MENU" style={{
                        color: "#000000",
                        textDecorationLine: 'none',
                    }}><b>MENU</b></a>&nbsp;

                    <a href="PELICULA" style={{ 
                        color: "#000000",  
                        textDecorationLine:'none', 
                        margin:"30px" 
                        }}><b>PELICULAS</b></a>&nbsp;

                    <a href="JUEGOS" style={{ 
                        color: "#000000",  
                        textDecorationLine:'none', 
                        margin:"30px" 
                    }}><b>JUEGOS</b></a>&nbsp;

                    <a href="HISTORIETAS" style={{ 
                        color: "#000000",  
                        textDecorationLine:'none', 
                        margin:"30px" 
                    }} ><b>HISTORIETAS</b></a>&nbsp;

                    <a href="FIGURAS DE ACCION" style={{ 
                        color: "#000000",  
                        textDecorationLine:'none', 
                        margin:"30px" 
                        }}><b>FIGURAS DE ACCION</b></a>
                    
                    <span class="icon" style={{
                        marginLeft:"30px"
                        }}><i class= "buscador"></i></span>
                    <input type="buscar" placeholder="Buscar" />

                <figure style={{
                    marginLeft: "95%",
                    marginTop: "-70px"    
                }}>
                    <img
                        src={profile}
                        style= {{
                            marginLeft: "5%",	
                            width:"60px",
                            height:"60px"  
                        }}
                    />

                    <figcaption>PERFIL</figcaption>
                </figure>
                <figure style= {{
                    marginLeft: "50%", 
                    marginTop:"-98px"
                }}>
                    <img
                        src= {logo}
                        style={{
                            marginLeft: "15%",	
                            width:"60px",
                            height:"60px"  
                        }}
                    />
                </figure>
                </ul>
            </header>
        )
    }
}

export default Header