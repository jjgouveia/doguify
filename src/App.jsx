import { useState } from 'react';
import './App.css'
import { desdoguinhofy, doguinhofy } from './doguify/engine';

function App () {

  const [engine, setEngine] = useState ('');


  const handleEngine = ({ target }) => {
    const method = document.querySelector(".method")
    method.innerHTML = `Traduzindo do ${target.textContent}`;
    setEngine(target.name);
  }

  const createResult = (engine) => {

    const resultText = document.querySelector('.resultText');

    if (resultText) {
      resultText.remove()
    }

    const resultado = document.querySelector(".resultado");
    const textContainer = document.createElement('p');
    textContainer.className = "resultText";
    resultado.appendChild(textContainer).innerHTML = engine;
  }


  const handlerOption = (e) => {

    e.preventDefault();


    const text = document.querySelector('textarea').value;

    const target = engine === 'doguificar' ? doguinhofy(text) : desdoguinhofy(text);

    createResult(target)
  }

  return (
    <div className="App">
      <header>
        <h1>Doguify</h1>
          <div className='caramelo-pic'></div>
      </header>
      <main className='container'>
        <form action="texto" onSubmit={(e) => handlerOption(e)}>
        <p className='method'>Selecione um método de tradução</p>
          <label htmlFor="texto"></label>
          <textarea name="texto" placeholder='Digite um texto' required></textarea>
          <div className='btn-div'>
            <div className='btn-group'>
              <button name='doguificar' type='button' onClick={handleEngine}>
                Humanês ➡️ Doguês
              </button>
              <button name='desdoguificar' type='button' onClick={handleEngine}>
                Doguês ➡️ Humanês 
              </button>
            </div>
            <button type="submit">
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
