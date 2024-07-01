import React from "react";
import classnames from "classnames";
import { usePagination } from "./UsePagination";
import "./pagination.scss";

interface Props {
  onPageChange: (currentPage: number) => void;
  totalCount: number;
  siblingCount?: 1;
  currentPage: number;
  pageSize: number;
  className: string;
  values: string[][];
}

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    values,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (
    paginationRange !== undefined &&
    (currentPage === 0 || paginationRange.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <ul
      key={paginationRange?.length}
      className={classnames("pagination-container", {
        [className]: className,
      })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1 || !values,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber: string | number) => {
          if (pageNumber === "....") {
            return <li className="pagination-item dots">&#8230;</li>;
          }
          return (
            <li
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage || !values,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
