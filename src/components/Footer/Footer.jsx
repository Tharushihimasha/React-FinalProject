import React from 'react'
import { Link } from 'react-router-dom'
import FOOTER_LINKS from '../../assets/footer_links'
import FOOTER_CONTACT_INFO from '../../assets/footer_contact'
import SOCIALS from '../../assets/socials'

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link to="/" className='mb-10 bold-20'>Shoppee</Link>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                  <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                    {col.links.map((link) =>(
                      <Link to="/" key={link}>{link}</Link>
                    ))}
                  </ul>
              </FooterColumn>
            ))}
            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link to="/" key={link.label}>
                       <p>{link.label}:</p><p>{link.value}</p>
                    </Link>
                  ))}
              </FooterColumn>
            </div>
            <div>
              <FooterColumn>
                <ul>
                  {SOCIALS.links.map((link) =>(
                    <Link to="/" key={link}><img src={link} alt="socialIcon"
                    height={22} width={22}></img></Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border bg-gray-20'></div>
        <p children='text-center-regular-14 text-gray-30'>
          2024 Shoppee | All rights reserved.
        </p>
      </div>
    </footer>
  )
};

const FooterColumn = ({title,children}) => {
  return(
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default Footer