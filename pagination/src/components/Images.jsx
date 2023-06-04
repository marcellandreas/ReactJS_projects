import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props) {
  const { data } = props;
  const [currentItems, setcurrentItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  //   const endOffset = itemsPerPage + itemOffset;
  //   const enteries = Datas.length;
  // pagination
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setcurrentItems(data.slice(itemOffset, endOffset));
    setpageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="images">
        {currentItems.map((image) => {
          return (
            <div className="image">
              <img src={image.url} alt={image.title} />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={`pagination`}
        pageClassName={`page-item`}
        pageLinkClassName={`page-link-data`}
        previousLinkClassName={`page-link`}
        nextLinkClassName={`page-link-next`}
        activeLinkClassName={`active`}
      />
    </>
  );
}
