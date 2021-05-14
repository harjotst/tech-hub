import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faSolidStar,
  faStarHalfAlt as faHalfStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

function Rating({ stars, reviews }) {
  return (
    <div>
      <FontAwesomeIcon
        icon={
          stars >= 1 ? faSolidStar : stars >= 0.5 ? faHalfStar : faEmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          stars >= 2 ? faSolidStar : stars >= 1.5 ? faHalfStar : faEmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          stars >= 3 ? faSolidStar : stars >= 2.5 ? faHalfStar : faEmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          stars >= 4 ? faSolidStar : stars >= 3.5 ? faHalfStar : faEmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          stars >= 5 ? faSolidStar : stars >= 4.5 ? faHalfStar : faEmptyStar
        }
      />
      <span> {reviews} Reviews</span>
    </div>
  );
}

export default Rating;
