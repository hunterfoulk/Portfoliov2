import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./state";
import aimpic1 from "./newimages/aim1.jpg";
import aimpic2 from "./newimages/aim2.jpg";
import aimpic3 from "./newimages/aim3.jpg";
import airbnbpic1 from "./newimages/airbnbpic1.jpg";
import airbnbpic2 from "./newimages/airbnbpic2.jpg";
import airbnbpic3 from "./newimages/airbnbpic3.jpg";
import fashionapp1 from "./newimages/fashion1.jpg";
import fashionapp2 from "./newimages/fashion2.jpg";
import fashionapp3 from "./newimages/fashion3.jpg";
import movieapp1 from "./images/movieapp1.PNG";
import movieapp2 from "./images/movieapp2.PNG";
import movieapp3 from "./images/movieapp3.PNG";
import neetchat1 from "./newimages/neet1.jpg";
import neetchat2 from "./newimages/neet2.jpg";
import neetchat3 from "./newimages/neet3.jpg";
import trellopic1 from "./images/trellopic1.PNG";
import trellopic2 from "./images/trellopic2.PNG";
import trellopic3 from "./images/trellopic3.PNG";
import typegrampic1 from "./newimages/type1.jpg";
import typegrampic2 from "./newimages/type2.jpg";
import typegrampic3 from "./newimages/type3.jpg";
import huntrecpic1 from "./newimages/rec1.jpg";
import huntrecpic2 from "./newimages/rec2.jpg";
import huntrecpic3 from "./newimages/rec3.jpg";

