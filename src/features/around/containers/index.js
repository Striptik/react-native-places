import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { getVisiblePlaces } from '../../../redux/selectors/places';
import Component from '../components';

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: value => {
      dispatch(updateFilter(value));
    }
  }
}

const mapStateToProps = (state) => {
  const places = getVisiblePlaces(state)
  return { places };
}

const AroundContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
export default AroundContainer;