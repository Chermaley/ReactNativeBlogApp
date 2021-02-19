import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types"

export type CreateStackParamList = {
    Create: undefined
}

export type CreateNavProps<T extends keyof CreateStackParamList> = {
    navigation: StackNavigationProp<CreateStackParamList, T>
    route: RouteProp<CreateStackParamList, T>
}