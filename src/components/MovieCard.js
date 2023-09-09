import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";


const MovieCard = ({ posterPath, id }) => {
  return (
    <Link to={`/browse/${id}/trailer`}>
      <div className="w-40 pr-4">
        <img
          className="rounded"
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
