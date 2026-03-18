import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Projects from './Pages/Projects'
import MyProjects from './Pages/MyProjects'
import Preview from './Pages/Preview'
import Community from './Pages/Community'
import View from './Pages/View'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/projects/:projectId' element={<Projects />}/>
        <Route path='/projects' element={<MyProjects />}/>
        <Route path='/preview/:projectId' element={<Preview />}/>
        <Route path='/preview/:projectId/:versionId' element={<Preview />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/view/:projectId' element={<View />}/>
      </Routes>
    </div>
  )
}

export default App