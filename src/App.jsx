
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Poems from './pages/Poems';
import Authors from './pages/Authors';
import Categories from './pages/Categories';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
