import { NavigationStateType, RouteType } from "./@types"



export const renderScene = (scene : any) => {
    return (route : RouteType, currentIndex : number) => {
        return scene[route.key]
    }
}