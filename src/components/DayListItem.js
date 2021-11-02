import React from "react";
import classnames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  const formatSpots = function(props) {
    let openSpots = 0;
    if(props.spots >= 2) {
      openSpots = props.spots;
      return `${openSpots} spots remaining `;
    } else if (props.spots === 1) {
      openSpots = props.spots;
      return `${openSpots} spot remaining`;
    } else {
      return `no spots remaining`;
    }
  }
  return (
    <li 
    className={dayClass}
    onClick={() => props.onChange(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{ formatSpots(props) }</h3>
    </li>
  );
}