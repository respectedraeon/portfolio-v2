
import React, { useCallback, useMemo, useState } from 'react'
import { NavigationStateType, RouteType } from './@types'
import "./tab.css"


type TabProps = {
    navigationState : NavigationStateType,
    renderScene : any,
    onIndexChange : (index : number, route ?: RouteType) => any
}

const Tab = (props : TabProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const onIndexChange = useCallback((index : number) => {
        setCurrentIndex(index)
        props.onIndexChange(index, props.navigationState[index])
    }, [])

    const renderScene = useMemo(() => {
        return props.navigationState?.map((item : RouteType, index : number) => props.renderScene(item, index)) ?? []
    }, [currentIndex])

    return (
        <div>
            <div>Alok Prakash</div>
            <div className='tab-body-container w-100'>
                {renderScene}
            </div>
        </div>
    )
}

export default Tab