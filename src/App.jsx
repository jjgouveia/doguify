import './App.css'

function App () {

  return (
    <div className="App">
      <header>
        <h1>Doguify</h1>
      </header>
      <main>
        <form action="texto">
          <label htmlFor="texto"></label>
          <textarea name="texto" id="doguificar"></textarea>
          <div>
            <button type="submit">
              <span>
                Doguify!
              </span>
            </button>
          </div>
        </form>
        <div className=''>

        </div>
      </main>
    </div>

  )
}

export default App
