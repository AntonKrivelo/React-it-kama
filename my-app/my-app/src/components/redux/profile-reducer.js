const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: 
        let newPost = {
            id: 3,
            message: state.newPostText,
            counter: 0,
          };
          state.postsData.push(newPost);
          state.newPostText = '';
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
        default: 
            return state;    
    } 
};


export const newPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};
 export const updateNewTextPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    };
};


export default profileReducer;