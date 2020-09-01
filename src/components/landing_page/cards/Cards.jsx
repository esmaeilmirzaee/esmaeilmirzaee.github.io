import React from 'react';
import { Container } from '@material-ui/core';
import Card from './Card';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import { RiPencilRuler2Line } from 'react-icons/ri';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import { FiFigma } from 'react-icons/fi';
import { MdApps } from 'react-icons/md';
import { IoLogoDribbble } from 'react-icons/io';
import GrVirtualMachine from '../../../assets/img/vbox__logo.svg';

import {
  FaHtml5,
  FaSass,
  FaCss3Alt,
  FaJava,
  FaPowerOff,
  FaDocker,
  FaCentos,
  FaRedhat,
  FaUbuntu,
  FaMobileAlt,
} from 'react-icons/fa';
import {
  DiJavascript1,
  DiPostgresql,
  DiMongodb,
  DiReact,
  DiPhotoshop,
  DiIllustrator,
  DiDebian,
  DiWebplatform,
} from 'react-icons/di';

function Cards() {
  const cards = [
    {
      title: 'Developer',
      icon: <CodeOutlinedIcon className='head__icon' />,
      subtitle:
        'I love to breathe life into ideas & make them the next generation of applications in either browser or phone.',
      mainTitle: 'Technologies',
      mainSubtitle: [
        { icon_name: <FaHtml5 className='icon' /> },
        { icon_name: <FaSass className='icon' /> },
        { icon_name: <FaCss3Alt className='icon' /> },
        { icon_name: <DiJavascript1 className='icon' /> },
        { icon_name: <FaJava className='icon' /> },
        { icon_name: <DiPostgresql className='icon' /> },
        { icon_name: <DiMongodb className='icon' /> },
      ],
      bodyTitle: '',
      bodySubtitle: '',
      footTitle: 'Frameworks',
      footSubtitle: [
        { icon_name: <DiReact className='footer__icon' /> },
        { icon_name: <FaPowerOff className='footer__icon' /> },
      ],
    },
    {
      title: 'Designer',
      icon: <RiPencilRuler2Line className='head__icon' />,
      subtitle: 'I value simple design, thoughtful and meaningful structure.',
      mainTitle: 'Art works I like to do',
      mainSubtitle: [
        { icon_name: <DiWebplatform className='icon' /> },
        { icon_name: <FaMobileAlt className='icon' /> },
        { icon_name: <MdApps className='icon' /> },
        { icon_name: <IoLogoDribbble className='icon' /> },
      ],
      bodyTitle: '',
      bodySubtitle: '',
      footTitle: 'Applications I leverage',
      footSubtitle: [
        { icon_name: <FiFigma className='footer__icon' /> },
        { icon_name: <DiPhotoshop className='footer__icon' /> },
        { icon_name: <DiIllustrator className='footer__icon' /> },
      ],
    },
    {
      title: 'DevOps',
      icon: <CloudDoneOutlinedIcon className='head__icon' />,
      subtitle:
        'Before becoming a software developer, I worked as a DevOps engineer.',
      mainTitle: 'Linux Administration',
      mainSubtitle: [
        { icon_name: <FaCentos className='icon' /> },
        { icon_name: <DiDebian className='icon' /> },
        { icon_name: <FaRedhat className='icon' /> },
        { icon_name: <FaUbuntu className='icon' /> },
      ],
      bodyTitle: 'Database Management',
      bodySubtitle: [
        <DiPostgresql className='icon' />,
        <DiMongodb className='icon' />,
      ],
      footTitle: 'Virtualisation and containerisation',
      footSubtitle: [
        { icon_name: <FaDocker className='footer__icon' /> },
        {
          icon_name: (
            <img
              src={GrVirtualMachine}
              className='footer__icon'
              style={{ color: '#ffffff', width: '10%' }}
            />
          ),
        },
      ],
    },
  ];
  return (
    <Container className='cards' style={{ display: 'flex' }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          icon={card.icon}
          subtitle={card.subtitle}
          mainTitle={card.mainTitle}
          mainSubtitle={card.mainSubtitle}
          bodyTitle={card.bodyTitle}
          bodySubtitle={card.bodySubtitle}
          footTitle={card.footTitle}
          footSubtitle={card.footSubtitle}
        />
      ))}
    </Container>
  );
}

export default Cards;
