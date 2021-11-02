import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props){
  let firstDaySchedule = "";
  if (Array.isArray(props.days)) {
    firstDaySchedule = props.days.map(day => (
      <DayListItem
      key={props.id} 
      name={props.name} 
      spots={props.spots} 
      selected={props.name === props.value}
      setDay={props.onChange}
     />
    
    ))
  }
  return (
    <ul>
      {firstDaySchedule}
    </ul>
  )
}