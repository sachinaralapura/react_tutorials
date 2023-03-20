import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const onChangeHandler = (elem) => {
    setName({ ...name, [elem.target.name]: elem.target.value });
  };
  //console.log(name.firstName,name.lastName);
  return (
    <div>
      {/* <h3>{JSON.stringify(name)}</h3> */}
      <h3>FirstName : {name.firstName}</h3>
      <h3>LastName : {name.lastName}</h3>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={onChangeHandler}
        ></input>
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={onChangeHandler}
        ></input>
      </form>
    </div>
  );
}

export default HookCounter3;
