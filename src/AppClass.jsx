import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
render(){
  this.data=this.imageData()
  let galleryStyle = {
    textAlign:"center"
  }
  let divStyle = {
    padding:"50px",
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    placeItems : "Center",
    gap:"50px"
  }
  return(
    <>
    <h1 style={galleryStyle}>Kalvium Gallery</h1>
    {/* <div style={divStyle}>
      <img src={data[0].img} width={"500px"} height={"350px"} />
      <img src={data[1].img} width={"500px"} height={"350px"} />
      <img src={data[2].img} width={"500px"} height={"350px"} />
      <img src={data[3].img} width={"500px"} height={"350px"} />
    </div> */}
    <div style={divStyle}>
      {this.data.map((el)=>(
        <div key={el.id}>
          <img src={el.img} width={"680px"} height={"400px"}/>
        </div>
      ))}
    </div>
    </>
  )
}
  // code here
}
