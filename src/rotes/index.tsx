import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Category } from '../pages/Category';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:type/:id" element={<Details />} />
                <Route path="/category/:type" element={<Category />} />
            </Routes>
        </BrowserRouter>
    );
}
