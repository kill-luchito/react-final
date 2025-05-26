import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import TablaEstudiantes from './components/pages/TablaEstudiantes'

function Router () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element ={<Home/>}></Route>
                <Route path = "/estudiantes" element ={<TablaEstudiantes/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router