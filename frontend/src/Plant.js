import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/plant";

function Plant({ list, updatePlant }) {
  useEffect(() => {
    setPlants(list);
  }, [list]);
  const [plants, setPlants] = useState(list);

  const handleClick = (id) => {
    const newList = [...plants];
    if (newList[id - 1].waterStatus === "low") {
      newList[id - 1].watering = true;
      updatePlant(id, newList[id - 1], () => {
        console.log("Updated");
      });
      setPlants(newList);

      setTimeout(() => {
        const temp = [...plants];
        temp[id - 1].watering = false;
        temp[id - 1].waterStatus = "high";
        temp[id - 1].lastTimeWater = new Date();
        updatePlant(id, temp[id - 1], () => {
          console.log("Updated");
        });
        setPlants(temp);
      }, 10000);
    }
  };

  const SixHourAgo = (date) => {
    const hour = 1000 * 60 * 60;
    const sixHour = 6 * hour;

    return new Date() - Date.parse(date) < sixHour;
  };

  return (
    <div>
      <div className="plant">
        {plants.map((plant) => (
          <div key={plant.id} className="plantBox">
            {plant.watering ? (
              <div>
                <div className="loading-wrapper">
                  <div className="loading-pouring"></div>
                </div>
                <div className="loading-name">
                  <p>WATERING PLANT</p>
                </div>
              </div>
            ) : (
              <div className="singlePlant">
                <span>Plant No: {plant.id}</span>
                <span>
                  Water Status:
                  {SixHourAgo(plant.lastTimeWater)
                    ? (plant.waterStatus = "high")
                    : (plant.waterStatus = "low")}
                </span>

                {SixHourAgo(plant.lastTimeWater) ? (
                  <button onClick={() => handleClick(plant.id)}>Water</button>
                ) : (
                  <button
                    className="alertBtn"
                    onClick={() => handleClick(plant.id)}
                  >
                    Alert Water
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    plantList: state.plant.list,
  };
};

const mapActionToProps = {
  updatePlant: actions.update,
};

export default connect(mapStateToProps, mapActionToProps)(Plant);
