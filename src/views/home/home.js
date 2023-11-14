import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div class="container">
      <h2>Bem-vindo ao Calculo de Médias</h2>

      <div class="flex row">
        <button onClick={() => navigate("/calculator")} id="b1">
          Calcular Média
        </button>
        <button onClick={() => navigate("/list")} id="b2">
          Visualizar Médias Calculadas
        </button>
      </div>

      <div id="resp"></div>
    </div>
  );
}
