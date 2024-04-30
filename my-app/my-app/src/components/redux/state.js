import { rerenderEntireTree } from "../../render";

let state = {



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

  };
  
  
window.state = state;

// POSTS ADD

 export let addPost = () => {

    let newPost = {
      id: 3,
      message: state.profilePage.newPostText,
      counter: 0,

    };
    
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

  };


  export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  }

// POSTS ADD


// MESSAGE ADD 

export let addMessage = () => {
  let newMessage = {
    id: 8,
    message: state.messagesPage.newMessageText,
  };

  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.newMessageText = '';
  rerenderEntireTree(state);

}

export let updateNewMessageText = (newText) => {

  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);

}

// MESSAGE ADD




export default state;  