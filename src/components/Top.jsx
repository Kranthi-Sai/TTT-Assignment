import "./Top.css";
import BackGround from "../assets/1001.png";
import Profile from "../assets/1002.png";
export const Top = () => {
  return (
    <div id="container">
      <div id="background-image">
        <img src={BackGround} alt="" />
      </div>
      <img
        id="profile-image"
        src={Profile}
        height="200rem"
        width="200rem"
        alt=""
      />
      <div className="Pname"></div>
    </div>
  );
};
