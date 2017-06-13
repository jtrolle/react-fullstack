import About from './containers/About';
import Home from './containers/Home';
import SignupPage from './containers/signup/SignupPage';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/signup',
        component: SignupPage,
        exact: true
    }
]