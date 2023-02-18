import { Routes, Route } from 'react-router-dom'
import './App.css'
import CityMap1 from './ui/screens/CityMap1'
import CityMap2 from './ui/screens/CityMap2'
import Work from './ui/screens/Work'

function App() {
  return (
    <Routes>
      <Route path="/city1" element={<CityMap1 />} />
      <Route path="/city2" element={<CityMap2 />} />
      <Route path="/work" element={<Work />} />
      {/* <div className="App">
      <h1>Test</h1>
    </div> */}
    </Routes>
  )
}

export default App
