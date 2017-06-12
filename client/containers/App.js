import React from 'react';
import NavigationBar from '../components/NavigationBar';

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar />
            </div>
        );
    }
}