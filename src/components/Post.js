import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

class Post extends Component {
    confirmarEliminacion=()=>{
        const {id}=this.props.info;
        Swal.fire({
            title: 'Está seguro?',
            text: "No puede revertir esta acción",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.props.borrarPost(id)
              Swal.fire(
                'Eliminado!',
                'El post ha sido eliminado.',
                'exito!'
              )
            }
          })


        
    }
    render() {
        const {id, title}=this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                    <Link to={`/editar/${id}`} className="btn btn-warning">Editar</Link>
                    <button className="btn btn-danger" type="button" onClick={this.confirmarEliminacion}>Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default Post;