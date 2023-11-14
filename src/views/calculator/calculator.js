import "./style.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAverageFinal,
  setAverage,
} from "../../controller/average_controller";

export default function Calculator() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [mediaExercise, setMediaExercise] = useState("");
  const [mediaFinal, setMediaFinal] = useState("");

  const getAverageFinal = (n1, n2, n3, m) => {
    let averagesTotal = (n1 + n2 * 2 + n3 * 3 + m) / 7;

    return averagesTotal.toFixed(2);
  };

  const onTapCalculate = () => {
    let mediaFinal = getAverageFinal(
      Number(n1),
      Number(n2),
      Number(n3),
      Number(mediaExercise)
    );

    setMediaFinal(mediaFinal);

    setAverage(name, n1, n2, n3, mediaExercise, mediaFinal);
  };

  const onTapClear = () => {
    setName("");
    setN1("");
    setN2("");
    setN3("");
    setMediaExercise("");
    setMediaFinal("");
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")} id="b2">
        Voltar
      </button>

      <h2>ES46A-ES61</h2>
      <label>Nome do aluno</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />

      <label>Nota 1</label>
      <input
        type="number"
        name="n1"
        id="n1"
        value={n1}
        onChange={(evt) => setN1(evt.target.value)}
      />

      <label>Nota 2</label>
      <input
        type="number"
        name="n2"
        id="n2"
        value={n2}
        onChange={(evt) => setN2(evt.target.value)}
      />

      <label>Nota 3</label>
      <input
        type="number"
        name="n3"
        id="n3"
        value={n3}
        onChange={(evt) => setN3(evt.target.value)}
      />

      <label>Média dos exercícios</label>
      <input
        type="number"
        name="me"
        id="me"
        value={mediaExercise}
        onChange={(evt) => setMediaExercise(evt.target.value)}
      />

      <button onClick={onTapCalculate} id="b1">
        Calcular
      </button>
      <button onClick={onTapClear} id="b2">
        Limpar
      </button>

      <div id="resp">
        {mediaFinal !== "" && (
          <div>
            <label>{name} suas notas são:</label>
            <br />
            <label> Nota 1: {n1}</label>
            <br />
            <label> Nota 2: {n2}</label>
            <br />
            <label> Nota 3: {n3}</label>
            <br />
            <label> Media Exericios: {mediaExercise}</label>
            <br />
            <label> Media Final: {mediaFinal}</label>
          </div>
        )}
      </div>
    </div>
  );
}
