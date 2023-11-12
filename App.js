//const heading = React.createElement("h1",{id:"head"}, "Hello World in React")


{/* <div id="container">
    <div><
        <h1>Hello nested </h1>
        <h1>Hello nested 2 </h1>
        /div>
    </div> */}

 const heading = 
  React.createElement("div" , {id:'container'} ,
  React.createElement("div" ,{}, 
  [React.createElement("h1" , {}, "Hello from nested React js"), React.createElement("h1", {} , "Hello nested 2")]))

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)