import React from "react";

const MyLableFunction = ({ data, ln, ts }) => {
  console.log("I am in MyLableFunction Component");
  console.log(data);
  console.log(ts);
  console.log(ln);

  let response = "";
  let b = false;
  if (b){
    response = (
              <div>
                <h1>The Final Response is ...</h1>
                <div>The value is true</div>
              </div>
              )
  } else {
    response = (
          <>
            <h1>The Final Response is ...</h1>
            <div>The value is False</div>
          </>
    )
  }
  return (
    <div>
      <h2>I am from Child Component - Function</h2>
      {data.map((x) => {
        return (
          <div>
            <h1>{x.id}</h1>
            <h1>{x.name}</h1>
          </div>
        );
      })}
      <div>
        {response}
      </div>
    </div>
  );
};

export default MyLableFunction;