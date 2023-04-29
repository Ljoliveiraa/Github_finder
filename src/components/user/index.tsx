import { UserProps } from "../../models";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import "./_style.scss";
export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  bio,
  name,
  received_events_url
}: UserProps) => {
  return (
    <div className="user">
      <img src={avatar_url} alt={login} />
      <div className="user-name">
      <h2>{name}</h2>
      <p>{login}</p>
      </div>
     
      {bio && (<p>{bio}</p>)}
      {location && (
        <p className="location">
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className="stats">
        {followers && (
          <div className="followers">
            <div>seguidores:</div>
            <div className="number">{followers}</div>
          </div>
        )}
        {following && (
          <div className="following">
            <div>seguindo:</div>
            <div className="number">{following}</div>
          </div>
        )}
      </div>
      <div className="link">
      <Link to={`https://github.com/${login}?tab=${received_events_url}`}> Ver repositorios </Link>
      </div>
    </div>
  );
};
