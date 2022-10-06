import './App.css';
import React, { Component } from 'react';
import AddStudent from './add-student';
import { environment } from './.env';



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
      fetch(environment.BaseUrl+ "Students").then(res => res.json()).then(result => this.setState({
        loading: false,
        students: result
      })).catch(console.log);
    });
  }
  componentDidMount() {
    this.getFetchUsers();
  }

  // state = {
  //   Students: [
  //     { id: 1, nom: "Dia", prenom: "Abdoulaye", sex: "M", telephone: "771970777", niveau: "licence 1", montant: 25000 },
  //     { id: 2, nom: "Diallo", prenom: "Saliou", sex: "M", telephone: "771970777", niveau: "licence 3", montant: 25000 },
  //     { id: 3, nom: "Camara", prenom: "Mamoudou", sex: "M", telephone: "771970777", niveau: "Master 1", montant: 50000 },
  //     { id: 4, nom: "Sow", prenom: "Hady", sex: "F", telephone: "771970777", niveau: "licence 1", montant: 25000 },
  //     { id: 5, nom: "Sall", prenom: "Hamidou", sex: "M", telephone: "771970777", niveau: "licence 2", montant: 25000 },
  //     { id: 6, nom: "Diaw", prenom: "Oumy", sex: "F", telephone: "771970777", niveau: "Master 1", montant: 50000 },
  //   ]
  // };
  handleDelete = id => {
    const students = this.state.Students.slice();
    const index = students.findIndex(student => student.id === id);
    students.splice(index, 1);
    this.setState({ Students: students });
  }
  handleAdd = student => {
    const students = [...this.state.Students]
    students.push(student);
    console.log(students);
    this.setState({ Students: students });
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
                        <i className="fa-solid fa-trash text-danger m-3" onClick={() => this.handleDelete(student.id)}></i></td>
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
