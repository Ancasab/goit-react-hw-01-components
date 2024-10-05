import React from 'react'
// import data  from "../data.json"
// import ReactDOM from "react-dom/client"
import PropTypes from "prop-types";
// import { getRandomHexColor } from '../getRandomHexColor'

const Statistics = ({title, stats}) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>


        {/* <ul className="stat-list">
          <li className="item">
            <span className="label">.{stats[0].label}</span>
            <span className="percentage"> {stats[0].percentage}%</span>
          </li>
          <li className="item">
            <span className="label">.{stats[1].label}</span>
            <span className="percentage"> {stats[1].percentage}%</span>
            </li>
          <li className="item">
            <span className="label">.{stats[2].label}</span>
            <span className="percentage"> {stats[2].percentage}%</span>
          </li>
          <li className="item">
            <span className="label">.{stats[3].label}</span>
            <span className="percentage"> {stats[3].percentage}%</span>
          </li>
        </ul> */}

        <ul className="stat-list">
          {stats.map((stat) => (
            <li className="item">
            <span className="label" key={stat.id}>{stat.label}</span>
            <span className="percentage" key={stat.id}> {stat.percentage}%</span>
          </li>
        
          ))}
        </ul>  

      </section>
    </div>
  )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired
};

export default Statistics