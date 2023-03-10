import React from "react";

function Person({person}) {
   
  return (
    <div>
      <li>
        I am {person.name}. I am {person.age} years old and my id is {person.id}
      </li>
    </div>
  );
}

export default Person;
