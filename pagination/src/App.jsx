import { useEffect, useState } from "react";
import Images from "./components/Images";
import Card from "./components/Card";

function App() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
      response.json().then((data) => {
        setImage(data);
        setLoading(true);
        // console.log(data);
      })
    );
  }, [loading]);

  return (
    <div className="container">
      <Card data={image} />
    </div>
  );
}

export default App;
