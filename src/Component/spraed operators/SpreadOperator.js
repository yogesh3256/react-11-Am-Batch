import React from 'react'

function SpreadOperator() {
    // case  1 :
//   store  first array in second array
    const fullname=['yogesh','wakchaure']
     const biodata=[1,...fullname,21,"male"];
     console.log( fullname);
     console.log(biodata);

//  case 2:
// concanate two arrays in one array
const shootergames=['pubg','call of duty','resident evil'];
const racinggames=['need for speed ','gran turismo','burnout','hill-climb'];
const games=[...shootergames,...racinggames];


// case3
// De structuring array (seperrat kerne)
// first;is predefined becouse it give initial index value


const  hotgames=['need for speed ','gran turismo','burnout','hill-climb'];
 const[ first,...remaining]=hotgames;
 console.log(first);
 console.log(remaining);
 

  return (
    <div>
        
    </div>
  )
}

export default SpreadOperator
