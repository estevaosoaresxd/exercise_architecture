import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getAllAverages } from "../../controller/average_controller";

export default function List() {
  const navigate = useNavigate();

  const [averages, setAverages] = useState([]);

  useEffect(() => {
    let allAlveragesSaved = getAllAverages();

    setAverages(allAlveragesSaved);

    console.log(allAlveragesSaved);
  }, []);

  return (
    <div className="container">
      <h2>Listagem de Médias</h2>
      <table id="table">
        <tr>
          <th>Nome</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Média Exercicio</th>
          <th>Média Final</th>
        </tr>
        {averages.map((average) => (
          <tr>
            <td>{average.name}</td>
            <td>{average.n1}</td>
            <td>{average.n2}</td>
            <td>{average.n3}</td>
            <td>{average.m}</td>
            <td>{average.mf}</td>
          </tr>
        ))}
      </table>

      <button onClick={() => navigate("/")} id="b2">
        Voltar
      </button>
    </div>
  );
}
