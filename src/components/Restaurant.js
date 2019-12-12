import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import imgURL from '../images/rest1.jpg';
import Chip from '@material-ui/core/Chip';
 
const Restaurant = ({key, restaurant, selectedRestaurants, setSelectedRestaurants}) => {
    // const {name, price, tables, type} = this.props
    
    const [btnToggle, toggleBtn] = useState(false);
    const [btnColor, setBtnColor] = useState("default");
  
    const handleClick = () => {
      const btnToggleState = !btnToggle;
      if (btnToggle) {
        setBtnColor("default");
        const new_selectedRestaurants = selectedRestaurants.filter(r => r.name  !== restaurant.name);
        setSelectedRestaurants(new_selectedRestaurants);
      }
      else {
        setBtnColor("primary");
        const new_selectedRestaurants = selectedRestaurants.concat([restaurant]);
        setSelectedRestaurants(new_selectedRestaurants);
      }
      toggleBtn(btnToggleState);
    }
  
    return(
      <div data-cy="restaurant" className="restaurant-card">
       <Grid container spacing={3}>
        <Grid item xs={8}>
     <h2 data-cy="restaurantname">{restaurant.name}</h2>
     
     <h5>{restaurant.price} Lunch, Dinner Available Table Sizes: {restaurant.tables.map(size => <span>{size}, </span>)}</h5>
     <type>{restaurant.type}</type>
     <vegan>Vegan</vegan>
     <gltfree>Gluton Free</gltfree>
    </Grid>
    
    <Grid item xs={3}>
  <img src={imgURL}/>
  <Chip data-testid="addtolist" data-cy="addtolist" label="Add to list" clickable color={btnColor} onClick={handleClick}/>
  </Grid>
  
  </Grid>
  
  </div>
  )}

  export default Restaurant;