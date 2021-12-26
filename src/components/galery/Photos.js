import './Galery.css';
import React, { useState } from "react";
// import JsonData from './photos-data';
import ReactPaginate from "react-paginate";
import {photosData} from '../../components/galery/photos-galery/photosData';
import InnerImageZoom from 'react-inner-image-zoom';


function Photos() {
  const [photos] = useState(photosData.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);

  const photosPerPage = 10;
  const pagesVisited = pageNumber * photosPerPage;

  const displayphotos = photos
    .slice(pagesVisited, pagesVisited + photosPerPage)
    .map((photo) => {
      return (
        <div className="user">
        
          <img className="galery-img" src={photo.image} alt="lala"/>
          <h3>{photo.id}</h3>  

          
        </div>
        
        
      );
    });

  const pageCount = Math.ceil(photos.length / photosPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
   <div className="cardsList"> 
    <div className="main">
      {displayphotos}
      </div>
      <div>

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próximo"}
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