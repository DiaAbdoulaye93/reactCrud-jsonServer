import React, { useEffect, useState } from "react";
import { getStudent, editData } from "./.env";
import { useParams , useNavigate} from "react-router-dom";

const initialValue = {
  prenom: "",
  nom: "",
  telephone: "",
  sex: "",
  adresse: "",
  niveau: "",
  montant: "",
};

const EditStudent = () => {
  const [data, setData] = useState(initialValue);
  const { prenom, nom, telephone, sex, adresse, niveau, montant } = data;

  const { id } = useParams();
  // const router = useRouter();

  useEffect(() => {
    loadUserData();
  }, []);
  const navigate = useNavigate();
  const loadUserData = async () => {
    const response = await getStudent(id);
    console.log("student", response.data);
    setData(response.data);
  };

  const handleInput = (e) => {
    console.log(e);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editStudent= async (e) => {
    e.preventDefault();
    await editData(id, data);
    navigate('/');
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="wrapper wrapper--w850">
          <div className="card card-5">
            <div className="card-heading bg-info">
              <h4 className="title">Editer Un Etudiant</h4>
            </div>
            <div className="card-body">
              <form onSubmit={editStudent}>
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
                            onChange={(e) => handleInput(e)}
                            value={prenom}
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
                            onChange={(e) => handleInput(e)}
                            value={nom}
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
                                onChange={(e) => handleInput(e)}
                                value={sex}
                                checked={sex === "H"}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="radio-container">
                              F
                              <input
                                type="radio"
                                name="sex"
                                onChange={(e) => handleInput(e)}
                                value={sex}
                                checked={sex === "F"}
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
                            onChange={(e) => handleInput(e)}
                            value={adresse}
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
                            onChange={(e) => handleInput(e)}
                            value={telephone}
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
                            onChange={(e) => handleInput(e)}
                            value={niveau}
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
                            onChange={(e) => handleInput(e)}
                            value={montant}
                          />
                          <label className="label--desc">Montant</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="float-right">
                  <button className="btn btn--radius-2 btn-info" type="submit">
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
};

export default EditStudent;