let initialState = {
  projects: [
    {
      project: "AirBnB",
      description:
        "Complete AirBnB clone that i put my spin and style on. Create an account and list your house with all its features! ",
      thumbnail: airbnbpic1,
      demo: "https://h-airbnb.netlify.app",
      source: "https://github.com/hunterfoulk/AirBnb",
      slides: [airbnbpic1, airbnbpic2, airbnbpic3],
      p1:
        "Complete AirBnB clone that i put my spin and style on. Create an account and list your house with an image of your house with the location, number of baths and beds and the price of the house!",
      tech: [
        "React",
        "Redux/Context API",
        "Node/Express",
        "PostgreSQL",
        "AWS RDS/AWS S3 Bucket",
        "HTML",
        "CSS",
      ],
      plans:
        "Possibly plan to add features where a user can pick a house of their staying desire and rent it for as long as they choose.",
      route: "/airbnb",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "TypeGram",
      description:
        " Social Media image posting and interactive platform inspired by instagram written in TypeScript!",
      thumbnail: typegrampic1,
      demo: "https://typegram.netlify.app",
      source: "https://github.com/hunterfoulk/TypeGram",
      slides: [typegrampic1, typegrampic2, typegrampic3],
      p1:
        "Social media platform/instagram inspired application i spent a lot of time writing in typescript thats full of features like posting you own images,updating your own profile and liking and comment on your friends posts.",
      tech: [
        "React",
        "TypeScript",
        "Redux/Context API",
        "Node/Express",
        "PostgreSQL",
        "AWS RDS/AWS S3 Bucket",
        "HTML",
        "CSS",
      ],
      plans:
        "mostly looking to improve the UI and interactiveness with the user exerpience.",
      route: "/typegram",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "Aim-Training",
      description:
        "First person shooter game built in the browser to help players work on increasing their accuracy and reaction time. ",
      thumbnail: aimpic1,
      demo: "https://keen-pike-e36229.netlify.app",
      source: "https://github.com/hunterfoulk/Aim-Training",
      slides: [aimpic1, aimpic2, aimpic3],
      p1:
        "First person shooter game aim trainer and reaction time builder built meant to help you react faster and improve your percise aim. Try and beat your highest score to get better!",
      tech: ["React", "Node/Express", "MongoDB", "HTML", "Sass"],
      plans:
        "I plan to add difficulty levels and multiple different game settings to cater to what area of skill you are trying to improve in",
      route: "/aimtraining",
      nodemo: "",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "Hunt-Recruiter",
      description:
        "Job Searching and posting application to find and apply at your dream job and great companies to find you!  ",
      thumbnail: huntrecpic1,
      demo: "https://h-airbnb.netlify.app",
      source: "https://github.com/hunterfoulk/HuntRecruiter",
      slides: [huntrecpic1, huntrecpic2, huntrecpic3],
      p1:
        "Employer and job searching application for you to finally find that dream job of yours. Send in your resume to your favorite companies!",
      tech: [
        "React",
        "Redux/Context API",
        "NodeMailer",
        "Node/Express",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
      plans:
        "no future plans application is finished to my original goal i set.",
      route: "/airbnb",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "CompanyBoard",
      description:
        "Company board i made for employees of the company to keep track of tasks and work flow.",
      thumbnail: trellopic2,
      demo: "https://ecstatic-bartik-098f59.netlify.app",
      source: "https://github.com/hunterfoulk/Trello",
      slides: [trellopic1, trellopic2, trellopic3],
      p1:
        "Trello board made for employees to create tasks they are working on that week showing the status of the task whether it is finished or not and also who is working on the task or what team is working on the task. Each employee can log in and get assigned their own cool profile picture!  ",
      tech: [
        "React",
        "Node/Express",
        "Redux/ Context API",
        "PostgreSQL",
        "HTML",
        "Scss",
      ],
      plans:
        "Will further the UI design and add a feature to where employees can add pictures of themselves as their profile pictures if they choose. ",
      route: "/trello",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "Fashion-App",
      description:
        "My fashionable e-commerce clothing brand website built to show off mens and womens fashion products.",
      thumbnail: fashionapp2,
      demo: "",
      source: "https://github.com/hunterfoulk/E-commerce-app",
      slides: [fashionapp1, fashionapp2, fashionapp3],
      p1:
        "Fashionble e-commerce clothing brand application you can search for and browse mens and womens stylish clothes before checking out.",
      tech: ["React", "Node/Express", "MongoDB", "HTML", "CSS"],
      plans:
        "Looking to add and extend my knowledge and add a fully functional checkout system to the cart feature.",
      route: "/fashionapp",
      nodemo: "Demo currently unavaible",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "NeetChat",
      description:
        "Chatroom application where users can create and join or create a chatroom and hangout together. ",
      thumbnail: neetchat3,
      demo: "",
      source: "https://github.com/hunterfoulk/Neet-Chat",
      slides: [neetchat1, neetchat2, neetchat3],
      p1:
        "Chatroom application where users can create and join or create a chatroom and tell your everyone what room your in so they can join and hangout as well ",
      tech: [
        "React",
        "Node/Express",
        "Redux/ Context API",
        "SocketIO",
        "HTML",
        "Scss",
      ],
      plans:
        "Will restructure the private messages chat feature for fully functionally private messages to anyone else in the room you are in. ",
      route: "/neetchat",
      nodemo: "Demo currently unavaible",
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      project: "MovieDB",
      description:
        "Movie lookup and search using the IMDB api showing mulitple details about each movie you want to know about. ",
      thumbnail: movieapp1,
      demo: "https://loving-panini-badab5.netlify.app",
      source: "https://github.com/hunterfoulk/MovieDB",
      slides: [movieapp1, movieapp2, movieapp3],
      p1:
        "Search your favorite movie or movies and view the details,description and rating of that movie!",
      tech: ["React", "Redux/ Context API", "Ant-Design", "HTML", "CSS"],
      plans:
        "No real future plans the application is done and working as fully intended!",
      route: "/moviedb",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "flip":
      return {
        ...state,
        darkState: action.darkState,
      };
    case "theme":
      return {
        ...state,
        theTheme: action.theTheme,
      };
    default:
      return state;
  }
};

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById("root")
);
