import React, { useState } from "react";
import "./SlidingCard.css";
// import Container from "@mui/material/Container";
import { Container, Grid } from "@mui/material";
import Departments from "./Departments";
import femaleprofile from "/home/ajay/Desktop/django-react/sliding-cards-app/src/Media/hijab.jpg";
import maleprofile from "/home/ajay/Desktop/django-react/sliding-cards-app/src/Media/male-profile.webp";
// import

// REACT ICONS
import { AiOutlineCaretLeft, AiFillCaretRight } from "react-icons/ai";

const SlidingCard = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    setPosition(position - 1);
  };

  const moveRight = () => {
    setPosition(position + 1);
  };
  console.log(Departments.length);
  return (
    // <Container>
    <Grid container>
      <Grid className="top-sliding-container" xs={12} sm={10} md={10} lg={10}>
        <div className="sliding-card-container">
          {/* <Grid className="sliding-card-container" xs={2} sm={3} lg={10}> */}
          <div
            className="sliding-card"
            style={{ transform: `translateX(${position * 256}px)` }}
          >
            {Departments.map((department, id) => {
              console.log(position);
              return (
                // <Grid
                //   className="card"
                //   item
                //   spacing={2}
                //   lg={4}
                //   md={6}
                //   xs={10}
                //   style={{ border: "1px solid purple" }}
                // >
                <div className="card">
                  <div className="card-portion-01">
                    {/* <div className="card-portion-01-dp"> */}
                    <img className="card-portion-01-dp" src={department.pic} />
                    {/* </div> */}
                  </div>
                  <div className="card-portion-02">
                    <div>David Dell</div>
                    <p>
                      I am fully satidfied with his work and i am also
                      recommending his work to all of you her is my profile
                    </p>
                    <button>View More</button>
                  </div>
                  <div className="card-portion-angle"></div>
                  {department.name}
                </div>
                // {/* </Grid> */}
              );
            })}
          </div>
          {/* </Grid> */}
        </div>
        <div className="controls">
          <button
            className="btn01"
            onClick={moveLeft}
            disabled={position === -18}
          >
            <AiOutlineCaretLeft
              style={{ fontSize: "30px", color: "#045e5e" }}
            />
          </button>
          <button
            className="btn02"
            onClick={moveRight}
            disabled={position === 0}
          >
            <AiFillCaretRight style={{ fontSize: "30px", color: "#045e5e" }} />
          </button>
        </div>
      </Grid>
    </Grid>
    // </Container>
  );
};

export default SlidingCard;

{
  /* Your card content goes here */
}
{
  /* <div className="card">Card Content0</div>
          <div className="card">Card Content1</div>
          <div className="card">Card Content2</div>
          <div className="card">Card Content03</div>
          <div className="card">Card Content3</div>
          <div className="card">Card Content4</div>
          <div className="card">Card Content5</div>
          <div className="card">Card Content6</div>
          <div className="card">Card Content7</div>
          <div className="card">Card Content8</div>
          <div className="card">Card Content9</div> */
}
{
  /* Add more cards as needed */
}
