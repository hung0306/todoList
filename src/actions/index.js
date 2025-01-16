export const Create = (content) => {
    return {
        type: "Create",
        content: content
    }
}


export const Delete = (id) => {
    return {
        type: "Delete",
        id: id
    }
}

export const Undo = (id) => {
    return {
        type: "Undo",
        id: id
    }
}

export const Compelete = (id) => {
    return {
        type: "Compelete",
        id: id
    }
}