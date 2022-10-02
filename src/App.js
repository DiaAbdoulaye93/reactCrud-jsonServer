import './App.css';
import React, { Component } from 'react';
import AddStudent from './add-student';

class App extends Component {
  state = {
    Students: [
      { id: 1, nom: "Dia", prénom: "Abdoulaye", sex: "M", telephone: "771970777", niveau: "licence 1", montant: 25000 },
      { id: 2, nom: "Diallo", prénom: "Saliou", sex: "M", telephone: "771970777", niveau: "licence 3", montant: 25000 },
      { id: 3, nom: "Camara", prénom: "Mamoudou", sex: "M", telephone: "771970777", niveau: "Master 1", montant: 50000 },
      { id: 4, nom: "Sow", prénom: "Hady", sex: "F", telephone: "771970777", niveau: "licence 1", montant: 25000 },
      { id: 5, nom: "Sall", prénom: "Hamidou", sex: "M", telephone: "771970777", niveau: "licence 2", montant: 25000 },
      { id: 6, nom: "Diaw", prénom: "Oumy", sex: "F", telephone: "771970777", niveau: "Master 1", montant: 50000 },
    ]
  };
  render() {

    return (
      <div className="App">
        <div class="p-4">
          <div class="row">
            <div class="col-md-6">
              <table class="table shadow">
                <thead class="bg-info">
                  <tr>
                    <th>Prénom & Nom</th>
                    <th>Sex</th>
                    <th>Télphone</th>
                    <th>Niveau</th>
                    <th>Montant</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Students.map(student => (
                    <tr>
                      <td>{student.prénom} {student.nom}</td>
                      <td>{student.sex}</td>
                      <td>{student.telephone}</td>
                      <td>{student.niveau}</td>
                      <td>{student.montant}</td>
                      <td><i class="fa-solid fa-pen text-success"></i>
                        <i class="fa-solid fa-trash text-danger m-3"></i></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <AddStudent />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
