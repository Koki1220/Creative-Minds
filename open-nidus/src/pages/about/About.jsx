import React from 'react'
import Abimage from '../../images/about.jpg'
import MissionImage from '../../images/mission.svg'
import ValueImage from '../../images/Value.jpg'
import TeamImage from '../../images/Team.jpg'
import './about.css'

const About = () => {
  return (
        <div id="about">         
        <section className='about__story'>
          <div className='container about__story-container'>
            <div className='about__section-image'>
              <img src={Abimage} alt='Storyimage'/>
            </div>
            <div className='about__section-content'>
              <h1>Our vision</h1>
              <p>Our vision is to be a leading solutions provider in ERP and e-marketplace in productized services offerings, serving global customers.</p>
            </div>
          </div>

        </section>
        <section className='about__mission'>
          <div className='container about__mission-container'>
            <div className='about__section-content'>
              <h1>Our Mission</h1>
              <p>At OpenNidus, our mission is to: Create solutions that organically integrate with business processes, providing high level of flexibility to organization without compromising on its core values.  Address complexities in business process with innovative applications that has the capability to grow and evolve with the organization.</p>
            </div>
            <div className='about__sections-image'>
              <img src={MissionImage} alt='Missionimage'/>
            </div>
          </div>
        </section>
        <section className='about__story'>
            <div className='container about__story-container'>
              <div className='about__sections-image'>
                <img src={ValueImage} alt='Storyimage'/>
              </div>
              <div className='about__section-content'>
                <h1>Values</h1>
                <p>Collective success – Strive to succeed by ensuring the success of customers and all stakeholders involved,
                  including the society that we operate in, by addressing and adapting to local practices and values.Transparency and integrity – A commitment to be sincere and honest with the highest level of transparency in processes involved in our business dealings with our clients, vendors and personnel.</p>
              </div>
            </div>

    </section>
    <section className='about__team'>
      <div className='container about__team-container'>
        <div className='about__section-content'>
          <h1>Team</h1>
          <p>A group of highly motivated, passionate technocrats aimed to revolutionize software design and implementation
             favoring positive social change.Our strength lies in increasing collaboration and cohesiveness among individuals while focusing on the unique expertise and knowledge of every team member. We believe in Purananuru’s Cosmopolitan values of “Yaathum oore, yaavarum kelir” translating to “All towns are one, all humans our kin”, it is this principle that enables our team to have a common vision while respecting and accepting the individuals different concepts and ideas.We have an environment that promotes family first value to our employees and focuses on
             improving an individual’s skills and career prospects through clearly defined growth paths.</p>
        </div>
        <div className='about__section-image'>
          <img src={TeamImage} alt='Teamimage'/>
        </div>
      </div>

    </section>
    
    </div>

  
  )
}

export default About