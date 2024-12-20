

import React, { useMemo } from 'react'
import { NavigationStateType, RouteType } from '../components/Tab/@types'

type BottomTabBarProps = {
    navigationState : NavigationStateType,
    selectedIndex : number,
    onIndexChange : (index : number) => any
}

const BottomTabBar = (props : BottomTabBarProps) => {

    const renderItem = useMemo(() => {
        return props.navigationState?.map((item : RouteType, index : number) => <ItemView item={item} index={index} selected={true} onClick={props.onIndexChange} />)
    }, [])

  return (
    <div style={style.root}>
        {renderItem}
    </div>
  )
}


type ItemViewProps = {
    item : RouteType,
    index : number,
    onClick : (index : number) => any
    selected : boolean
}

const ItemView = (props : ItemViewProps) => {
    const onClick = () => {
        props.onClick(props.index)
    }
    return(
        <div style={style.item} onClick={onClick}>
            <span style={{fontSize : "12px", color : "#fff"}}>{props.item.label}</span>
        </div>
    )
}

const style : { [key: string]: React.CSSProperties } = {
    root : {
        display : "flex",
        flexDirection : "row",
        width : "360px",
        height : "64px",
        backgroundColor : "#00000020",
        cursor : "pointer"
    },
    item : {
        display : "flex",
        flex : 1
    }
}

export default BottomTabBar