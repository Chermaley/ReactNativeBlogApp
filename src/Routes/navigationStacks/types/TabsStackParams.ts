import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type TabsParamList = {
    AllPostStack: undefined,
    BookedPostStack: undefined
}

export type TabsNavProps<T extends keyof TabsParamList> = {
    navigation: StackNavigationProp<TabsParamList, T>
    route: RouteProp<TabsParamList, T>
}