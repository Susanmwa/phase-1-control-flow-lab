function scuberGreetingForFeet(distance){
  // Write your code here!
  let response;
  
  if (distance <= 400) {
    response = 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    response = 'No can do.';
  }
  
  return response;
 }
  function ternaryCheckCity(city) {
    let response;
    if (city === 'NYC') {
    response = "Ok, sounds good." ;}
    else if (city !== 'NYC') {
    response = "No go.";}
    return response;
    }
    function switchOnCharmFromTip(tip){
      let response;
      if (tip === "generous"){
        response = "Thank you so much." ;
      }
      else if (tip !== "generous"){
        response = "Thank you.";
      }
      else  {
        response = 'Bye.';
      }
    return response;
    }

  
  


