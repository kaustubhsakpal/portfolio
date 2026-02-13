import { Rnd } from "react-rnd";
import "./Windows.scss";

const Windows = ({
  children,
  width = 600,
  height = 500,
  windowname,
  setWindowState,
}) => {
  return (
    <Rnd
      default={{
        x: 80,
        y: 80,
        width: width,
        height: height,
      }}
      minHeight={320}
      minWidth={280}
      bounds="window"
    >
      <div className="window">
        <div className="nav">
          <div className="dots-container">
            <div
              className="dots red "
              onClick={() => {
                console.log("hello");
                
                setWindowState((state) => ({
                  ...state,
                  [windowname]:false,
                }));
              }}
            ></div>
            <div className="dots yellow"></div>
            <div className="dots green"></div>
          </div>
          <div className="tittle">
            <p>Kaustubhsakpal-zsh</p>
          </div>
        </div>
        {children}
      </div>
    </Rnd>
  );
};

export default Windows;
