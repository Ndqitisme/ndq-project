import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import MainLayout from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Config routes for publicPage, can still access without an account
            Cấu hình routes cho trang công khai, có thể truy cập mà không cần đăng nhập*/}
                    {publicRoutes.map((route, index) => {
                        let Layout = MainLayout;
                        const Page = route.component;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/* Config routes for privatePage, an account is required to access 
            Cấu hình routes cho trang cá nhân, cần có tài khoản mới có thể truy cập*/}
                    {privateRoutes.map((route, index) => (
                        <Fragment></Fragment>
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
