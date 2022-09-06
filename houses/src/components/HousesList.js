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
    }
}