const personalProjects = [
  {
    date: 'January 2018',
    title: 'Smart Security Systems (nwHacks 2018)',
    paragraphs: ['In this project, we are building a smart home security IoT system. We programmed a motion sensor to detect a movement which triggers a camera to continuously take pictures of the object. Pictures taken will be analyzed on the server where we detect if the object is actually a human and from a known family members. If the object is unrecognized, the server will send an SMS notification to the home owners with a link to view the pictures. The home owners will be given an option to make appropriate actions such as calling 911.', 'I did this project with two other engineers at a Hackathon. The other two engineers were working on the embedded software for the micro-controller (unfortunately, the code was not merged to this project) and I was mostly working on the server handler, and a little bit of client viewer (for viewing the pictures).', 'Tools used: Python, Node.js STDLib, AWS, React, Microsoft API'],
  },
  {
    date: 'July 2018',
    title: 'Prodapp',
    paragraphs: ['Prodapp (stands for “productive app”) is a simple to-do mobile app that allows users to manage and break down a big goal into smaller chunks called subtasks. Each subtask is nested inside a task, and you can make the subtasks as infinitely deep as you want!', 'For this project, I experimented with React Native with Expo SDK. I also use Redux for app state management.'],
  },
  {
    date: 'June 2017',
    title: 'AUTO-FOLLEY at GLOBAL AI HACKATHON (1st RUNNER UP)',
    paragraphs: ['Using artificial intelligence (AI), Auto-Foley watch movies by reading the subtitles, finds the funny parts, and add a given sound effect to these funny parts. We implement this AI by using pysrt to parse the subtitles, spaCy to do natural language processing and sentiment analysis, and ffmpeg to add the sound effect to the movie at the right times.', 'I built a subtitle preprocessor to sentiment analyzer that shifts the seconds in the .srt to match with the video.'],
  },
  {
    date: 'October 2018',
    title: 'DAGQL (Directed Acyclic Graph Query Language)',
    paragraphs: ['Designed and implemented a DSL for querying arbitrary DAGs such as Provenance graph and File System.'],
  },
  {
    date: 'August 2018',
    title: 'Team Generator',
    paragraphs: ['Made a web app that helps sports drop-in organizers divide players into teams using bin packing algorithm.'],
  },
  {
    date: 'July 2018',
    title: 'Stupnotes',
    paragraphs: ["It is intended to help you log what you have done for the day so that you don't get confused what to say on stand-up (this is inspired by the vagueness of my standup updates and my frustration to remember everything I did the day before)."],
  },
];

export default personalProjects;
