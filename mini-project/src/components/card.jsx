import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">

      {/* TOP */}
      <div className="top">
        <img
          className="logo"
          src={props.img}
          alt="logo"
        />

        <button className="save">
          Save <Bookmark size={16} />
        </button>
      </div>

      {/* COMPANY */}
      <div className="info">
        <b>{props.company}</b>
        <span>{props.days} days ago</span>
      </div>

      {/* TITLE */}
      <h2 className="title">{props.postion}</h2>

      {/* TAGS */}
      <div className="tags">
        <span>{props.jobtype1}</span>
        <span>{props.jobtype2}</span>
      </div>
f
      {/* LINE */}
      <hr />

      {/* BOTTOM */}
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>San Francisco, CA</p>
        </div>

        <button className="apply">Apply now</button>
      </div>

    </div>
  )
}

export default Card