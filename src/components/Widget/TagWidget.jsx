import React from 'react'
// import { Link } from 'react-router-dom'
import  Link from "../Link";
import Div from '../Div'

export default function TagWidget({title, data}) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <Div className="tagcloud">
        {data?.slice(0, 10).map((tag, index)=> (
          <Link to={tag.url} className="tag-cloud-link" key={index} reloadDocument>{tag.title}</Link>
        ))}
      </Div>
    </>
  )
}
