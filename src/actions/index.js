export const addList = (data)=> {
    return {
        type: "ADD_LIST",
        payload : {
         id : new Date().getTime().toString(),
         data:data,
        }
    }
}

export const deleteList = (id)=> {
    return {
        type: "DELETE_LIST",
        id
    }
}

export const removeList = ()=> {
    return {
        type : "REMOVE_LIST"
    }
}