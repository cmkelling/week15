import React, { Component, component } from 'react';
import { HousesList } from './components/HousesList';

class App extends Component {
    render() {
        return (
            <div>
                <HousesList props = {{test: data}}/>
            </div>
        )
    }
}

export default App