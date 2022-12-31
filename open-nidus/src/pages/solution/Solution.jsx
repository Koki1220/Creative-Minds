import React,{Fragment} from 'react'
import SectionHead from '../../components/SectionHead'
import { GiCutDiamond } from 'react-icons/gi';
import './solution.css'
const Solution = () => {


  return (

    <Fragment>
      <section className='solution' id="solution">
        <div className='container solution__container'>
          <SectionHead className="solution__head" icon={<GiCutDiamond/>} title="Solution" />
          <div className='solution-content'>
              <h1>Nidus ERP</h1>
              <p>Your organization’s success demands focus on many different aspects of business. Regardless of the size of the organization, operational complexities are a reality and the need for accurate record keeping, resource allocations, analysis, planning and reporting are necessary. Most businesses today cannot operate efficiently without some form of computer automation. </p><br/>
              <p>Nidus ERP addresses the automation requirements of any organization involved any business irrespective of the size of operations. It provides a plethora of inter organizational communication protocols enables you to reduce delays in communications and make critical decisions in an effective and informed manner.</p><br/>
            
              <h1>Why Nidus ERP? </h1>
              <p>Nidus ERP is a software that is provided as independent modules that can be integrated to create a business solution that can be as large as to address all your business processes or as minimal as to address a single department of your business. This modularity along with its SaaS capability and distributed processing nature makes it a flexible and cost-effective solution that be adopted by organizations of all size.</p><br/>
          
              <h1>Deployment Models</h1>
              <p>The system can be deployed on premise, in a cloud or can be availed as Software as a Service (SaaS), with the option of availing the system over internet and retaining your data on your premises. Nidus ERP can also be deployed on your personal android devices to provide access to your business information at any time as easily as if you were in your office.</p><br/>
            
              <h1>Customization</h1>
              <p>Customization capabilities are extensive throughout the product, with the product menu and user interface being fully customizable and configurable per user. Nidus ERP’s modularity supports extensive customization with minimal cost.</p><br/>
            
              <h1>Security</h1>
              <p>Your data is the lifeblood of your organization and the integrity and security of that data is a top priority. Nidus ERP incorporates system-wide facilities aimed at securing the system from unauthorized access. Over and above this, security can be set throughout the system by operator or by role. Securities can also be set per operator against transactions and activities.</p><br/>
            
              <h1>Innovation</h1>
              <p>With an ongoing feedback from our existing customers along with evaluation business and technology trends, Nidus ERP is a continuously evolving product to ensure your business has access to latest technologies and practices to provide your business an edge over others.</p>
          </div>            
          
                 
           
        </div>
      </section>
    </Fragment>
  )
}

export default Solution