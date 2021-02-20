import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"


export type BookedStackParamList = {
    Booked: undefined,
    Post: {
        postId: string,
        booked: boolean
    }
}


export type BookedNavProps<T extends keyof BookedStackParamList> = {
    navigation: StackNavigationProp<BookedStackParamList, T>
    route: RouteProp<BookedStackParamList, T>
}