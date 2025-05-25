import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Category } from '../pages/Category';
import { ProtectedRoute } from './protecteRoute';
import { Auth } from '../pages/Auth';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route
                    path="/"
                    element={ <Home />}
                />
                <Route
                    path="/details/:type/:id"
                    element={
                        <ProtectedRoute>
                            <Details />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/category/:type"
                    element={
                        <ProtectedRoute>
                            <Category />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
