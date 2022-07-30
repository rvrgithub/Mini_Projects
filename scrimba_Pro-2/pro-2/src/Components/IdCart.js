import React from "react";
import "./idcart.css"
export const  IdCart=()=>{
    const myImg= "myId.jpeg"

    const links= [{link:"",},
    {link:"",},
    {link:"",},
    {link:"",},
    {link:"",}
          ]
return (
    <main className="cart-div">
<img src={myImg}/>
<div className="small-div">
    <p className="title">Radhika</p>
    <p>Frontend Devloper</p>
    <div className="button">
    <div className="email"></div>
    <div className="linkedin"></div>
    </div>

    {/* footer part............ */}
  <div className="footer"></div>
</div>
    </main>
)
}