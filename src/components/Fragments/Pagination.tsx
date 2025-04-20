import { ArrowArcLeft, ArrowArcRight } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";
import { DataPagination } from "../../interfaces/models/IDataPagination";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  dataPagination: DataPagination;
}

const Pagination = (props: PaginationProps) => {
  const { page, setPage, dataPagination } = props;
  const totalPage = dataPagination.last_visible_page;

  const handleNextPage = () => {
    if (page > totalPage! - 1) return false;
    setPage((prevState) => prevState + 1);
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    if (page < 2) return false;
    setPage((prevState) => prevState - 1);

    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <div className="my-10 flex items-center gap-4 text-white">
      <button
        className={`${page < 2 ? "cursor-not-allowed bg-indigo-900" : "cursor-pointer"} shadow-md" rounded-md bg-indigo-500 p-3 font-semibold`}
        onClick={handlePrevPage}
      >
        <ArrowArcLeft size={20} />
      </button>
      <p>
        {page} of {totalPage}
      </p>
      <button
        className={`${page > totalPage! - 1 ? "cursor-not-allowed bg-indigo-900" : "cursor-pointer"} shadow-md" rounded-md bg-indigo-500 p-3 font-semibold`}
        onClick={handleNextPage}
      >
        <ArrowArcRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
