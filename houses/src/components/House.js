import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomID) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomID)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => {
        return updateHouse({ ...house, rooms: [...house.rooms, room] })
    };

    const rooms = () => {
        <ul>
            {house.rooms.map((room, index) => {
                <><li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                </li><button onClick={() => deleteRoom(room._id)}>Delete</button></>
            })}
        </ul>
    };

    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom}/>
        </div>
    );
}