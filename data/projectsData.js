import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
  {
    id: 1,
    title: 'Midas Capital',
    repoUrl: 'https://github.com/cowboyox/Midas-Capital',
    location: 'Hamburg, Germany',
    img: '/portfolio/images/midas (1).png',
    duration: 'Feb 2021 - 2024 Mar',
    tags: 'UI/UX',
    shortTags: 'Next.js + Web3',
    images: [
      {
        id: uuidv4(),
        title: 'DeFi Platform',
        img: '/portfolio/images/midas (1).png',
      },
      {
        id: uuidv4(),
        title: 'DeFi Platform',
        img: '/portfolio/images/midas (2).png',
      },
      {
        id: uuidv4(),
        title: 'DeFi Platform',
        img: '/portfolio/images/midas (3).png',
      },
    ],
    tech: [
      {
        title: 'Tools & Technologies',
        techs: [
          'React.js',
          'Next.js',
          'Node.js',
          'Wagmi',
          'web3.js',
          'ethers.js',
          'Viem',
          'TypeScript',
          'Tanstack Query',
          'TailWindCSS',
          'Chakra UI',
        ],
      },
    ],
    description: [
      {
        id: uuidv4(),
        details:
          'Implemented responsive and user-friendly web application. Integrated with Ethereum blockchain using Ethers.js library enabling interaction with smart contracts, wallet connectivity, and transaction handling.',
      },
    ],
  },
];
