import './App.css'
import './components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={"Under Construction"}/>

    </div>
  )
}

export default App