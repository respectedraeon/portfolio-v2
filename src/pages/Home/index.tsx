

import React from 'react'

const HomePage = () => {
  return (
    <div className='w-100 flex' style={style.root}>
        <div style={style.topRoot}>
A
        </div>
        <div style={style.midRoot}>
            <div className='flex' style={{flexDirection : "row", gap : "12px", paddingInline : "12px"}}>
                <div className='flex' style={style.midSideContentRoot}>
                    <div>1</div>
                    <div>2</div>
                </div>
                <div className='flex'>
                    <div>
                        <img src='/assets/img/featured-graphic.png' style={style.imageFeatured} />
                    </div>
                    <div>2</div>
                </div>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
        <div style={style.bottomRoot}></div>
    </div>
  )
}

const style : { [key : string] : React.CSSProperties} = {
    root : {
        paddingTop : "72px",
        gap : "20px"
    },
    topRoot : {
        height : "100px",
        display : "flex",
        flexDirection : "row"
    },
    midRoot : {
        display : "flex",
        flex : 1
    },
    imageFeatured : {
        width : "240px",
        height : "180px"
    },
    midSideContentRoot : {
        width : "80px"
    },
    bottomRoot : {
        height : "120px",
        display : "flex",
        flexDirection : "row"
    }
}

export default HomePage