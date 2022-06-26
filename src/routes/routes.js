import config from '~/config/';
//Import components
import Home from '~/pages/Home';
// import ErrorPage404 from '~/pages/ErrorPage404';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Post from '~/pages/Post';
//Import layouts
// import { ExtraLayout } from '~/layouts';

//Router Không Cần Đăng Nhập Vẫn Xem Được
const publicRoutes = [
    //path: Đường dẫn truy cập
    //component: Thành phần được render
    //layout: Bố cục được sử dụng

    //Main Page
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.profile, component: Profile },

    //Action User
    { path: config.routes.post, component: Post },

    //Routes Other

    //404
    // { path: config.routes.error, component: ErrorPage404, layout: ExtraLayout },
    { path: config.routes.error, component: Home },
];

//Router Cần Đăng Nhập Vào Mới Xem Được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
