import React, {Component} from "react";

//BARRA INFERIOR

class Footer extends Component {
    render(){
        return(
            <footer
            style={{
                backgroundColor: "#008BFF",
                textAlign: "center",
            }}
        >
        
        <div style = { {marginTop:"52%"}}>
        <p>
            <br></br>
            <h4>Nombre: Eider hernandez</h4>
            <h4>Direccion de correo electronico: ehernandez63@uan.edu.co</h4>
            <h4>Posicion laboral: Administrador</h4>
            <h4>Direccion de trabajo: Cl. 22 Sur #12D-81, Bogotá, Cundinamarca </h4>
            <h4>Numero de telefono del trabajo:3142344934 </h4>
            <br></br>
        </p> 
        </div>

        
        </footer>
        );
    
    }}

export default Footer
    