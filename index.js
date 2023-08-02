// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun('bathe my dog')); 


function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  console.log(mondayWork('work from home')); 


function wrapAdjective(highlight){
    return function (adjective){
        return "You are " + highlight + adjective + highlight + "!"
    }
}


  const wrappedWithAsterisk = wrapAdjective('*');
  console.log(wrappedWithAsterisk('awesome')); // Output: "You are *awesome*!"
  
  const wrappedWithDoublePipe = wrapAdjective('||');
  console.log(wrappedWithDoublePipe('amazing')); // Output: "You are 