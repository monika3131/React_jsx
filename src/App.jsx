import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
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

function App() {
  // code here
  let data = imageData();
  return (
    <>
      <h1> Kalvium Gallery</h1>
      <div className="gallery">
        {data.map((elem) => {
          return <img src={elem.img} className="image" key={elem.id}></img>;
        })}
        <small>
          <p>With ❤️ by Sarvesh</p>
        </small>
      </div>
    </>
  );
}

export default App;
