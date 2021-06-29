import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyLableClass from "./components/MyLableClass";
import MyLableFunction from "./components/MyLableFunction";
import MyUserRegistration from "./components/MyUserRegistration";
import MyRegistration from "./components/MyRegistration";
import MyNewReg from "./components/MyNewReg";

function App() {
  const dte = new Date(2000, 4, 4);
  const value = dte.toISOString();
  const users = [
    {id:1,name:"test2"},
    {id:2,name:"test3"},
    {id:3,name:"test4"},
  ];

  const ssusers = [
    {id:2,name:"Prabha"},
    {id:3,name:"Komala"},
    {id:4,name:"Mahe"},
  ];

  const labelName = "SomeLabelName";

  return (
    <div>
      {/* <h1 className="header">My First React on {value}</h1> */}
      {/* <hr />
      <MyLabelClass />
      <hr />
      <MyLabelFunction data={users} ts={dte} ln={labelName}/>
      <hr />
      <MyLabelFunction data={ssusers} ts={dte} ln={labelName}/> */}

      {/* <MyUserRegistration/> */}

      {/* <MyRegistrationClass/> */}
      <MyNewReg/>
    </div>
    //React.createElement("div",{},React.createElement("h1",{className:'header'},"My First React-".concat(value)))
  );
}

export default App;
