function Greetings({ lang, children }) {
  // here we have our land and children props being passed. we identify the specific props
  //we are passing in our function because its cleaner and allows for more effecient
  // coding. these two props are being imported as an object so we identify is as such

  if (lang == 'de') {
    // here we set up our simple parameter. if(lang='de) we return <div> Hallo {children}</div>

    return <div className="box">Hallo {children}</div>;
    //   children is the inherited text where greetings is called.
  } else {
    return <div className="box">Bonjuor {children}</div>;
  }
}
export default Greetings;
