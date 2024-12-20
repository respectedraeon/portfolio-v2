

import React, { useMemo, useState } from 'react'
import TabView, { SceneMap } from '../components/Tab'
import HomePage from './Home'
import SkillPage from './Skill'
import BottomTabBar from './BottomTabBar'
import AnalyticsBar from './AnalyticsBar'
import AboutPage from './About'
import ChatPage from './Chat'
import BlogPage from './Blog'
import FloatingView from './FloatingView'



const renderScene = SceneMap({
    home : <HomePage />,
    skill : <SkillPage />,
    about : <AboutPage />,
    chat : <ChatPage />,
    blog : <BlogPage />
})

const AppPage = () => {

    const [navigationState] = useState([
        {key : "skill", title : "SkillTab", label : "Skill"},
        {key : "about", title : "AboutTab", label : "About"},
        {key : "home", title : "HomeTab", label : "Home"},
        {key : "chat", title : "ChatTab", label : "Chat"},
        {key : "blog", title : "BlogTab", label : "Blog"},
    ])


    const onTabChange = () => {

    }

  return (
    <div className='flex' style={style.root}>
        <AnalyticsBar />
        <FloatingView />
        <TabView
            navigationState={navigationState}
            renderScene={renderScene}
            onIndexChange={onTabChange}
            style={style.tabview}
            tabBarPosition='bottom'
            TabBarComponent={BottomTabBar}
            />
    </div>
  )
}

const style : { [key: string]: React.CSSProperties } = {
    root : {
        background : "url('/assets/img/ui-tex-2.png') repeat",
        backgroundSize : "120px"
    },
    tabview : {
        display : "flex",
        flexDirection : "column",
        flex : 1
    }
}

export default AppPage