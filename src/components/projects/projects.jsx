import onlineGarageSale from "../../assets/pictures/online-garage-sale.png";
import genshinCompanion from "../../assets/pictures/genshin-companion.png";
import blog from "../../assets/pictures/blog.png";
//import pokedex from "../../assets/pictures/pokedex.png";

//import memoryGame from "../../assets/pictures/memory-game.png";
import rps from "../../assets/pictures/rps.png";
import pokedexDemo from "../../assets/gif/pokedexDemo.gif";
import memoryGameDemo from "../../assets/gif/memoryGameDemo.gif";

export const projects = [
  {
    name: "Online Garage Sale",
    github: "https://github.com/pongpwner/online-garage-sale",
    description: "ecommerce website",
    link: onlineGarageSale,
    live: "https://eloquent-jelly-7d23fd.netlify.app/",
    id: 1,
    technologies:
      "javascript, react, redux, redux sagas, react-router, firebase, stripe payments",
    modalDescription: (
      <div className="description">
        <p>
          About: This is a practice ecommerce website. The goal is to create a
          site for myself to sell items. For now it is only a practice project,
          but maybe one day if I want to sell things I can use it for real.
        </p>
        <p>
          What I learned: I got a lot of practice building resuable components
          with React. I used SCSS to make styling components easier. I use redux
          to store the state of the cart, user data, and shop data. Using redux
          allows these states to be accessible in any component. I also used
          sagas along with redux to build this project. Sagas is very powerful
          and makes code easy to test with the help of redux logger keeping
          track of the state step by step. Sagas is very useful for calling
          different combinations of actions. One example of this is in my
          project is dispatching the userSignIn action in a saga after the
          userSignUp action is dispatched. I learned how to authenticate users
          with firebase, and how to store data in firestore. I used the stripe
          payments api to build the ui for the payments section. Still need to
          add backend to accept payments.
        </p>
      </div>
    ),
  },

  {
    name: "Genshin Impact Companion",
    github: "https://github.com/pongpwner/genshin-calculator",
    description: "companion web app for the game Genshin Impact",
    link: genshinCompanion,
    live: "https://elegant-cranachan-8da561.netlify.app/",
    id: 2,

    technologies:
      "javascript, react, react-router, redux, redux-thunk, genshindev api",
    modalDescription: (
      <div className="description">
        <p>
          About: This is an app that makes common calculations in Genshin Impact
          very convenient. The input is color coded based on the rarity of the
          material. You do not have to fill in every field, just the ones you
          are interested in. Then the app will make the calculations for you.
        </p>
        <p>
          What I learned: This is my first project I created using react class
          components. I later refactored it into storing the state with redux.
          The I used the reselect library to create selectors to grab pieces of
          state to use in mapStateToProps. I learned to use a scalable folder
          structure with components, pages, redux, and images all having their
          own folder. Each component has its own folder with a stylesheet to go
          with it. I used react react-router to link to different pages on my
          app. I used hooks for certain components that did not need their state
          used in other places. I used redux-thunk to handle api calls to the
          genshin dev api. I experimented with jest to test my calculation
          functions.
        </p>
      </div>
    ),
  },
  {
    name: "Pokedex",
    github: "https://github.com/pongpwner/pokedex",
    description: "See all Pokemon and their information",
    link: pokedexDemo,
    live: "https://pongpwner.github.io/pokedex/",
    id: 3,
    technologies: "javascript, react, pokeapi",
    modalDescription: (
      <div className="description">
        <p>
          About: Displays all pokemon with their information. The info cards
          flip over when you hover on them. The info cards open a modal with
          more additional information when clicked on.
        </p>
        <p>
          What I learned: I got practice with css animations by making the cards
          flip. I got practice using async functions from making api calls to
          the pokeapi. I stored the state with the react context api.
        </p>
      </div>
    ),
  },
  {
    name: "Rock Paper Scissors",
    github: "https://github.com/pongpwner/rock-paper-scissors",
    description: "Front End Mentor coding challenge.  Play rock paper scissors",
    link: rps,
    live: "https://pongpwner.github.io/rock-paper-scissors/",
    id: 4,
    technologies: "javascript, react, SCSS",
    modalDescription: (
      <div className="description">
        <p>About: Play Rock Paper Scissors in browser.</p>
        <p>
          What I learned: This project let me practice coding a predesigned
          website and was good css practice.
        </p>
      </div>
    ),
  },
  {
    name: "Anime Character Memory Game",
    github: "https://github.com/pongpwner/anime-character-memory-game",
    description: "Do not click the same character twice!",
    link: memoryGameDemo,
    live: "https://anime-character-memory-game.netlify.app/",
    id: 5,
    technologies: "javascript, react, styled components ",
    modalDescription: (
      <div className="description">
        <p>
          About: Play a game that tests your memory. Don't click the same
          character twice.
        </p>
        <p>
          What I learned: Some notable skills I practiced while making this
          project are using styled components, array manipulation, and state
          management. State management was important for keeping track of the
          score, game settings, and which characters have been clicked. The
          character board is made of an array of character tiles, and each time
          a tile is clicked, the array is shuffled. I also learned typescript by
          refactoring this from javascript to typescript.
        </p>
      </div>
    ),
  },
  {
    name: "Blog",
    github: "https://github.com/pongpwner/blog-front-end",
    description: "Front End Blog",
    link: blog,
    live: "https://bucolic-torte-a82b04.netlify.app",
    id: 6,
    technologies: "javascript, react, sass, node, passport, JWT",
    modalDescription: (
      <div className="description">
        <p>About: Fullstack blog project.</p>
        <p>
          I learned a lot from making this fullstack project. This was good
          practice for wrting a RESTful API, and using JWT for authorization for
          protected routes. I also learned about cors to whitelist the front end
          and CMS to have access to the api. Many of the API functions rely on
          using mongodb and mongoose.
        </p>
      </div>
    ),
  },
];
