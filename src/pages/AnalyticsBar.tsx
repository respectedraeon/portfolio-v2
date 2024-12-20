

import React, { useLayoutEffect, useRef, useState } from 'react'

const AnalyticsBar = () => {
  return (
    <div style={style.root}>
        <ItemView />
        <ItemView />
        <ItemView />
    </div>
  )
}

const ItemView = () => {

  return(
    <div style={style.item}>
      <img src='/assets/img/analytics-bar.png' style={{width : "104px", height : "25.51px"}} />
    </div>
  )
}

const style : {[key : string] : React.CSSProperties} = {
    root : {
        display : "flex",
        flexDirection : "row",
        height : "56px",
        alignItems : "center",
        width : "360px",
        position : "absolute",
        top : 0,
        paddingInline : "8px"
    },
    item : {
        display : "flex",
        flex : 1
    }
}

export default AnalyticsBar