// import { HeaderOnly } from '~/layouts';
import { Home, Following, Upload, Profile, Live } from '~/Pages';
import configs from '~/configs';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.upload, component: Upload, layout: null },
    { path: configs.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
