import React from "react";
import { Link } from "react-router-dom";

const ComicCard = ({name, uid}) => {
  return (
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">{uid}</h5>
        <p className="card-text">
          {name}
        </p>
        <Link to={`/${uid}/detail`} className="btn btn-primary">Detail
          Button
        </Link>
      </div>
    </div>
  );
};

export default ComicCard;