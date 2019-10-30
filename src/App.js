import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import './App.css';
import RestaurantList from './components/RestaurantList';
import firebase from 'firebase/app';
import 'firebase/database';
 
const firebaseConfig = {
  apiKey: "AIzaSyDVtP9EC9kWtlGo1RR_CVutxoRDv29mb7A",
  authDomain: "quick-travis.firebaseapp.com",
  databaseURL: "https://quick-travis.firebaseio.com",
  projectId: "quick-travis",
  storageBucket: "quick-travis.appspot.com",
  messagingSenderId: "655216562924",
  appId: "1:655216562924:web:d27d1f01102e0368b50bc9"
};

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
    gridList: {
    width: "100%",
    height: 700,
  },
  card:{
    margin: 20,
  }
}));



const App = ({}) => {
  const [restaurants, setRestaurants] = useState({restaurants: []});
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const url = '/data/restaurants.json';
  const filteredUrl = '/data/restaurantsFiltered.json';

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setRestaurants(json);
    }
    fetchRestaurants();
    // fetchFilteredRestaurants();
  }, []);
  
  const classes = useStyles();

  return (
    <React.Fragment>
        <RestaurantList restaurants={restaurants.restaurants}
                        selectedRestaurants={selectedRestaurants}
                        setSelectedRestaurants={setSelectedRestaurants}/>
    </React.Fragment>
  );
}

export default App;