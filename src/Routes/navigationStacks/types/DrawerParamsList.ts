import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types"

export type DrawerParamsList = {
    Tabs: undefined,
    AboutStack: undefined,
    CreateStack: undefined
}

export type DrawerNavProps<T extends keyof DrawerParamsList> = {
    navigation: StackNavigationProp<DrawerParamsList, T>
    route: RouteProp<DrawerParamsList, T>
}