import React, { Component } from "react";
import "./css/main.css";
import { addStudent } from "./.env";


class AddStudent extends Component {
  state = {
    prenom: "",
    nom: "",
    sex: "",
    adresse: "",
    telephone: "",
    montant: "",
    niveau: "",
    students: [],
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveStudent = async (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const prenom = this.state.prenom;
    const nom = this.state.nom;
    const sex = this.state.sex;
    const adresse = this.state.adresse;
    const telephone = this.state.telephone;
    const montant = this.state.montant;
    const niveau = this.state.niveau;
    addStudent({ id, prenom, nom, sex, adresse, telephone, montant, niveau });
    window.location.href='/'
  };
  render() {
    return (
      <div className="AddStudent">
        <div className="page-wrapper">
          <div className="wrapper wrapper--w850">
            <div className="card card-5">
              <div className="card-heading bg-info">
                <h4 className="title">Ajouter Un Etudiant</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveStudent}>
                  <div className="form-row">
                    <div className="name">Prenom & Nom</div>
                    <div className="value">
                      <div className="row row-space">
                        <div className="col-6">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5"
                              type="text"
                              name="prenom"
                              onChange={this.handleInput}
                              value={this.state.name}
                            />
                            <label className="label--desc">Prénom(s)</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5"
                              type="text"
                              name="nom"
                              onChange={this.handleInput}
                              value={this.state.name}
                            />
                            <label className="label--desc">Nom</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Genre</div>
                    <div className="value">
                      <div className="row row-refine">
                        <div className="col-6">
                          <div className="input-group-desc">
                            <div className="p-t-5 ">
                              <label className="radio-container m-r-55">
                                H
                                <input
                                  type="radio"
                                  name="sex"
                                  onChange={this.handleInput}
                                  value="H"
                                />
                                <span className="checkmark"></span>
                              </label>
                              <label className="radio-container">
                                F
                                <input
                                  type="radio"
                                  name="sex"
                                  onChange={this.handleInput}
                                  value="F"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Adresse & Tél</div>
                    <div className="value">
                      <div className="row row-refine">
                        <div className="col-6">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5"
                              type="text"
                              name="adresse"
                              onChange={this.handleInput}
                              value={this.state.name}
                            />
                            <label className="label--desc">Adresse</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5"
                              type="text"
                              name="telephone"
                              onChange={this.handleInput}
                              value={this.state.name}
                            />
                            <label className="label--desc">
                              Numéro de téléphone
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row m-b-55">
                    <div className="name">Niveau</div>
                    <div className="value">
                      <div className="row row-refine">
                        <div className="col-6">
                          <div className="input-group-desc">
                            <select
                              className="form-select input--style-5"
                              name="niveau"
                              onChange={this.handleInput}
                              value={this.state.name}
                            >
                              <option selected>Niveau</option>
                              <option>licence 1</option>
                              <option>licence 2</option>
                              <option>licence 3</option>
                              <option>Master 1</option>
                              <option>Master 2</option>
                            </select>

                            <label className="label--desc">
                              Niveau universitaire
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5"
                              type="number"
                              min={25000}
                              max={75000}
                              step={25000}
                              name="montant"
                              onChange={this.handleInput}
                              value={this.state.name}
                            />
                            <label className="label--desc">Montant</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="float-right">
                    <button
                      className="btn btn--radius-2 btn-info"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;
