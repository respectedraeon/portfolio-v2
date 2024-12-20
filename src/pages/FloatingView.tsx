

import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { catmullRomSpline3D } from '../utils/catmull-curve'

const FloatingView = () => {

    const ref = useRef<HTMLDivElement>(null)
    const [shouldAnimate, setShouldAnimate] = useState(false)

    const onAnimate = async() => {
        setShouldAnimate(!shouldAnimate)
        // const element = ref.current
        // const icon = document.createElement("div")
        // icon.style.width = "56px"
        // icon.style.height = "56px"
        // icon.style.backgroundColor = "red"
        // icon.style.transform = `translate(${180 + Math.floor(Math.random() * 70)}px, ${360 - Math.floor(Math.random() * 70)}px) scale(1)`
        // element?.appendChild(icon)
        // // setTimeout(() => {
        // //     element?.removeChild(element)
        // // }, 2000)
        // console.log("Hello")
    }

    const renderItem = useMemo(() => {
        const icons : any[] = []
        for(let i = 0; i < 7; i++){
            const start = {x : 140 + Math.random() * 100, y :  300 + Math.random() * 100}
            const end = {x : 30, y : 30}
            icons.push({start, end})
        }
        return icons.map((item : any, index : number) => <AnimatedView key={index} item={item} />)
    }, [])

  return (
    <div ref={ref} style={style.root} onClick={onAnimate}>
        {
            shouldAnimate && renderItem
        }
    </div>
  )
}

type AnimatedViewProps = {
    item : any
}

const AnimatedView = React.memo((props : AnimatedViewProps) => {

    const randomRange = useCallback((start : number, end : number) => {
        return start + Math.random() * (end - start)
    }, [])
    
    const path = catmullRomSpline3D([
        {x : randomRange(140, 190) , y : randomRange(180, 240), z : 0},
        {x : randomRange(140, 190) , y : randomRange(180, 240), z : 0},
        {x : randomRange(100, 260), y : randomRange(240, 300), z : 500},
        {x : props.item.end.x, y : props.item.end.y, z : 0},
        {x : props.item.end.x, y : props.item.end.y, z : 0},
        {x : props.item.end.x, y : props.item.end.y, z : 0},
    ], 70)

    const anim =  useSpring({
        from: { transform: `translate(${path[0].x}px, ${path[0].y}px) scale(0)` },
        to: async(next) => {
            let i = 0
            while(i < path.length){
                const {x , y, z} = path[i]
                i++
                await next({ transform: `translate(${x}px, ${y}px) scale(${Math.max(z * 1.5/500, 0)})` })
            }
        },
        config: { duration : 16 }
      });

    return(
        <animated.div style={{...style.animatedItem, ...anim}}>
            <img src='/assets/img/floating-star.png' style={{width : "32px", height: "32px", animation : "animRotate 2s infinite linear"}} />
        </animated.div>
    )
})


const style : {[key : string] : React.CSSProperties} = {
    root : {
        position : "absolute",
        width : "360px",
        height : "720px",
        zIndex : 999
    },
    animatedItem : {
        position : "absolute",
        width : "32px",
        height : "32px"
    }
}

export default FloatingView