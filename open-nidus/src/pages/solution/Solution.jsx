import React from 'react'
import SectionHead from '../../components/SectionHead'
import { solution } from '../../data'
import {GiCutDiamond} from 'react-icons/gi'
import Card from '../../UI/Card'

const Solution = () => {
  return (

    <section className='solution' id="solution">
        <div className='container solution__container'>
         <SectionHead className="solution__head" icon={<GiCutDiamond/>} title="Solution"/>        
            <div className='solution__wrapper'>
                {
                    solution.map(({id,icon,title,desc})=>{
                        return (
                            <Card className="solution__solution" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>

                            </Card>
                        )
                            
                    })
                }

            </div>
        </div>
    </section>
  )
}

export default Solution