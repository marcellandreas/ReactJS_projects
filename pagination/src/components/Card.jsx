import { useState } from "react";
import Pagination from "./Pagination";

const Card = (props) => {
  const { data } = props;
  const [currentItems, setcurrentItems] = useState(data);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="cards">
        {currentItems.map((data, index) => {
          return (
            <div className="card" key={index}>
              {/* Header */}
              <img src={data.url} alt="" />
              <p className="text-name">{data.title}</p>
            </div>
          );
        })}
      </div>
      <Pagination
        data={data}
        setcurrentItems={setcurrentItems}
        currentItems={currentItems}
        loading={loading}
      />
    </>
  );
};

export default Card;
