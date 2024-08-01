import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({tvShow}) {
  console.log(tvShow)
  return (
    
    <div className={s.container}>
      <span className={s.title}>{tvShow.name}</span>
      <FiveStarRating rating={tvShow.vote_average} />
      <div>{tvShow.vote_average / 2} / 5</div>
      <div>Date: {tvShow.first_air_date}</div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          {
            tvShow.overview
          }
        </div>
      </div>
    </div>
  );
}
