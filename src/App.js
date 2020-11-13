import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

const initialFormValues = {
  name: '',
  email: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    beef: false,
    chicken: false,
    onion: false,
    bacon: false,
    canadianBacon: false,
    spinach: false,
    greenPepper: false,
    mushrooms: false,
    pineapple: false,
    anchovies: false,
    extraCheese: false,
  },

  specialInstructions: '',

};

const initialFormErrors = {
  name: '',
  email: '',
  size: '',
  noToppings: '',
  specialInstructions: '',
};



const App = () => {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(response => {
      console.log(response.data)
      setOrders([...orders, response.data])
      console.log(orders)
    })
    .catch(error => {
      console.log(error, 'error')
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }
  
  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(success => {
      setFormErrors({
        ...formErrors,
        [name]: "",
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors [0],
        })
      })
      
      setFormValues({
          ...formValues,
          [name]: value,
      })
    }
  

  const checkboxChange = (name, checked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const formSubmit = () => {
    let array = Object.keys(formValues.toppings);
    console.log(formValues.toppings);
    let newArray = array.map(item => formValues.toppings[item])

    const newPizzaOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size,
      specialInstructions: formValues.specialInstructions,
      toppings: Object.keys(formValues.toppings).filter(item => formValues.toppings[item]),
    }
    console.log(newPizzaOrder)
    postNewOrder(newPizzaOrder)
  }


  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/pizza' className= 'orderPizza' id='navOrder'>Get Pizza</Link>
      </div>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizza'>
        <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={formSubmit}

        />

      </Route>

    </>
  );
}
export default App;
