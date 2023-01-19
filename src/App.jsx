import { useState } from 'react';
import './App.css'
import dog from '../public/cachorro.png'
import { desdoguinhofy, doguinhofy } from './doguify/engine';

function App () {

  const [engine, setEngine] = useState('');

  const clipboard = () => {
    const resultText = document.querySelector('.resultText').textContent;
    navigator.clipboard.writeText(resultText);
  }

  const handleEngine = ({ target }) => {
    const method = document.querySelector(".method")
    const trad = document.querySelector(".traducao");
    method.innerHTML = `Traduzindo do ${target.textContent}`;

    target.name === 'doguificar' ? trad.innerHTML = 'Como o doguinho diria:' : trad.innerHTML = 'O que o doguinho quis dizer:';
    setEngine(target.name);
  }

  const createResult = (engine) => {
    const resultText = document.querySelector('.resultText');

    if (resultText) {
      resultText.remove()
    }



    const resultado = document.querySelector(".resultado");
    const textContainer = document.createElement('textarea');
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
    
      <main className='container'>
      <header>
        <div className='header-container'>
          <div className='header-wrapper'>
        <h1>Doguify</h1>
        <img src={ dog } alt="" />
        </div>
        </div>
      </header>
        <form action="texto" onSubmit={(e) => handlerOption(e)}>
          <label htmlFor="texto"></label>
          <p className='description'>
            Traduza do humanês 👩🏾‍🦱para o cachorrês 🐶 e vice-versa e converse com o seu doguinho.
          </p>
          <textarea name="texto" placeholder='Digite alguma coisa para que a nossa equipe canina possa verificar' required></textarea>
          <div className='btn-div'>
            <p className='method'>Selecione um método de tradução</p>
            <div className='btn-group'>
              <button name='doguificar' type='button' onClick={handleEngine}>
                Humanês ➡️ Doguês
              </button>
              <button name='desdoguificar' type='button' onClick={handleEngine}>
                Doguês ➡️ Humanês
              </button>
            </div>
            <button type="submit" className='doguify'>
              <span>
                Doguify! 🐕
              </span>
            </button>
          </div>
        </form>
        <div className='resultado'>
          <h3 className='traducao'>
            Tradução:
          </h3>

        </div>
        <button className='copy-btn' onClick={clipboard}>
          Copiar tradução <i class="bi bi-clipboard-check"></i>
        </button>
      </main>
      <footer>
        Jr Gouveia - 2023 
      </footer>
    </div>

  )
}

export default App


