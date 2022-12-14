import React,{useState} from 'react'
import SectionHead from '../../components/SectionHead'
import { solution } from '../../data'
import { GiCutDiamond } from 'react-icons/gi'
import Card from '../../UI/Card'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { MdQueryStats, MdSecurity, MdTrackChanges } from 'react-icons/md'
import { TbListDetails } from 'react-icons/tb'
import { CgIfDesign } from 'react-icons/cg'
import './solution.css'


const Solution = () => {
    
    return (

        <section className='solution' id="solution">

            <div className='container solution__container'>
                <SectionHead className="solution__head" icon={<GiCutDiamond />} title="Solution" />
                <div className='solution__wrapper'>
                    <ul>
                        <li>
                            <button  className='btns sd'><TbListDetails /></button >
                            <span>  Nidus ERP</span>

                        </li><br />
                        <li >
                            <button className='btns sd'><MdQueryStats /></button >
                            <span>  Why Nidus ERP?</span>

                        </li><br />
                        <li>
                            <button to='' className='btns sd'><AiOutlineDeploymentUnit /></button >
                            <span>  Deployment Models</span>

                        </li><br />
                        <li>
                            <button to='' className='btns sd'><CgIfDesign /></button>
                            <span> Customization</span>

                        </li><br />
                        <li>
                            <button to='' className='btns sd'><MdSecurity /></button >
                            <span>  Security</span>

                        </li><br />
                        <li>
                            <button to='' className='btns sd'><MdTrackChanges /></button >
                            <span>  Innovation</span>
                        </li>
                    </ul>

                    <div className="solution-right">
                        <TbListDetails className='icon' />
                        <div className='title'>
                            <h1>Nidus ERP</h1>
                        </div>

                        <div className='body'>
                            <p>Your organization’s success demands focus on many different aspects of business. Regardless of the size of the organization, operational complexities are  a reality and the need for accurate record keeping, resource allocations, analysis, planning and reporting are necessary. Most businesses today cannot operate efficiently without some form of computer automation.Nidus ERP addresses the automation requirements of any organization involved any business irrespective of the size of operations. It provides a plethora of inter organizational communication protocols enables you to reduce delays in communications and make critical decisions in an effective and informed manner.</p>
                        </div>


                    </div>
                    {/*<div className={toggleState === 2 ? "solution-right active-modal" : "solution-right"}>
          <TbListDetails  className='icon'/>          
            <div className='title'>            
              <h1>Why ERP?</h1>
            </div>
            
            <div className='body'>
              <p>Your organization’s success demands focus on many different aspects of business. Regardless of the size of the organization, operational complexities are  a reality and the need for accurate record keeping, resource allocations, analysis, planning and reporting are necessary. Most businesses today cannot operate efficiently without some form of computer automation.Nidus ERP addresses the automation requirements of any organization involved any business irrespective of the size of operations. It provides a plethora of inter organizational communication protocols enables you to reduce delays in communications and make critical decisions in an effective and informed manner.</p>
            </div>


    </div>*/}
                </div>

            </div>
        </section>
    )
}

export default Solution

