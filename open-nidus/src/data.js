import {SiAirbnb} from 'react-icons/si'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'
import {MdQueryStats,MdSecurity,MdTrackChanges} from 'react-icons/md'
import {TbListDetails} from 'react-icons/tb'
import {CgIfDesign} from 'react-icons/cg'

export const links =[
    {
        name:"Home",
        path:'/'
    },
    {
        name:"About Us",
        path:'/about-us'
    },
    {
        name:"Services",
        path:'/services'
    },
    {
        name:"Solution",
        path:'/solution'
    },
    {
        name:"Contact Us",
        path:'/contact-us'
    },

]

export const programs=[
    {
        id:1,
        icon:<SiAirbnb/>,
        title:"Services",
        info:"Nidus ERP Your organization’s success demands focus on many different aspects of business. Regardless of the size of...",
        path:"/servicess/info"

    },
    {
        id:2,
        icon:<SiAirbnb/>,
        title:"About Us",
        info:"About Us Vision Our vision is to be a leading solutions provider in ERP and e-marketplace in productized services offerings, serving global customers.",
        path:"/servicess/info"

    },
    {
        id:2,
        icon:<SiAirbnb/>,
        title:"Solution",
        info:"Custom Software Development We strongly believe that the success of any custom software development process depends largely on the level...",
        path:"/servicess/info"

    },
]

export const services = [
    {
        id:1,
        icon:<SiAirbnb/>,
        title:"Custom Software Development",
        desc:"We strongly believe that the success of any custom software development process depends largely...",
        expl:" the complex activity of custom software development by embracing DevOps that increases collaboration between the technology and operations team. We strive to build an organizational interface that enables us to be an extension of your business.We develop a time-bound roadmap that compliments the client organizations vision and goals for the software development process, beginning at the inception of solution to the final delivery involving training and handholding necessary for organizational integration.We build enterprise applications that cater to specific needs of client business that adapts dynamically needs that evolves on implementation."
    },
    {
        id:2,
        icon:<SiAirbnb/>,
        title:"Outsourced Product Development",
        desc:"With ever increasing business complexities and rapid market changes, there is an increasing urgency...",
        expl:"for all companies to leverage technology solutions while improving focus on your core businesses. We aim to be your reliable IT partner providing innovative products, generating value with custom solutions, architecting your technology road-map while ensuring delivery of the highest quality.The product development model we use depends largely on the size of engagement and the type of technology used. From mission critical applications to setting up an entire ODC (Offshore Development Center), we manage every single development process with the same level of integrity and commitment."
    },
    
    
]
export const solution = [
    {
        id:1,
        icon:<TbListDetails/>,
        title:"Nidus ERP",
        desc:"Your organization’s success demands focus on many different aspects of business. Regardless of the size of the organization, operational complexities are  a reality and the need for accurate record keeping, resource allocations, analysis, planning and reporting are necessary. Most businesses today cannot operate efficiently without some form of computer automation.Nidus ERP addresses the automation requirements of any organization involved any business irrespective of the size of operations. It provides a plethora of inter organizational communication protocols enables you to reduce delays in communications and make critical decisions in an effective and informed manner."
        
    },
    {
        id:2,
        icon:<MdQueryStats/>,
        title:"Why Nidus ERP?",
        desc:"Nidus ERP is a software that is provided as independent modules that can be integrated to create a business solution that can be as large as to address all your business processes or as minimal as to address a single department of your business. This modularity along with its SaaS capability and distributed processing nature makes it a flexible and cost-effective solution that be adopted by organizations of all size."
    },
    {
        id:3,
        icon:<AiOutlineDeploymentUnit/>,
        title:"Deployment Models",
        desc:"The system can be deployed on premise, in a cloud or can be availed as Software as a Service (SaaS), with the option of availing the system over internet and retaining your data on your premises. Nidus ERP can also be deployed on your personal android devices to provide access to your business information at any time as easily as if you were in your office."
    },
    {
        id:4,
        icon:<CgIfDesign/>,
        title:"Customization",
        desc:"Customization capabilities are extensive throughout the product, with the product menu and user interface being fully customizable and configurable per user. Nidus ERP’s modularity supports extensive customization with minimal cost."
    },
    {
        id:5,
        icon:<MdSecurity/>,
        title:"Security",
        desc:"Your data is the lifeblood of your organization and the integrity and security of that data is a top priority. Nidus ERP incorporates system-wide facilities aimed at securing the system from unauthorized access. Over and above this, security can be set throughout the system by operator or by role. Securities can also be set per operator against transactions and activities."

    },
    {
        id:6,
        icon:<MdTrackChanges/>,
        title:"Innovation",
        desc:"With an ongoing feedback from our existing customers along with evaluation business and technology trends, Nidus ERP is a continuously evolving product to ensure your business has access to latest technologies and practices to provide your business an edge over others."
    }
    
]

export const testimonials=[
    {
        id:1,
        name:"Jawakar",
        quote:"Team OpenNidus have developed our CMS, E-commerce applications and they are maintaining them in a good professional way We are happy with the service they providing Their Promotional activities are also reliable and we can see the results.",
        job:"Product Designer, AGF India Pvt Ltd, Coimbatore",
        avatar:require("./images/testimonial1.jpg")

    },
    {
        id:2,
        name:"Girrish Grover",
        quote:"We are happy to have found Opennidus who initially designed our website www.agileproperty.in. Truly professional, innovative people working in alignment with customers understanding our needs and improvising on the ideas we give.",
        job:"CEO, Agile Property Management, Chennai",
        avatar:require("./images/testimonial2.jpg")

    }
]