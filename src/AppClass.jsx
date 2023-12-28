import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };
  // code here
  render() {
    let image_arr = this.imageData();
    return (
      <>
        <h1> Kalvium Gallery</h1>
        <div className="gallery">
          {image_arr.map((elem) => {
            return <img src={elem.img} className="image" key={elem.id}></img>;
          })}
          <small>
            <p>With ❤️ by Sarvesh</p>
          </small>
        </div>
      </>
    );
  }
}
