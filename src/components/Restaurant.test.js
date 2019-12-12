import React from 'react';
import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import Restaurant from './Restaurant';

afterEach(cleanup)

// test('Restaurant card displays restaurant correctly', () => {

//     const restaurant = {
//           key: "4",
//           restaurant: {
//             "name": "Koi",
//             "type": "Japanese",
//             "price": 20,
//             "hours": "1100-2100",
//             "tables": [1, 2, 1, 1],
//             "happy_hour": true,
//             "good_for_clients": true,
//             "family_friendly": false,
//             "team_bonding": true
//           },

//           selectedRestaurants: [],
//           setSelectedRestaurants: () => {}
//         }
        

//     const {cont, getByTestId} = render(<Restaurant {...restaurant}/>)
//     fireEvent.click(getByTestId("addtolist"));
//     expect(getByTestId('addtolist').hasAttribute('color'))
//     expect(getByTestId('addtolist').classList.contains('MuiChip-colorPrimary'))
// })

test('Restaurant component button should change color when clicked', () => {
  //create some props to pass in
  const props = 
  {
      key: 1, 
      restaurant: {
          "name": "Koco Table",
          "type": "Korean",
          "price": 14,
          "hours": "1100-2100",
          "tables": [1, 2, 1, 1],
          "happy_hour": false,
          "good_for_clients": true,
          "family_friendly": true,
          "team_bonding": true
      }, 
      selectedRestaurants: [], 
      setSelectedRestaurants: () => {} 
  }

  const {cont, getByTestId} = render(<Restaurant {...props} />)
  //click the button
  getByTestId('addtolist').click()
  //make sure the button contains the attribute for color
  expect(getByTestId('addtolist').hasAttribute('color'))
  //make sure the button contains the class for primary color, which should show up after a click
  expect(getByTestId('addtolist').classList.contains('MuiChip-colorPrimary'))
  //make sure the button does not contain the class for default color, which should only be before a click
  expect(!getByTestId('addtolist').classList.contains('MuiChip-colorDefault'))
})