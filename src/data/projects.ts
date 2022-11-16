import Angular from '@assets/angular.svg';
import React from '@assets/react.svg';
import Redis from '@assets/redis.svg';
import NodeJs from '@assets/nodejs.svg';
import MongoDB from '@assets/mongodb.svg';
import Aws from '@assets/aws.svg';
import Tailwind from '@assets/tailwind.svg';
import SocketIo from '@assets/socket-io.svg';
import Postgres from '@assets/postgresql.svg';
import Rxjs from '@assets/rxjs.svg';
import Webrtc from '@assets/webrtc.svg';
import Express from '@assets/express.svg';
import FramerMotion from '@assets/framer-motion.svg';
import Typescript from '@assets/typescript.svg';
import Chartjs from '@assets/chartjs.svg';
import PokeApi from '@assets/pokeapi.png';
import Stripe from '@assets/stripe.svg';
import Websocket from '@assets/websocket.svg';

// previews
import Pokecommerce from '@assets/poke-commerce.png';
import CollaborativeIde from '@assets/collaborative-ide.png';
import TicTacToe from '@assets/tic-tac-toe.png';
import FileManager from '@assets/file-manager.png';

export type PortfolioProject = {
  title: string;
  description: string;
  websiteImage: string;
  websiteLink: string;
  githubLink: string;
  technologiesUsed: {
    frontEnd: Technology[];
    backEnd: Technology[];
  };
  alignment: 'left' | 'right';
};

export type Technology = {
  name: string;
  icon: string;
};

// description:
// 1) tech features of the project
// 2) describe

// capegoat
// video chat
// ssr
// 5,000 monthly active users

const projects: PortfolioProject[] = [
  {
    title: 'Capegoat',
    description:
      'Boost productivity, collaboration, and focus by joining the ultimate online study room and meet students from around the world!',
    websiteImage: 'https://capegoat.com/assets/preview/home.png',
    websiteLink: 'https://www.capegoat.com',
    githubLink: '',
    technologiesUsed: {
      frontEnd: [
        { name: 'Angular', icon: Angular },
        { name: 'Rxjs', icon: Rxjs },
        { name: 'Tailwind CSS', icon: Tailwind },
        { name: 'Webrtc', icon: Webrtc },
        { name: 'Typescript', icon: Typescript },
      ],
      backEnd: [
        { name: 'Node', icon: NodeJs },
        { name: 'SocketIo', icon: SocketIo },
        { name: 'Redis', icon: Redis },
        { name: 'Mongodb', icon: MongoDB },
        { name: 'Aws', icon: Aws },
        { name: 'Express', icon: Express },
      ],
    },
    alignment: 'left',
  },
  {
    title: 'Multiplayer Tic Tac Toe',
    description: 'Play tic tac toe with your friends online!',
    websiteImage: TicTacToe,
    websiteLink: 'https://tictactoe-ib.netlify.app',
    githubLink: 'https://github.com/AbdallaIB/tic-tac-toe',
    technologiesUsed: {
      frontEnd: [
        { name: 'React', icon: React },
        { name: 'Tailwind CSS', icon: Tailwind },
        { name: 'Framer Motion', icon: FramerMotion },
        { name: 'Typescript', icon: Typescript },
      ],
      backEnd: [
        { name: 'Node', icon: NodeJs },
        { name: 'SocketIo', icon: SocketIo },
        { name: 'Redis', icon: Redis },
        { name: 'Express', icon: Express },
      ],
    },
    alignment: 'right',
  },
  {
    title: 'Cloud File Storage',
    description: 'Store your files in the cloud and access them anywhere!',
    websiteImage: FileManager,
    websiteLink: 'https://www.capegoat.com',
    githubLink: 'https://github.com/AbdallaIB/file-manager',
    technologiesUsed: {
      frontEnd: [
        { name: 'React', icon: React },
        { name: 'Tailwind CSS', icon: Tailwind },
        { name: 'Chart.js', icon: Chartjs },
      ],
      backEnd: [
        { name: 'Node', icon: NodeJs },
        { name: 'PostgresSql', icon: Postgres },
        { name: 'Aws', icon: Aws },
        { name: 'Express', icon: Express },
      ],
    },
    alignment: 'left',
  },
  {
    title: 'Pokemon E-commerce',
    description: 'Pokémon E-commerce platform to shop for your favorite Pokémon merchandise.',
    websiteImage: Pokecommerce,
    websiteLink: 'https://poke-commerce.netlify.app',
    githubLink: 'https://github.com/AbdallaIB/pokemon-ecommerce',
    technologiesUsed: {
      frontEnd: [
        { name: 'React', icon: React },
        { name: 'Tailwind CSS', icon: Tailwind },
        { name: 'Stripe', icon: Stripe },
      ],
      backEnd: [{ name: 'PokeApi', icon: PokeApi }],
    },
    alignment: 'right',
  },
  {
    title: 'Collaborative Ide',
    description: 'Collaborative platform to code with your friends in real-time.',
    websiteImage: CollaborativeIde,
    websiteLink: 'https://collaborative-ide.netlify.app',
    githubLink: 'https://github.com/AbdallaIB/collaborative-ide',
    technologiesUsed: {
      frontEnd: [
        { name: 'React', icon: React },
        { name: 'Tailwind CSS', icon: Tailwind },
        { name: 'Typescript', icon: Typescript },
      ],
      backEnd: [
        { name: 'Node', icon: NodeJs },
        { name: 'Websocket', icon: Websocket },
        { name: 'Mongodb', icon: MongoDB },
        { name: 'Express', icon: Express },
      ],
    },
    alignment: 'left',
  },
];
export default projects;
