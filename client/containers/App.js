import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import FlashMessagesList from '../components/flash-messages/FlashMessagesList';
import NavigationBar from '../components/NavigationBar';
import routes from '../routes';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <FlashMessagesList />
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