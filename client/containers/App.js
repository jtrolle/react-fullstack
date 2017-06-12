import React from 'react';
import NavigationBar from '../components/NavigationBar';
import routes from '../routes';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                {routes}
            </div>
        );
    }
}