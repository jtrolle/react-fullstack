import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import routes from '../routes';

export default class App extends React.Component {
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
                        routes={route.routes}
                    />
                ))}
            </div>
        );
    }
}