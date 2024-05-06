import { rerenderEntireTree } from "../../render";


  const ADD_POST = "ADD-POST";
  const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";



  let store = {
    
    _state: {
    profilePage: {
        postsData: [
            {message:"hello my friends, my name is Anton", counter: 18, id:1},
            {message:"hi, how are you?", counter: 20, id:2},
            ],
            newPostText: 'Post',
    },
    messagesPage: {
        messagesData: [
            {message: "Hi!", id: 1},
            {message: "How are you?", id: 2},
            {message: "Thank you", id: 3},
            {message: "Hello", id: 4},
            {message: "My friend", id: 5},
          ],
          dialogsData: [
            {name: "Anton", id: 1},
            {name: "Nikolays", id: 2},
            {name: "Viktoria", id: 3},
            {name: "Sveta", id: 4},
            {name: "Andrey", id: 5},
            {name: "Sergey", id: 6},
          ],
          newMessageText: 'message',
    },
    sideBar: {
      friendsData: [
        {name: "Antonio", id: 1},
        {name: "Viktor", id: 2},
        {name: "Valera", id: 3},
      ],
    },
    newsPage: {
      newsPageText: 'Page news!',
    },

    },
    _callSubscriber() {
      console.log('state changed')
  },
    getState() {
      return this._state;
    },
   
  
    dispatch(action) {
        if (action.type === "ADD-POST") {
          let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            counter: 0,
          };
          this._state.profilePage.postsData.push(newPost);
          this._state.profilePage.newPostText = '';
        rerenderEntireTree(this._state);
      } else if (action.type === "UPDATE-NEW-POST-TEXT") {
          this._state.profilePage.newPostText = action.newText;
          rerenderEntireTree(this._state);
      } else if (action.type === "ADD-MESSAGE") {
        let newMessage = {
          id: 8,
          message: this._state.messagesPage.newMessageText,
        };
  
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        rerenderEntireTree(this._state);
        
      } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        this._state.messagesPage.newMessageText = action.newText;
        rerenderEntireTree(this._state);
      }

    },


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





window.store = store;
export default store;  
