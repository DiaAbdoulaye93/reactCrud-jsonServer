import './App.css';
import React, { Component } from 'react';

import { environment, deleteUser } from './.env';
import { Link } from 'react-router-dom';


class StudentList extends Component {
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
  deleteData(id) {
    deleteUser(id);
    this.getFetchUsers();
  }
  componentDidMount() {
    this.getFetchUsers();

  }

  render() {
    const {
      students,
    } = this.state;
    return (

      <div className="m-3">
        <div className="float-right shadow-lg">
        <Link to="/add-student"><button className="btn btn--radius-2 btn-info mb-2">Nouvel etudiant <i class="fa-solid fa-user-plus"></i></button></Link>
        </div>
        <div className='table'>
          <table className="table shadow-lg">
            <thead className="bg-info">
              <tr>
                <th>prenom & Nom</th>
                <th>Sex</th>
                <th>Adresse</th>
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
                  <td>{student.adresse}</td>
                  <td>{student.telephone}</td>
                  <td>{student.niveau}</td>
                  <td>{student.montant}</td>
                  <td> <Link to={`/edit/${student.id}`}><i className="fa-solid fa-pen text-success" ></i></Link>
                    <i className="fa-solid fa-trash text-danger m-3" onClick={() => this.deleteData(student.id)}></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}
export default StudentList;
