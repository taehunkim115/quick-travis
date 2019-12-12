import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import Restaurant from './Restaurant';

test('Restaurant card displays restaurant correctly', () => {

    const restaurant = {
          key: "4",
          restaurant: {
            "name": "Koi",
            "type": "Japanese",
            "price": 20,
            "hours": "1100-2100",
            "tables": [1, 2, 1, 1],
            "happy_hour": true,
            "good_for_clients": true,
            "family_friendly": false,
            "team_bonding": true
          },

          selectedRestaurants: [],
          setSelectedRestaurants: () => {}
        }

    render(<Restaurant {...restaurant}/>)
})