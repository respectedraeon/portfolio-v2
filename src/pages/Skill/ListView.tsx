

import React from 'react'

const ListView = () => {
	return (
		<div style={style.root}>
			<div style={{marginBottom : "12px"}}>
				<span style={{fontSize : "12px", color : "#fff"}}>Top Pick</span>
			</div>
			<div style={style.itemRoot}>
				<ItemView />
				<ItemView />
				<ItemView />
				<ItemView />
				<ItemView />
				<ItemView />
				<ItemView />
				<ItemView />
			</div>
		</div>
	)
}

const ItemView = () => {
	return(
		<div style={{...style.item, background : `url("/assets/img/bg-skill.png") no-repeat center center / cover`}}>
			<img src="/assets/img/skill-react.png" style={{width : "26px", height : "26px", alignSelf : "center", marginBottom : "14px"}} />
			<span style={{fontSize: "5.5px", color : "#aa2afa", textAlign : "center", marginBottom : "8px", textShadow : "0px -1px 0px #e6e6e6"}}>2.5yrs</span>
			<span style={{fontSize: "6px", color : "#693609", textAlign : "center", marginBottom : "3.5px", textShadow : "0px -1px 0px #e6e6e6"}}>Javascript</span>
		</div>
	)
}


const style: { [key: string]: React.CSSProperties } = {
	root : {
		marginTop : "18px",
		padding : "14px",
		backgroundColor : "#00000020"
	},
	itemRoot : {
		display : "flex",
		flexDirection : "row",
		flexWrap : "wrap",
		gap : "8px"
	},
	item: {
		width : "76px",
		height : "90px",
		display : "flex",
		flexDirection : "column",
		justifyContent : "flex-end",
	}
}

export default ListView