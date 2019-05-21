import React, { Component } from 'react';

class Formulario extends Component {
    tituloRef=React.createRef();
    contenidoRef=React.createRef();
    
    crearPost=(e)=>{
        e.preventDefault();

        const post={
            title:this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId:1
        }
        this.props.crearPost(post)
    }
    render() {
        return (
            <form onSubmit={this.crearPost}className="col-8">
                <legend className="text-center">Crear nuevo post</legend>
                <div className="form-group">
                    <label>Titulo del post</label>
                    <input type="text" className="form-control" placeholder="titulo del post" ref={this.tituloRef}/>
                </div>
                <div className="form-group">
                    <label>Contenido</label>
                    <textarea className="form-control" placeholder="contenido" ref={this.contenidoRef}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}

export default Formulario;