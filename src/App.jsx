import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import SideBar from './components/SideBar/SideBar'
import Body from './components/BodySection/Body/Body'
function App() {

  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={" 🚧 Under Construction 🚧"}/>
      {/* <SideBar /> */}
      {/* <Body /> */}
    </div>
  )
}

export default App
