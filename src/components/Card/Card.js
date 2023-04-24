import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
    return (
        <div className="Card">
           <CompactCard param = {props} set/>
        </div>
    )
}

function CompactCard ({param}){
    const Png = param.png;
    return(
        <div className="compactCard"
        style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}>
            <div className="radialBar">
            <CircularProgressbar
             value={param.barValue}
             text={`${param.barValue}%`}
           />
        <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hrs</span>
            </div>
        </div>
    )
}
export default Card;