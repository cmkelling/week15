import React from 'react';
import { House } from './house';
import { housesApi } from '../rest/housesAPI.js';

export class HousesList extends React.Component {
    state = {
        houses: []
    }

    componentDidMount () {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse)=> {
        await houses.put(updatedHouse);
        this.fetchHouses();
    };

    render() {
        return(
            <div className='house-list'>
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}