import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <div className={s.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
