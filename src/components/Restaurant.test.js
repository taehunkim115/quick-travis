import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Restaurant from './Restaurant';

test('Restaurant card renders correctly', () => {

  let key = "1"
  const restaurant = {
    id: "4",
    name: "Koi",
    type: "Japanese",
    price: 20,
    hours: "1100-2100",
    tables: [1, 2, 1, 1],
    happy_hour: true,
    good_for_clients: true,
    family_friendly: false,
    team_bonding: true
    }

  const selectedRestaurants = []
  const setSelectedRestaurants = jest.fn()

  render(<Restaurant key={key} restaurant={restaurant}
                                           selectedRestaurants={selectedRestaurants}
                                           setSelectedRestaurants={setSelectedRestaurants}/>)
}) 

test('Restaurant card displays restaurant correctly', () => {

  let key = "1"
  const restaurant = {
    id: "4",
    name: "Koi",
    type: "Japanese",
    price: 20,
    hours: "1100-2100",
    tables: [1, 2, 1, 1],
    happy_hour: true,
    good_for_clients: true,
    family_friendly: false,
    team_bonding: true
    }

  const selectedRestaurants = []
  const setSelectedRestaurants = jest.fn()

  const {getByTestId} = render(<Restaurant key={key} restaurant={restaurant}
                                           selectedRestaurants={selectedRestaurants}
                                           setSelectedRestaurants={setSelectedRestaurants}/>)


  expect(getByTestId("restaurant4").textContent).toBe("Koi");
  fireEvent.click(getByTestId("addtolist"));
  expect(setSelectedRestaurants).toHaveBeenCalledWith([restaurant]);
  expect(setSelectedRestaurants).toHaveBeenCalledTimes(1);
}) 

test('Restaurant card add to list button works', () => {

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
        

    const {getByTestId} = render(<Restaurant {...restaurant}/>)
    fireEvent.click(getByTestId("addtolist"));
    expect(getByTestId('addtolist').hasAttribute('color'))
    expect(getByTestId('addtolist').classList.contains('MuiChip-colorPrimary'))
})