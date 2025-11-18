import React from 'react';
import './style.scss';
import { useFooter } from './useFooter';
import type { FooterSocialsInterface } from '../../types/types';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { FooterData } = useFooter();
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="socials">
          <h3>Contact with me</h3>
          <div className="socials-grid">
            {FooterData?.map((data: FooterSocialsInterface) => (
              <Link target="_blank" className="link-social" key={data.id} to={data.link}>
                {data.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
