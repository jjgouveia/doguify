import { useState } from 'react';
import './App.css'
import { desdoguify, doguify } from './doguify/engine';
import Header from './components/Header';
import Footer from './components/Footer';

function App () {

  const [engine, setEngine] = useState('');
  const [copy, setCopy] = useState(false);
  const [handleCopy, setHandleCopy] = useState(false);
  const [text, setText] = useState('');
  const [method, setMethod] = useState(false);

  function verifyResultArea() {
    const resultText = document.querySelector('.resultado').textContent;
    if(resultText.length) {
      setHandleCopy(true)
    }
  }

  const onChangeTextArea = ({ target }) => {
    setText(target.value);
  }

  const clipboard = () => {
    setCopy(true);
    const resultText = document.querySelector('.resultado').textContent;
    navigator.clipboard.writeText(resultText);
  }

  const handleEngine = ({ target }) => {

    setMethod(true);
    
    const method = document.querySelector(".method")
    const trad = document.querySelector(".traducao");
    method.innerHTML = `Traduzindo do ${target.textContent}`;
    
    target.name === 'doguificar' ? trad.innerHTML = 'Como o doguinho diria:' : trad.innerHTML = 'O que o doguinho quis dizer:';
    setEngine(target.name);
  }

  const createResult = (engine) => {
    const resultado = document.querySelector(".resultado");

    if (resultado) {
      resultado.innerHTML = '';
    }
    resultado.innerHTML = engine

    verifyResultArea()

  }


  const handlerOption = (e) => {
    e.preventDefault();

    setCopy(false);

    const text = document.querySelector('textarea').value;
    const target = engine === 'doguificar' ? doguify(text) : desdoguify(text);
    createResult(target)
  }

  return (
    <div className="App">
    
      <main className='container'>
        <Header />
        <form action="texto" onSubmit={(e) => handlerOption(e)}>
          <label htmlFor="texto"></label>
          <p className='description'>
            Traduza do humanês 👩🏾‍🦱para o cachorrês 🐶 e vice-versa e converse com o seu doguinho.
          </p>
          <textarea
          name="texto"
          placeholder='Digite alguma coisa para que a nossa equipe canina possa verificar'
          required
          onChange={ onChangeTextArea }>
          </textarea>
          <div className='btn-div'>
            <p className='method'>Selecione um método de tradução 📍</p>
            <div className='btn-group'>
              <button name='doguificar' type='button' onClick={handleEngine}>
                Humanês ➡️ Doguês
              </button>
              <button name='desdoguificar' type='button' onClick={handleEngine}>
                Doguês ➡️ Humanês
              </button>
            </div>
            <button type="submit" className='doguify' disabled={!method || !text.length}>
              <span>
                Doguify! 🐕
              </span>
            </button>
          </div>
        </form>
          <label htmlFor="resultado"></label>
          <p className='traducao'>💭</p>
        <textarea className='resultado' name="resultado" disabled placeholder='Nossa I.A canina vai responder aqui.' onChange={ onChangeTextArea }></textarea>
        <button className='copy-btn' onClick={clipboard} disabled={ !handleCopy }>
          { !copy ? 'Copiar tradução 📋' : 'Copiado ✔️' }
        </button>
      </main>
     <Footer />
    </div>
  )
}

export default App


