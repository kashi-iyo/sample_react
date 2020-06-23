import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  background: #ffd700;
  height: 100px;
  width: 100%;
  font-size: 20px;
`

const Thumbnail = () => {
  return(
    <div className="pt-4">
      <Content>サムネ</Content>
    </div>
  )
}

export default Thumbnail
