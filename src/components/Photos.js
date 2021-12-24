import "./Galery.css";
import React, { useState } from "react";
import JsonData from './photos-data.json';
import ReactPaginate from "react-paginate";

function Photos() {
  const [users] = useState(JsonData.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
   <div className="cardsList"> 
    <div className="main">
      {displayUsers}
      </div>
      <div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    </div>
  );
}

export default Photos;

//pagination 
// https://www.youtube.com/watch?v=HANSMtDy508
// library: react paginate

//first thing: install the package
// npm install paginate
// second: import component
// import ReacPaginate
// https://www.npmjs.com/package/react-paginate