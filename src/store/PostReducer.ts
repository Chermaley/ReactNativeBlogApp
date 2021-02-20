import { InferActionsTypes } from "./types"

export type PostType = {
    id: string,
    img: string,
    text: string,
    date: string
    booked: boolean
}

const initialState = {
    allPosts: [
        
    ] as PostType[],
    bookedPosts: [
        
    ] as PostType[]
}

export const postReducer = (state = initialState, action: ActionsType): InitialStateType => {
    let allPosts;

    switch (action.type) {
        case "LOAD_POST":
            return {
                ...state,
                allPosts: action.payload,
                bookedPosts: action.payload.filter(p => p.booked)
            }
        case "ADD_POST": 
            return {
                ...state,
                allPosts: [ action.payload, ...state.allPosts]
            }
        case "TOGGLE_BOOKED":
            allPosts = state.allPosts.map(p => {
                if (p.id === action.payload) {
                    p.booked = !p.booked
                }
                return p
            })
            return {
                ...state,
                allPosts,
                bookedPosts: state.allPosts.filter(p => p.booked)
            }
        case "DELETE_POST":
            allPosts =  state.allPosts.filter(p => p.id !== action.payload)
            return {
                ...state,
                allPosts, 
                bookedPosts: allPosts.filter(p => p.booked)
            }        
        default: 
            return state    
    }
}

export const actions = {
    loadPost: () => ({type: "LOAD_POST", payload: []} as const),
    toggleBooked: (id: string) => ({type: "TOGGLE_BOOKED", payload: id} as const),
    deletePost: (id: string) => ({type: 'DELETE_POST', payload: id} as const),
    addPost: (post: PostType) => ({type: 'ADD_POST', payload: post} as const)

}



//Types
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>