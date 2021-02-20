import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"


export type PostStackParamList = {
    Main: undefined,
    Post: {
        postId: string,
        booked: boolean
    }
}

export type PostNavProps<T extends keyof PostStackParamList> = {
    navigation: StackNavigationProp<PostStackParamList, T>
    route: RouteProp<PostStackParamList, T>
}