import React, { Component } from 'react'
import Jumbotoron from './Jumbotoron'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1, ReactでRailsアプリケーションをセットアップ', description: 'lorem ipsum', active: false },
        { id: 1, title: '2, RailsアプリケーションにReactを追加', description: 'lorem ipsum', active: false },
        { id: 1, title: '3, Hello Worldアプリケーションの立ち上げ', description: 'lorem ipsum', active: false },
        { id: 1, title: '4, アプリケーションにReact Router Domを追加する', description: 'lorem ipsum', active: false },
      ]
    }
  }

  render() {
    return(
      <div>
        <Jumbotoron />
      </div>
    )
  }
}

export default Home
