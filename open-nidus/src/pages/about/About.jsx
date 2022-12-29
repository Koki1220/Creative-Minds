import React, { useState } from 'react'
import './about.css'
import SectionHead from '../../components/SectionHead'
import { FaUsers } from 'react-icons/fa';

const About = () => {
  const [toggleTab, setTaggleTab] = useState(1);
  const toggleState = (index) => {
    setTaggleTab(index)
  }
  return (
    <section className='about' id="about">
      <div className='container about__container'>
        <SectionHead className="about__head" icon={<FaUsers />} title="About-US" />
        <div className='about-content'>
          <h1>Vision</h1>
          <p>Our vision is to be a leading solutions provider in ERP and e-marketplace in productized services offerings, serving global customers.</p><br />
          <h1>Mission</h1>
          <h4>At OpenNidus, our mission is to:</h4>
          <ul className='mission-list'>
            <li>Create solutions that organically integrate with business processes, providing high level of flexibility to organization without compromising on its core values.</li>
            <li>Address complexities in business process with innovative applications that has the capability to grow and evolve with the organization.</li>
          </ul>

          <h1>Values</h1>
          <li>Collective success – Strive to succeed by ensuring the success of customers and all stakeholders involved, including the society that we operate in, by addressing and adapting to local practices and values.</li>
          <p>Transparency and integrity – A commitment to be sincere and honest with the highest level of transparency in processes involved in our business dealings with our clients, vendors and personnel.</p><br/>


          <h1>Team</h1>
          <p>A group of highly motivated, passionate technocrats aimed to revolutionize software design and implementation favoring positive social change.
            Our strength lies in increasing collaboration and cohesiveness among individuals while focusing on the unique expertise and knowledge of every team member. We believe in Purananuru’s Cosmopolitan values of “Yaathum oore, yaavarum kelir” translating to “All towns are one, all humans our kin”, it is this principle that enables our team to have a common vision while respecting and accepting the individuals different concepts and ideas.
            We have an environment that promotes family first value to our employees and focuses on improving an individual’s skills and career prospects through clearly defined growth paths.</p>

        </div>

      </div>
    </section>



  )
}

export default About