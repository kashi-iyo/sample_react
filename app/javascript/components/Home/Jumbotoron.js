import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #d74234;
  nin-height: 550px;
  padding: 250px 0;
  color: #fff;
`

const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`

const Subhead = styled.p`
  font-size:18px;
  font-weight:500;
`

const Content = styled.div`
  background: #ffd700;
  height: 200px;
  width: 400px;
  font-size: 40px;
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  boder-radius: 0;
  background: #fff;
  color: gray !important;
  box-shadow: 0px 0px 0px 3px #473228,
    -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`

const Jumbotoron = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <H1>見出し1</H1>
              <Subhead>─小見出し─</Subhead>
              <div className="cta-wrapper"></div>
                <Button className="btn fancy-btn">＼ポチッ／</Button>
            </div>
          </div>
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4 text-center">
              <Content>aa</Content>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Jumbotoron
