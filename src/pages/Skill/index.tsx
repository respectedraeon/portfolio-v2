

import React, { useState } from 'react'
import TabView from '../../components/Tab'
import ListView from './ListView'

const SkillPage = () => {

  return (
    <div className='w-100 flex' style={style.root}>
        <ListView />
        <ListView />
        <ListView />
        <ListView />
    </div>
  )
}

const style : {[key : string] : React.CSSProperties} = {
    root : {
        paddingTop : "40px"
    }
}

export default SkillPage