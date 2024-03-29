import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="card">
        <img src={!imageUrl ? "https://images.wsj.net/im-874730/social" : imageUrl} className="card-img-top" alt="Not available for this  news" style={{borderBottom:"1px solid #d2d2d2", height:"33vh"}}/>
        <div className="card-body">
          <h5 className="card-title lh-1" style={{textAlign:"justify"}}>{title}</h5>
          <p className="card-text lh-sm" style={{textAlign:"justify"}}>{description} <a href={newsUrl} target="_blank" rel="noreferrer">Read More</a></p>
          <span className="position-absolute top-0 z-1 translate-middle badge rounded-pill bg-danger" style={{left:"85%"}}>{source}</span>
          <p className="card-text text-end"><small className="text-body-secondary">~{!author ? "Unknown" : author} ({new Date(date).toDateString()})</small></p>
          
        </div>
      </div>
    )
  }
}
