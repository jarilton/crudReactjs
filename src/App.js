import { React, Component } from 'react';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Cadastro de Clientes",
      employeeData: [],
      act: 0,
      index: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let email = this.refs.txtEmail.value;

    if(this.state.act === 0) {
      let newEmployee = {
        "name": name,
        "email": email,
      }
      employeeData.push(newEmployee);
    } 
    else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].email = email;
    } 
    
    this.setState({
      employeeData: employeeData,
      act: 0
    })    

    this.refs.formEmployee.reset();
  }

  handleEdit = (i) => {
    let employeeData = this.state.employeeData[i];
    this.refs.txtName.value = employeeData.name;
    this.refs.txtEmail.value = employeeData.email;

    this.setState({
      employeeData : employeeData,
      act : 1,
      index : i
    })
  }

  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1)
    this.setState({
      employeeData: employeeData,
    })
  }

  render() {
    let employeeData = this.state.employeeData;
    return (
     <>
       <form ref="formEmployee"  className="form">
        <h1 className="titulo">{this.state.title}</h1>
        <label className="label">Nome</label>
        <input type="text" ref="txtName" placeholder="Digite o nome" className="input"/>

        <label className="label">Email</label>
        <input type="email" ref="txtEmail" placeholder="Digite o email" className="input"/>

        <button onClick={e => this.handleSubmit(e)} className="button">Salvar</button>
      </form>

      <table className="table">
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
        {
          employeeData.map((data, i) => 
            <tr key={i}>
              <td>{data.name}</td> 
              <td>{data.email}</td> 
              <td>
                <button onClick={i => this.handleEdit(i)} className="button">Editar</button>
              </td>
              <td>
                <button onClick={i => this.handleDelete(i)} className="button">Excluir</button>
              </td>
            </tr>
        )}
      </table>
     </>
    )
  }
}

export default App;
