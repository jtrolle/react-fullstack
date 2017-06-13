import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import routes from '../routes';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </div>
        );
    }
}

export default App;