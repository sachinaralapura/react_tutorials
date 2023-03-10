import React from "react";
import Person from "./Person";
function NameList() {
  const Names = [
    "Hugh Jass",
    " Peter File",
    "Chris Peacock",
    " Heywood Jablowme",
    "Wilma Diqfit",
    "Nick Gah",
    "Wilma Diqfit",
    "Nick Gah",
    "Dixie Normous",
  ];
  const persons = [
    { id: 1, name: "sachin", age: 22 },
    { id: 2, name: "rohit", age: 23 },
    { id: 3, name: "kohli", age: 25 },
  ];
  const namelist = Names.map((name, index) => (
    <li key={index}>
      {name}
      {index}
    </li>
  ));
  const personlist = persons.map((per) => (
    <Person key={per.id} person={per}></Person>
  ));
  return (
    <div>
      {personlist}
      {namelist}
    </div>
  );
}
export default NameList;
