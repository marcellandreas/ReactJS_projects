import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentItems, setcurrentItems, data, loading }) => {
  //   const { data } = props;
  //   const [currentItems, setcurrentItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const endOffset = itemsPerPage + itemOffset;
  const enteries = data.length;
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
      {loading ? (
        "Loading..."
      ) : currentItems.length === 0 ? null : (
        <div className="menu-pagination">
          <div className="viewPagination">
            Menampilkan {itemOffset + 1} dari {endOffset} | {enteries} Data
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
        </div>
      )}
    </>
  );
};

export default Pagination;
