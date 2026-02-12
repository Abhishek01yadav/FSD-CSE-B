import React from 'react'
import{BrowserRouter,Route,Routes} from'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/login' element={<h1>LoginPage</h1>} />
        <Route path='/register' element={<h1>RegisterPage</h1>} />
        <Route path='/cart' element={<h1>cart</h1>} />
       </Routes>

      </BrowserRouter>
    </div>
  )
}
export default App