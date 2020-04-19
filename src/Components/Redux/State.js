
let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How is your..?', likesCount: 9},
            {id: 3, message: 'Good afternoon'},
            {id: 4, message: 'What a wonderful day'},
            {id: 5, message: 'doing my homework'},
            {id: 6, message: 'I am in the car'},
        ]
    },
    dialogsPage: {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messagesData: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How is your..?'},
        {id: 3, message: 'Good afternoon'},
        {id: 4, message: 'What a wonderful day'},
        {id: 5, message: 'doing my homework'},
        {id: 6, message: 'I am in the car'},
    ]
},
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost)
}


    export default state;