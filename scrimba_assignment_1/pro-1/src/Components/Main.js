import React  from "react";
import "./Main.css"
export const Main=()=>{
  

    const facts=["Was first released in 2013","Was originally created by Jordan Walke","Has well over 100K stars on GitHub","Is maintained by Facebook","Powers thousands of enterprise apps, including mobile apps"]
return(
 <main>
     <h1 className="main-title">Fun facts about React</h1>
     <div className="main-facts">
              {facts.map(el=>{
return <li>{el}</li>
              })}
            </div>
 </main>
)
}