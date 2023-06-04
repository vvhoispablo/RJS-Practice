import './App.css'
import './Components/2NavBar/navBar'
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