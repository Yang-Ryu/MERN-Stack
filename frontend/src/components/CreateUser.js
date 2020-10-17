import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    
    state = {
        users: [],
        username: ''
    }
    
    async componentDidMount()
    {
       this.getUsers();
        console.log(this.state.users)
    }

    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({users: response.data});
    }

    //e = objeto que recibe la funcion
    onChangeUsername = (e) =>
    {
        this.setState({
            username: e.target.value //username sera igual al valor del objeto recibido
        })
    }

     onSubmit = async e => {
        e.preventDefault(); //Para evitar el comportamiento Default del formulario (que es resetear toda la pag de react)
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({username: ''});
        this.getUsers();
    }

    //Metodo para eliminar un usuario
    DeleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' +id)

    }
    
    render() {
        return (
            <div className= 'row'>
                <div className="col-md-4">
                    <div className="card card-body">
                    <h3>Create New User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control"
                            value={this.state.username} 
                            onChange={this.onChangeUsername}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                        Save
                        </button>
                    </form>
                    </div>
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    {
                        this.state.users.map( user =>( 
                        <li className="list-group-item list-group-item-action" 
                        key={user._id} 
                        onDoubleClick={() => this.DeleteUser(user._id)}
                        >
                            {user.username}
                        </li>)
                        )
                    }
                  </ul>
                </div>
            </div>
        )
    }
}
