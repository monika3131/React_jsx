import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ]
  return data;
}

function App() {
  const imagesData = imageData();

  return (
    <div className="App">
      <div class="header">
        <h1>Image Gallery</h1>
      </div>

      <div className="image-container">
        {imagesData.map((item) => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
