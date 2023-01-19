import './App.css'
import { doguinhofy } from './doguify/engine';

function App () {


  const action = () => {
    const resultText = document.querySelector('.resultText');

    if (resultText) {
      resultText.remove()
    }

    const text = document.querySelector('textarea').value;
    const resultado = document.querySelector(".resultado");
    const textContainer = document.createElement('p');
    textContainer.className = "resultText";
    const doguificar = doguinhofy(text);
    resultado.appendChild(textContainer).innerHTML = doguificar;
  }

  return (
    <div className="App">
      <header>
        <h1>Doguify</h1>
      </header>
      <main className='container'>
        <form action="texto">
          <label htmlFor="texto"></label>
          <textarea name="texto" placeholder='Digite um texto'></textarea>
          <div>
            <button type="button" onClick={action}>
              <span>
                Doguify!
              </span>
            </button>
          </div>
        </form>
        <div className='resultado'>
          <h3>
            O resultado será exibido aqui:
          </h3>
        </div>
      </main>
    </div>

  )
}

export default App
