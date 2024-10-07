// src/constants/pointsConstants.js
export const POINTS_SYSTEM = {
    batting: [
      { type: "Run", points: 1 },
      { type: "Playing 11", points: 2 },
      { type: "Boundary Bonus", points: 1 },
      { type: "Six Bonus", points: 2 },
      { type: "Half-century Bonus", points: 2 },
      { type: "Century Bonus", points: 4 },
      { type: "150-run Bonus", points: 8 },
      { type: "Dismissal For A Duck", points: -2 },
    ],
    bowling: [
      { type: "Wicket", points: 10 },
      { type: "3-wicket haul bonus", points: 2 },
      { type: "5-wicket haul bonus", points: -8 },
    ],
    fielding: [
      { type: "Caught", points: 4 },
      { type: "Run out (Direct hit)", points: 6 },
      { type: "Run out (Thrower/catcher)", points: 3 },
    ],
  };
  