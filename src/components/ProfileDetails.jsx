import "./ProfileDetails.css";
import { Checkmark } from "react-checkmark";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const ProfileDetails = ({ details }) => {
  const {
    name,
    Followers,
    Following,
    headof,
    insta,
    stars,
    likes,
    views,
    loves,
  } = details;

  return (
    <>
      <div className="Details">
        <div className="personName">
          <div className="Head">
            <span className="name">{name}</span>
            <span className="daimond">
              <DiamondIcon />
            </span>
            <span className="tick">
              <Checkmark size="18px" color="Green" stroke="black" />
            </span>
          </div>

          <ul className="follow">
            <div className="space">
              <li className="followdiv">
                <span className="box">{Followers}</span>
                <span className="lowbox">Followers</span>
              </li>

              <li className="followdiv">
                <span className="box">{Following}</span>
                <span className="lowbox">Following</span>
              </li>
            </div>
          </ul>
        </div>
        <div className="Info">
          <div className="info">{headof}</div>
          <div className="links">
            <a
              href="http://www.instagram.com/anujgosalia"
              target="_blank"
              rel="noopener noreferrer"
            >
              {insta}
            </a>
          </div>
          <div className="addition">
            <div className="some">
              <span className="icon1">
                <StarBorderIcon />
              </span>
              <span className="stars">{stars}</span>

              <span className="icon2">
                <ThumbUpOffAltIcon />
              </span>
              <span className="likes">{likes}</span>

              <span className="icon3">
                <RemoveRedEyeIcon />
              </span>
              <span className="views">{views}</span>

              <span className="icon4">
                <FavoriteIcon />
              </span>
              <span className="loves">{loves}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
