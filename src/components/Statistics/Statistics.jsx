import React from 'react'
import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import { getRandomHexColor } from './getRandomHexColor'

const Statistics = ({title, stats}) => {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map((stat) => (
            <li className={css.item}
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}>
              
              <span className={css.label} key={stat.id}>{stat.label}</span>
              <span className={css.percentage} key={stat.id}> {stat.percentage}%</span>
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

// ## VAR 1
//  <ul className="stat-list">
//   <li className="item">
//     <span className="label">.{stats[0].label}</span>
//     <span className="percentage"> {stats[0].percentage}%</span>
//   </li>
//   <li className="item">
//     <span className="label">.{stats[1].label}</span>
//     <span className="percentage"> {stats[1].percentage}%</span>
//     </li>
//   <li className="item">
//     <span className="label">.{stats[2].label}</span>
//     <span className="percentage"> {stats[2].percentage}%</span>
//   </li>
//   <li className="item">
//     <span className="label">.{stats[3].label}</span>
//     <span className="percentage"> {stats[3].percentage}%</span>
//   </li>
// </ul> 