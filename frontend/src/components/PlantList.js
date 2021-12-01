import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/plant";
import Plant from "../Plant";

function PlantList(props) {
  useEffect(() => {
    props.fetchAllPlants();
  }, []);
  return (
    <>
      <Plant list={props.plantList} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    plantList: state.plant.list,
  };
};

const mapActionToProps = {
  fetchAllPlants: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(PlantList);
