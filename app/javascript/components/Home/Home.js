import React, { Component } from 'react'
import Jumbotoron from './Jumbotoron'
import Table from './Table/Table'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1, ReactでRailsアプリケーションをセットアップ', description: '説明文が入る', active: false },
        { id: 2, title: '2, RailsアプリケーションにReactを追加', description: '説明文が入る', active: false },
        { id: 3, title: '3, Hello Worldアプリケーションの立ち上げ', description: '説明文が入る', active: false },
        { id: 4, title: '4, アプリケーションにReact Router Domを追加する', description: '説明文が入る', active: false },
      ]
    }
  }

  render() {
    return(
      <div>
        <Jumbotoron />
        <Table course_modules={this.state.course_modules} />
      </div>
    )
  }
}

export default Home
