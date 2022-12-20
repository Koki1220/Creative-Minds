import React, {useState } from 'react'
import Abimage from '../../images/about.jpg'
import ValueImage from '../../images/values.jpg'
import TeamImage from '../../images/Team.jpg'
import './about.css'
import SectionHead from '../../components/SectionHead'
import { FaUsers } from 'react-icons/fa';

const About = () => {
  const [toggleTab, setTaggleTab] = useState(1);
  const toggleState = (index) => {
    setTaggleTab(index)
  }
  return (
      <div id="about">
        <section className='about__story'>
          <div className='about__container'>
          <SectionHead className="about__head " icon={<FaUsers/>}  title="About-Us" />
          <div className='about__container containers'>
            <div className={toggleTab === 1 ? 'about-btns active-btns':'about-btns' }
              onClick={()=>toggleState(1)}>
              <h3>Our Vision</h3>
            </div>
            <div className={toggleTab === 2 ? 'about-btns active-btns':'about-btns' }
              onClick={()=>toggleState(2)}>
              <h3>Values</h3>
            </div>
            <div  className={toggleTab === 3 ? 'about-btns active-btns':'about-btns' }
              onClick={()=>toggleState(3)}>
              <h3>Team</h3>
            </div>
          </div>
          {/* Vission content */}
          <div className={toggleTab ===1 ? 'content-back active-about':'content-back'}>
            <img className='abt-image' src={Abimage} alt='team-img' />
            <div className='abt-us'>
              <h2>Our Vision</h2>
              <h4>Our vision is to be a leading solutions provider in ERP and e-marketplace in productized services offerings, serving global customers.</h4>
              <div className='mission'>
              <h2>Our Mission</h2>
              <h4>Our vision is to be a leading solutions provider in ERP and e-marketplace in productized services offerings, serving global customers.</h4>
              </div>
            </div>
          </div>

            {/* Values content */}

            <div className={toggleTab ===2 ? 'content-back active-about':'content-back'}>
            <img className='abt-image' src={ValueImage} alt='team-img' />
            <div className='abt-us'>            
              <h2>Values</h2>
              <h4>Collective success – Strive to succeed by ensuring the success of customers and all stakeholders involved,
                  including the society that we operate in, by addressing and adapting to local practices and values.Transparency and integrity – A commitment to be sincere and honest with the highest level of transparency in processes involved in our business dealings with our clients, vendors and personnel.</h4>
            </div>
            </div>
            {/* Team content */}
            <div className={toggleTab ===3 ? 'content-back active-about':'content-back'}>
            <img className='abt-image' src={TeamImage} alt='team-img' />
            <div className='abt-us'>
              <h2>Team</h2>
              <h4>A group of highly motivated, passionate technocrats aimed to revolutionize software design and implementation
                  favoring positive social change.Our strength lies in increasing collaboration and cohesiveness among individuals while focusing on the unique expertise and knowledge of every team member. We believe in Purananuru’s Cosmopolitan values of “Yaathum oore, yaavarum kelir” translating to “All towns are one, all humans our kin”, it is this principle that enables our team to have a common vision while respecting and accepting the individuals different concepts and ideas.We have an environment that promotes family first value to our employees and focuses on
                  improving an individual’s skills and career prospects through clearly defined growth paths.</h4>
            </div>
            </div>      
          </div>
        </section>
      </div>
    


  )
}

export default About