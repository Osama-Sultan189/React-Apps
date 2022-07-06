import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center my-3'>Featured Headlines</h1>
        <div className="row">
            <div className='col-md-4'>
                <NewsItem/>
            </div>
            <div className='col-md-4'>
                <NewsItem/>
            </div>
            <div className='col-md-4'>
                <NewsItem/>
            </div>
        </div>
      </div>
      
    )
  }
}

export default News