import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {    if (pageCount <= 1) {
        return null; // Sayfa sayısı 1 veya daha azsa sayfalama göstermeyin
    }


  return (

    <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={'flex justify-center mt-4'}
          pageClassName={'mx-1 px-3 py-2 border rounded-lg hover:bg-gray-200'}
          activeClassName={'bg-blue-500 text-white'}
          previousClassName={'mx-1 px-3 py-2 border rounded-lg hover:bg-gray-200'}
          nextClassName={'mx-1 px-3 py-2 border rounded-lg hover:bg-gray-200'}
          disabledClassName={'opacity-50 cursor-not-allowed'}

    />
  );
};

export default Pagination;