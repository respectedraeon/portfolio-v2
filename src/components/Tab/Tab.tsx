
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { NavigationStateType, RouteType } from './@types'
import { useSpring, animated } from '@react-spring/web'


type TabProps = {
    navigationState : NavigationStateType,
    renderScene : any,
    onIndexChange : (index : number, route ?: RouteType) => any,
    tabBarPosition : "top" | "bottom",
    TabBarComponent ?: any,
    style ?: React.CSSProperties,
    tabStyle ?: React.CSSProperties
}

const Tab = (props : TabProps) => {

    const scrollableRef = useRef<HTMLDivElement>(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const [scrollAnimation, api] = useSpring(() => ({
        position : 0, // Initial scroll position
        config: { tension: 200, friction: 18 }, // Smooth animation
    }));

    const onIndexChange = useCallback((index : number) => {
        setCurrentIndex(index)
        props.onIndexChange(index, props.navigationState[index])
    }, [])


    
    const handleScroll = (index : number) => {
        if (scrollableRef.current) {
          const contentPosition = index * 360; // Scroll 200px down
        //   api.start({ scrollLeft : targetScrollTop }); // Trigger scroll animation
            api.start({position : contentPosition})
        }
    }

    useEffect(() => {
        console.log("currentIndex", currentIndex)
        handleScroll(currentIndex)
    }, [currentIndex])

    const TabBarComponent = useCallback(() => {
        return <props.TabBarComponent selectedIndex={currentIndex} navigationState={props.navigationState} onIndexChange={onIndexChange} />
    }, [currentIndex])

    const renderScene = useMemo(() => {
        return props.navigationState?.map((item : RouteType, index : number) => props.renderScene(item, index)) ?? []
    }, [currentIndex])

    return (
        <div style={{...style.root, ...props.style}}>
            {props.tabBarPosition == "top" && <TabBarComponent />}
            <animated.div 
                ref={scrollableRef} 
                scrollLeft={scrollAnimation.position}
                style={style.tabRoot}>
                {renderScene}
            </animated.div>
            {props.tabBarPosition == "bottom" && <TabBarComponent />}
        </div>
    )
}

const style : { [key: string]: React.CSSProperties } = {
    root : {
        // overflowX : "hidden"
    },
    tabRoot : {
        display : "flex",
        flexDirection : "row",
        overflowX : "hidden",
        overflowY : "scroll",
        height : "100%"
    }
}

export default Tab