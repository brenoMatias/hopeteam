import './Galery.css';
import React, { useState } from "react";
import JsonData from './videos-data.json';
import ReactPaginate from "react-paginate";
import { videoData } from './videos-data2';

function Videos() {
  const [users] = useState(videoData.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((video) => {
      return (
        <div className="user">
          <h3>{video.title}</h3>
          <iframe className='video-item' allowfullscreen="allowfullscreen" src={video.src} alt={video.title} title={video.title}></iframe>
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
        previousLabel={"Anterior"}
        nextLabel={"Pŕoximo"}
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

export default Videos;

//pagination 
// https://www.youtube.com/watch?v=HANSMtDy508
// library: react paginate

//first thing: install the package
// npm install paginate
// second: import component
// import ReacPaginate
// https://www.npmjs.com/package/react-paginate