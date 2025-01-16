const init = [
    {
        id : 1,
        content: "công việc 11",
        Compelete: true
    },
    {
        id : 22,
        content: "công việc 122",
        Compelete: true
    },
    {
        id : 33,
        content: "công việc 133",
        Compelete: false
    }
]



const toDoReducer = (state = init, action)=>{

    let newState = [...state]
  switch (action.type) {
    case "Create":
        newState = [
            ...state,
            {
                id: Date.now(),
                content: action.content,
                Compelete: false
            }
        ]

        
        return newState
    case "Delete":
        newState = newState.filter(item => item.id != action.id)
        return newState
    
    case "Compelete":
        const indexItem = newState.findIndex(item =>{
            return item.id === action.id
        } )
       newState[indexItem].Compelete=true
        return newState

    case "Undo":
           const indexItemU = newState.findIndex(item => item.id === action.id)
            newState[indexItemU].Compelete= false
            return newState
        
    default:
        return state
  }
    

}
export default toDoReducer;
   