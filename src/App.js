import './App.css';
import React, { Component } from 'react';
import AddStudent from './add-student';
import { environment , deleteUser, addStudent} from './.env';



class App extends Component {
  state = {
    isLoading: true,
    students: [],
    error: null
  };
  getFetchUsers() {
    this.setState({
      loading: true
    }, () => {
      fetch(environment.BaseUrl).then(res => res.json()).then(result => this.setState({
        loading: false,
        students: result
      })).catch(console.log);
    });
  }
   deleteData(id){
     deleteUser(id);
     this.getFetchUsers();
}

  componentDidMount() {
    this.getFetchUsers();
   
  }

  handleAdd = student => {
    addStudent(student);
    this.getFetchUsers();
  }
  render() {
    const {
      students,

    } = this.state;
    return (
      <div className="App">
        <div className="p-4">
          <div className="row">
            <div className="col-md-6">
              <table className="table shadow">
                <thead className="bg-info">
                  <tr>
                    <th>prenom & Nom</th>
                    <th>Sex</th>
                    <th>Télphone</th>
                    <th>Niveau</th>
                    <th>Montant</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr>
                      <td>{student.prenom} {student.nom}</td>
                      <td>{student.sex}</td>
                      <td>{student.telephone}</td>
                      <td>{student.niveau}</td>
                      <td>{student.montant}</td>
                      <td><i className="fa-solid fa-pen text-success"></i>
                        <i className="fa-solid fa-trash text-danger m-3" onClick={() =>  this.deleteData(student.id)}></i></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <AddStudent AddStudent={this.handleAdd} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
