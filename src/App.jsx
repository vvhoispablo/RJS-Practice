import './App.css'
import './components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='container'>
      <navBar />
      <ItemListContainer greeting={"Under Construction"}/>

    </div>
  )
}

export default App