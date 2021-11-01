import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      {/* so we get our Id parameters. we know that these are inputs that are props transfered to our components. so we our function input for our component will either be props or we will identify it by name. from our example we know we have a picture on the left side. so we put that first. eveything else will be on the right side so we will place it in a div known by the className 'right' we display flex and css that bitch. */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Francois</Greetings>
      {/* so here we are making an if else statment as our component. we return a greeting depending on the input 'lang'. if lang is x response with y. we also have to keep in mind that we want it to inherit the child text. Essentially, props.children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”. so because we want the component to take the names we identify and give a response based off of the language we speak, we pass thorugh the lang and then we tell the computer to also take the children (the names) as an object for the response. the children allows us to integrate text formed here into our components response.   */}

      <Random min={3} max={50} />
      {/* so we want to input a min and max number. we want to then return a random number between the min and max in a string. so first we must come up with our equation. we will use (Math.floot(Math.random() * max) + min) we use Math.floor to round any numbers we get to avoid a decimal and we use Math.random to choose a number between 0 & 1. we then return a div with box styling containing our random number in the form of `${min} is the min ${max} is the max: Random number is ${Random Number} the values we are wanting to pass from our app.js to our  component are our min and max value. so those are the parameters of our Random component function.  */}
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      {/* si here we have multiple credit cards. we want to have a different styling depending on the type of card we are dealing with. we can create a styles variable that will hold CSS values. we set creditStyles= { backgroundColor={props.bgColor}, color={props.color} }. and then input the styles next to the className with styles={creditStyles} we can also just input   background-color = {props.bgColor} and color= {props.color} mext to the className. I think we may have to import styledComponents */}
    </div>
  );
}

export default App;
