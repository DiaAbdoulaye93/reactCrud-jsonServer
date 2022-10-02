import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { state } from 'react';

class App extends Component {
  state = {
    Students: [
      { id: 1, nom: "Dia", prénom: "Abdoulaye", sex: "M", niveau: "licence 1", montant: 25000 },
      { id: 2, nom: "Diallo", prénom: "Saliou", sex: "M", niveau: "licence 3", montant: 25000 },
      { id: 3, nom: "Camara", prénom: "Mamoudou", sex: "M", niveau: "Master 1", montant: 50000 },
      { id: 4, nom: "Sow", prénom: "Hady", sex: "F", niveau: "licence 1", montant: 25000 },
      { id: 5, nom: "Sall", prénom: "Hamidou", sex: "M", niveau: "licence 2", montant: 25000 },
      { id: 6, nom: "Diaw", prénom: "Oumy", sex: "F", niveau: "Master 1", montant: 50000 },
    ]
  };
  render() {

    return (
      <div className="App">
        <div class="p-4">
          <div class="row">
            <div class="col-md-7">
              <table class="table">
                <thead class="bg-success">
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Sex</th>
                  <th>Niveau</th>
                  <th>Montant</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {this.state.Students.map(student => (
                    <tr>
                      <td>{student.nom}</td>
                      <td>{student.prénom}</td>
                      <td>{student.sex}</td>
                      <td>{student.niveau}</td>
                      <td>{student.montant}</td>
                      <td><i class="fa-solid fa-pen text-success"></i>
                        <i class="fa-solid fa-trash text-danger m-3"></i></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="col-md-5">
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
