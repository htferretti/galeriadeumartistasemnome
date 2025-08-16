import { Routes, Route } from 'react-router-dom';

import Intro from './pages/Intro';
import Galeria from './pages/Galeria';

const GDUASMRoutes = () => (
    <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/galeria' element={<Galeria />} />
    </Routes>
)

export default GDUASMRoutes