import type { FooterSocialsInterface } from '../../types/types';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

export const useFooter = () => {
  const FooterData: FooterSocialsInterface[] = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/azadev/',
      icon: <FaLinkedin className="icon" />,
    },
    {
      id: 2,
      link: 'https://github.com/azadev3',
      icon: <FaGithub className="icon" />,
    },
    {
      id: 3,
      link: 'https://www.instagram.com/codewithazad/',
      icon: <FaInstagram className="icon" />,
    },
    {
      id: 4,
      link: 'https://www.youtube.com/@azadevv',
      icon: <FaYoutube className="icon" />,
    },
  ];

  return { FooterData }
};
