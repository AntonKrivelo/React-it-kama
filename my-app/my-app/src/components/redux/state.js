

let state = {

    profilePage: {
        postsData: [
            {message:"hello my friends, my name is Anton", counter: 18, id:1},
            {message:"hi, how are you?", counter: 20, id:2},
            ],
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
    },
    sideBar: {
      friendsData: [
        {name: "Antonio", id: 1},
        {name: "Viktor", id: 2},
        {name: "Valera", id: 3},
      ],
    },
  };
  


 export let addPost = (postMessage) => {
    let newPost = {
      id: 3,
      message: postMessage,
      counter: 0,
    };
    state.profilePage.postsData.push(newPost);
  };

export default state;  