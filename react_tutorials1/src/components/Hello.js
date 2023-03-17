import React from "react";

// const hello = () => <h3>Hello sachin</h3>
// export const greet = () => <h4>how are you</h4>
// export default hello

// const Hello = ()=>{
//     return React.createElement(
//         'div',
//         {id:'hello',className:'helloclass'},
//         React.createElement('h1',null,'Hello sachin ')
//     )
// }

const Hello = ({ name, heroname, children }) => {
  //console.log(props)
  return (
    <div>
      <h1>
        Hello {name} aka {heroname}
      </h1>
      {children}
    </div>
  );
};

export default Hello;
