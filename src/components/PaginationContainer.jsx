import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation(); // Yangi qo'shilgan qism

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const navigate = useNavigate(); // 'Navigate' o'rniga 'useNavigate' ishlatildi

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`); // 'Navigate' ishlatildi va toString metodi ishlatildi
  };

  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item "
          onClick={() => {
            let prevPage = pageCount - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base border-base-300 " : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item "
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer;
