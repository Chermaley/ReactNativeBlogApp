import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types"

export type TabsParamList = {
    PostStack: undefined,
    BookedStack: undefined
}

export type TabsNavProps<T extends keyof TabsParamList> = {
    navigation: StackNavigationProp<TabsParamList, T>
    route: RouteProp<TabsParamList, T>
}