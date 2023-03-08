import React from "react";
function NameList() {
  const Names = [
    "Hugh Jass",
    "Mike Hawk",
    " Ben Dover",
    " Peter File",
    "Chris Peacock",
    " Heywood Jablowme",
    "Wilma Diqfit",
    "Nick Gah",
    "Dixie Normous",
  ];
  const person = [
    { id: 1, name: "sachin", age: 22 },
    { id: 2, name: "rohit", age: 23 },
    { id: 3, name: "kohli", age: 25 },
  ];
  const namelist = Names.map((name) => <h2>{name}</h2>);
  const personlist = person.map((person) => (
    <h2>
      I am {person.name}. I am {person.age} years old and my id is {" "}
      {person.id}
    </h2>
  ));
  return (
    <div>
      {personlist} {namelist}
    </div>
  );
}
export default NameList;
