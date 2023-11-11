import React from 'react';
import { Links, products, socilaMedia } from '../../data';
import { Link } from "react-router-dom";
import FooterCard from './FooterCard';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { FaLocationArrow } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className='footer' id='footer'>
        {/* styled in main.css */}
        <section className='footer-card-container section-end-border'>
          <FooterCard
            Icon={BsFillTelephoneFill}
            title='Call'
            link='tel:9815490890'
            decs='+977-9815490890'
          />
          <FooterCard
            Icon={HiMail}
            title='Mail'
            link='mailto:csitassociationbmc@gmail.com'
            decs='csitassociationbmc@gmail.com'
          />
          <FooterCard
            Icon={FaLocationArrow}
            title='Location'
            link='/'
            decs='Butwal, Nepal'
          />
        </section>
        <div className='Sections-list-container'>
          <section className='QuickLink section-end-border'>
            <div>
              <h5 className='footer-List_title'>Quick Links</h5>
              <div className='footer-lists-container'>
                {Links.map((link, id) => (
                  <Link
                    className="footer-link-list pointer"
                    key={`${link.title}-${id}`}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className='RecentEvents section-end-border'>
            <div>
              <h5 className='footer-List_title'>Recent Events</h5>
              <div className='footer-lists-container'>
                {products.slice(-5).map((item, index) => (
                  <div
                    className="footer-link-list pointer"
                    key={index}
                  >
                    {item.title}
                  </div>
                ))}

              </div>
            </div>
          </section>
          <section className='connectWithUs'>
            <div>
              <h5 className='footer-List_title'>Connect with us</h5>
              <div className='footer-lists-container'>
                {socilaMedia.map((item, index) => (
                  <a
                    className="footer-link-list pointer"
                    key={`${index}`}
                    href={item.path}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </footer>
      <section className="copyright" >Copyright &copy; {date.getFullYear()} CSIT   Association of BMC | All Rights Reserved
      </section>
    </>
  );
}

export default Footer;
