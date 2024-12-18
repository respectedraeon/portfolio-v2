

import React, { useMemo, useState } from 'react'
import TabView, { SceneMap } from '../components/Tab'
import HomePage from './Home'
import SkillPage from './Skill'



const renderScene = SceneMap({
    home : <HomePage />,
    skill : <SkillPage />
})

const AppPage = () => {

    const [navigationState] = useState([
        {key : "home", title : "HomeTab"},
        {key : "skill", title : "SkillTab"}
    ])


    const onTabChange = () => {

    }

  return (
    <TabView
        navigationState={navigationState}
        renderScene={renderScene}
        onIndexChange={onTabChange}
        />
  )
}

export default AppPage