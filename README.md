# ChatterBox

![Screenshot from 2021-06-17 11-01-37](https://user-images.githubusercontent.com/44138832/122337188-9e50c880-cf5b-11eb-9538-d662932387ef.png)
![Screenshot from 2021-06-17 11-02-33](https://user-images.githubusercontent.com/44138832/122337204-a1e44f80-cf5b-11eb-8f11-ea15e2c46aea.png)

## Introduction

ChatterBox is a real-time chat application that is made with the help of a real-time, socket-based API called ChatEngine. Features include

- user roles
- creating new chat rooms
- login using Google and Github
- read receipts
- indication to know that the user is typing
- sending images
- inviting other users to join the chat and many more.

## Technology Stack & Concepts

- ReactJS
- ChatEngine API
- Firebase
- Context API
- Lazy loading
- Local Storage to persist user after page refresh

## Run This App Locally

Run the below command to install the dependencies

```sh
npm install
```

Run the below command to start the app

```sh
npm start
```

You need to include the following variables in your environment to run this application locally. For just using this application, you do not require this.

| Key                              | Obtained from |
| -------------------------------- | ------------- |
| REACT_APP_API_KEY                | Firebase      |
| REACT_APP_AUTH_DOMAIN            | Firebase      |
| REACT_APP_PROJECT_ID             | Firebase      |
| REACT_APP_STORAGE_BUCKET         | Firebase      |
| REACT_APP_MESSAGING_SENDER_ID    | Firebase      |
| REACT_APP_APP_ID                 | Firebase      |
| REACT_APP_CHAT_ENGINE_PROJECT_ID | ChatEngine    |
| REACT_APP_CHAT_ENGINE_SECRET     | ChatEngine    |
