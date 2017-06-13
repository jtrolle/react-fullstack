import Home from './containers/Home';
import About from './containers/About';
import Projects from './components/Projects';
import Studies from './components/Studies';

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
    }
]