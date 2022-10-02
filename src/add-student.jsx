import React, { Component } from "react";
import "./css/main.css";

class AddStudent extends Component {
  render() {
    return (
      <div className="AddStudent">
        <div class="page-wrapper">
          <div class="wrapper wrapper--w790">
            <div class="card card-5">
              <div class="card-heading bg-info">
                <h4 class="title">Ajouter Un Etudiant</h4>
              </div>
              <div class="card-body">
                <form method="POST">
                  <div class="form-row">
                    <div class="name">Prenom & Nom</div>
                    <div class="value">
                      <div class="row row-space">
                        <div class="col-6">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              type="text"
                              name="first_name"
                            />
                            <label class="label--desc">Prénom(s)</label>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              type="text"
                              name="last_name"
                            />
                            <label class="label--desc">Nom</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="name">Genre</div>
                    <div class="value">
                      <div class="row row-refine">
                        <div class="col-6">
                          <div class="input-group-desc">
                            <div class="p-t-5 ">
                              <label class="radio-container m-r-55">
                                H
                                <input type="radio" name="exist" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="radio-container">
                                F
                                <input type="radio" name="exist" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="name">Adresse & Tél</div>
                    <div class="value">
                      <div class="row row-refine">
                        <div class="col-6">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              type="text"
                              name="area_code"
                            />
                            <label class="label--desc">Adresse</label>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              type="text"
                              name="phone"
                            />
                            <label class="label--desc">
                              Numéro de téléphone
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row m-b-55">
                    <div class="name">Niveau</div>
                    <div class="value">
                      <div class="row row-refine">
                        <div class="col-6">
                          <div class="input-group-desc">
                            <select class="form-select input--style-5">
                              <option selected>Niveau</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>

                            <label class="label--desc">
                              Niveau universitaire
                            </label>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              type="number"
                              min={25000}
                              max={75000}
                              step={25000}
                              name="phone"
                            />
                            <label class="label--desc">Montant</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="float-right">
                    <button class="btn btn--radius-2 btn-info" type="submit">
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
