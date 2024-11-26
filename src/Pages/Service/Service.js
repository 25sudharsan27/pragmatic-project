import './Service.css';
import Navbar from '../../components/Navbar/Navbar';

import {useEffect, useState, useRef } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import img from '../../components/images/India.png';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiWindowBars } from 'react-icons/gi';



const servicesWithExplanations = [
  { 
    label: "Expert Witness / Independent Opinion",
    explanation: "Expert witness services offer independent, professional opinions based on technical expertise to support legal disputes. They provide objective analysis, offering testimony and evidence in court regarding complex technical issues, such as construction delays, design flaws, contract violations, or safety concerns. Expert witnesses are often specialized in fields such as construction, engineering, architecture, or other relevant industries. They are called upon to offer their unbiased assessments, which can help clarify complicated technical matters that are difficult for non-experts to understand. The expert witness’s role is to explain these technical aspects in clear, understandable terms to judges, juries, or arbitrators. Their testimony can be pivotal in determining the outcome of a dispute by assisting the court in comprehending the intricacies of the issue. Their reports and testimonies must meet high standards of accuracy, integrity, and professionalism. Expert witnesses are essential in ensuring fairness and clarity in legal proceedings, making them crucial assets in dispute resolution processes where technical knowledge is required.",
    image:  img
  },
  { 
    label: "Project cost & budget control",
    explanation: "Project cost and budget control services are vital for ensuring that a project remains financially viable throughout its lifecycle. These services involve the creation, monitoring, and control of the project budget to avoid cost overruns and delays. Initially, a comprehensive budget is developed, which accounts for all expected project costs, such as labor, materials, equipment, overheads, and any contingency funds for unforeseen issues. Throughout the project, the budget is continuously monitored to track actual expenditures against the forecasted costs. This allows project managers to identify potential financial risks early, make necessary adjustments, and implement cost-saving measures if needed. Effective budget control also involves analyzing cash flow, managing change orders, and addressing financial disruptions. Maintaining budget control helps ensure that the project is completed within its financial constraints, avoiding cost overruns that could compromise its success. A well-controlled budget is essential for stakeholder confidence, ensuring that resources are used efficiently and that the project can meet its deadlines and deliverables without financial strain.",
    image:  img
  },
  { 
    label: "Arbitration & Mediation",
    explanation: "Arbitration and mediation are alternative dispute resolution (ADR) methods used to resolve conflicts outside of the courtroom. Arbitration is a more formal process where an arbitrator—an independent third-party expert—reviews the case, listens to both parties, and makes a binding decision. This method is often faster and less costly than litigation, and the decision made by the arbitrator is enforceable in the same way as a court judgment. Mediation, on the other hand, is a less formal and non-binding process in which a mediator facilitates negotiations between the parties in dispute. The mediator helps the parties explore possible solutions and reach a mutually acceptable agreement, but does not impose a decision. Mediation is typically preferred when the goal is to preserve business relationships, as it encourages collaboration rather than confrontation. Both arbitration and mediation offer quicker, more flexible, and less costly solutions to disputes than traditional court proceedings, making them highly effective for managing conflicts in construction projects, especially where ongoing business relationships are involved.",
    image:  img
  },
  { 
    label: "Contracts Management",
    explanation: "Contracts management services ensure that all parties involved in a project adhere to the terms and conditions of the contract. This involves monitoring the performance of contractual obligations, including timelines, deliverables, quality standards, and compliance with legal and regulatory requirements. Contracts management covers a wide range of responsibilities, including the negotiation and drafting of contracts, managing change orders, resolving disputes over contract terms, and ensuring that both parties meet their responsibilities. This service is crucial for preventing and resolving contract disputes, ensuring that all stakeholders fulfill their obligations, and addressing any deviations from the contract in a timely manner. A robust contract management system helps reduce the risk of misunderstandings, delays, and cost overruns by ensuring that the agreed terms are clearly defined and adhered to. By managing contracts effectively, companies can avoid costly litigation, maintain good working relationships with partners, and achieve project success in a structured and compliant manner.",
    image:  img
  },
  { 
    label: "Quantum Analysis from EOT",
    explanation: "Quantum analysis for Extension of Time (EOT) claims is a process that quantifies the financial impact of delays on a project. When delays occur, determining the cause and the resulting costs is essential for resolving disputes and determining the extent of any compensation due. Quantum analysis involves a detailed review of the project’s schedule, resources, and costs to assess how delays affect the project’s overall financial performance. This includes calculating additional costs associated with the delay, such as labor, equipment, and material costs, as well as assessing any potential impact on overall project profitability. Quantum analysis is often used in conjunction with a project’s critical path method (CPM) schedule to provide a clear, data-driven assessment of delay impacts. This analysis allows contractors and project owners to make evidence-based claims for EOT, helping to ensure that both parties are fairly compensated for delays that were beyond their control. In dispute resolution, quantum analysis serves as an essential tool for justifying delay-related claims and enabling fair compensation.",
    image:  img
  },
  { 
    label: "Prolongation Claims",
    explanation: "Prolongation claims are typically made when delays in a construction project result in additional costs due to the extension of time required to complete the project. These claims seek compensation for the extra expenses incurred as a result of delays that were beyond the contractor's control. Common causes of prolongation claims include unforeseen site conditions, changes in project scope, or delays caused by external factors such as weather or regulatory issues. Prolongation claims can be complex, as they often involve a detailed analysis of the project schedule, costs, and contract terms. Contractors must provide comprehensive documentation, including evidence of the delays, the associated costs, and how the delays impacted the project timeline. Resolving prolongation claims often requires negotiation and, in some cases, arbitration or litigation. Proper management of prolongation claims is essential for ensuring that all parties are fairly compensated for delays, which helps mitigate financial risks and ensures that projects can continue moving forward despite disruptions.",
    image:  img
  },
  { 
    label: "Planning & Project Control",
    explanation: "Planning and project control services are integral to the successful execution of any project. These services include the development of a detailed project plan, setting clear objectives, scheduling tasks, allocating resources, and establishing a framework for monitoring project performance. Project control involves tracking the progress of the project, comparing actual performance against planned targets, and making adjustments as necessary to keep the project on track. This includes identifying risks, managing scope changes, and resolving issues that may arise during the project lifecycle. Effective planning and project control ensure that resources are utilized efficiently, timelines are met, and costs remain within budget. These services help prevent delays, optimize the use of resources, and ensure that project deliverables meet quality standards. By providing structured oversight and proactive problem-solving, planning and project control services contribute to the timely and successful delivery of projects.",
    image:  img
  },
  { 
    label: "Earned Value Management",
    explanation: "Earned Value Management (EVM) is a powerful project management technique used to assess a project's performance and progress in terms of both cost and schedule. EVM compares the planned progress of a project with the actual progress, enabling project managers to evaluate how much of the project’s planned value has been earned based on work completed. By integrating cost, schedule, and performance data, EVM helps identify potential issues early, providing valuable insights into whether a project is on track, behind schedule, or over budget. This method involves calculating key performance indicators such as Cost Performance Index (CPI) and Schedule Performance Index (SPI), which are used to assess cost efficiency and schedule adherence. EVM allows project managers to take corrective actions proactively and helps stakeholders make informed decisions. By using EVM, organizations can ensure that their projects are progressing as planned, and any necessary adjustments are made before minor issues become major problems.",
    image:  img
  },
  { 
    label: "Forensic Delay Analysis",
    explanation: "Forensic delay analysis is a specialized process used to investigate the causes of delays in construction projects and determine their impact on the overall schedule. This analysis aims to identify the specific factors that caused the delay, whether they were caused by the contractor, client, or external factors. Forensic delay analysis typically involves reviewing project schedules, construction logs, change orders, and other relevant documentation to reconstruct the sequence of events that led to the delay. This process also examines the extent to which the delays affected the project timeline and assesses potential liabilities for each party involved. By identifying the root cause of delays and quantifying their impact, forensic delay analysis provides a clear and objective basis for resolving disputes, mitigating claims, and improving future project planning. This analysis is invaluable for projects where there is a dispute over who is responsible for delays, and it helps ensure that all parties are held accountable for their actions.",
    image:  img
  },
  { 
      label: "Contract & Schedule Risk Management",
      explanation: "Contract and schedule risk management involves identifying, analyzing, and mitigating the risks associated with the contractual terms and the project schedule. It focuses on addressing the uncertainties that may affect the project's timeline, budget, and overall success. In a project, numerous risks can arise from changes in scope, unforeseen site conditions, contractor performance, regulatory changes, or external factors such as weather or economic shifts. Contract risk management ensures that the terms and conditions of the contract are clearly defined, fair, and enforceable, helping to prevent disputes over contract interpretation or obligations. It also involves managing risks related to contractual obligations, such as penalties for delays or non-compliance with specifications, and taking proactive measures to reduce the likelihood of these risks occurring. Schedule risk management, on the other hand, focuses on identifying potential disruptions that could delay the project and assessing their potential impact on the timeline. This includes analyzing the critical path, identifying key dependencies, and factoring in external risks such as supply chain disruptions or labor shortages. By addressing these risks early on, project managers can implement mitigation strategies, such as adjusting timelines, securing backup resources, or negotiating with contractors to avoid schedule slippage. Effective contract and schedule risk management ensures that the project remains within budget and on track, while minimizing the possibility of costly delays, legal disputes, or project failure. This proactive approach to risk management is essential for achieving project success and maintaining stakeholder confidence.",
      image:  img
    },
    { 
      label: "Training on Project Control",
      explanation: "Training on project control is a vital service that equips project managers and teams with the skills, knowledge, and tools necessary to manage project schedules, budgets, and performance effectively. Project control involves a range of techniques aimed at ensuring that a project is completed on time, within budget, and to the specified quality standards. Training in project control typically covers key areas such as cost control, schedule management, risk management, earned value management (EVM), and performance tracking. It provides project managers with the techniques and methodologies to create, monitor, and adjust project plans to keep projects on track and achieve desired outcomes. A key aspect of project control training is teaching how to use project management software tools effectively, which allow teams to monitor progress, forecast potential issues, and adjust resources as needed. Furthermore, training also emphasizes the importance of communication and stakeholder management, as project control relies heavily on the ability to convey project status and potential issues clearly and efficiently. By investing in training for project control, organizations can ensure that their teams have the competency to anticipate and address challenges proactively. Proper training also helps foster a culture of continuous improvement, where teams are equipped to manage complexities and risks in large-scale projects. In the long term, well-trained project managers and teams contribute to better project performance, improved project delivery timelines, reduced costs, and enhanced stakeholder satisfaction.",
      image:  img
    },
    { 
      label: "Delay Claims | Disruption Claims",
      explanation: "Delay and disruption claims are common in construction and engineering projects and occur when unforeseen events or changes to the project lead to delays or disturbances that affect the completion of work. Delay claims are typically made when a contractor or project team faces delays that impact the overall project timeline. These delays can be caused by a wide range of factors, including changes in scope, weather, labor disputes, supply chain issues, or unforeseen site conditions. In a delay claim, the affected party usually seeks compensation for additional costs incurred as a result of the delay, such as extended labor or equipment hire costs. Disruption claims, on the other hand, focus on how changes or delays affect the productivity of work, often leading to inefficiencies, additional costs, or lower output. Disruption claims may arise from changes in the project scope, rework, delays from other contractors, or unexpected complications that affect the normal flow of work. Both delay and disruption claims typically require a thorough analysis of the project's original schedule, contract terms, and the circumstances surrounding the delay or disruption. Evidence such as project schedules, correspondence, daily logs, and photographs is often needed to support these claims. A detailed analysis using forensic methods may be required to identify the root causes of delays or disruptions and determine the financial impact. Delay and disruption claims are typically resolved through negotiation, arbitration, or litigation, depending on the contract terms and the nature of the dispute. Proper management of these claims helps ensure that all parties involved are fairly compensated for disruptions beyond their control, and it minimizes the risk of lengthy disputes that can delay the project's completion. Effective handling of these claims also ensures that projects are not financially burdened by unforeseen changes or delays, helping to protect project budgets and maintain relationships between contractors and clients.",
      image:  img
    }
]



const Connect = () => {

    
    

    return (
        <div id="services-connection" className="connect">
        <div id="con1" className="connect-image" ></div>

        <div id="connect-box1" className="connect-box">
            <div id="connect-box2" className="conn-fix">
            <h1   className="connect-heading">Get In</h1> 
            <h1   className="connect-heading" id="con-heading2">Touch</h1>
            </div>
            <h1  className="connect-content">Have a project in mind? Reach us directly for a personalized experience.</h1>
            <form className="connect-form">
                <div className="connect-form-1">
                    <div className="connect-names" >
                        <p1    id="connect-lables">First Name</p1>
                        <input   placeholder='First Name' type="text" name="first-name" className="connect-input" />
                    </div>
                    <div className="connect-names">
                        <p1   id="connect-lables">Last Name</p1>
                        <input   placeholder="Last Name" type="text" name="last-name" className="connect-input" />
                    </div>
                </div>
                <div id="mobcon" className="connect-form-2">
                        <p1   id="connect-lables">First Name</p1>
                        <input   placeholder="First Name" type="text" name="first-name" className="connect-input" />
                </div>
                <div id="mobcon" className="connect-form-2">
                        <p1   id="connect-lables">Last Name</p1>
                        <input   placeholder="Last Name" type="text" name="last-name" className="connect-input" />
                </div>
                <div className="connect-form-2">
                        <p1   id="connect-lables">Email</p1>
                        <input   placeholder="Email" type="text" name="email" className="connect-input" />
                </div>
                <div id="con-msg" className="connect-form-2">
                        <p1   id="connect-lables">Message</p1>
                        <textarea   placeholder="Messages" type="text" name="message" className="connect-input" id="connect-message" />
                </div>
                <button   type="submit" className="connect-button">Submit</button>


            </form>
        </div>
    </div>         
    )
}








const Services = () => {
  const navigator = useNavigate();




    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            startEvent: 'DOMContentLoaded'
        });
    }, []);

    const {id} = useParams();
    // { 
    //   label: "Expert Witness / Independent Opinion",
    //   explanation: "Expert witness services offer independent, professional opinions based on technical expertise to support legal disputes. They provide objective analysis, offering testimony and evidence in court regarding complex technical issues, such as construction delays, design flaws, contract violations, or safety concerns. Expert witnesses are often specialized in fields such as construction, engineering, architecture, or other relevant industries. They are called upon to offer their unbiased assessments, which can help clarify complicated technical matters that are difficult for non-experts to understand. The expert witness’s role is to explain these technical aspects in clear, understandable terms to judges, juries, or arbitrators. Their testimony can be pivotal in determining the outcome of a dispute by assisting the court in comprehending the intricacies of the issue. Their reports and testimonies must meet high standards of accuracy, integrity, and professionalism. Expert witnesses are essential in ensuring fairness and clarity in legal proceedings, making them crucial assets in dispute resolution processes where technical knowledge is required.",
    //   image:  img
    // }
    const [service, setService] = useState(servicesWithExplanations[id]);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to manage sidebar visibility
    const sidebarRef = useRef(null);  // Ref for sidebar
    const toggleBtnRef = useRef(null); // Ref for the toggle button


    useEffect(() => {
        // Event listener function to check if clicked outside the sidebar or button
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current && !sidebarRef.current.contains(event.target) && 
                toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)
            ) {
                setIsSidebarVisible(false);  // Close the sidebar if clicked outside
            }
        };

        // Add the event listener when the component is mounted
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component is unmounted
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const [isDropdownVisible, setDropdownVisible] = useState(false); // Initially hidden

  const toggleDropdownVisibility = () => {
    setDropdownVisible((prev) => !prev); // Toggle visibility
  };
  


    return (
        <div id="service-sec" className="App">
                {/* <button
                        
                        ref={toggleBtnRef} // Set reference for the toggle button
                        className="sidebar-toggle-btn"
                        onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                        ☰
                </button> */}
                <Navbar pos="services" 
                isDropdownVisible={isDropdownVisible}
                toggleDropdownVisibility={toggleDropdownVisibility}/>
                
            

                <div className="services-page1">
                    {/* <div 
                    ref={sidebarRef}  // Set reference for the sidebar
                    id="services-side"
                    data-aos={(window.innerWidth > 770) ? 'fade-right'  : null}
                    className={`blogs-side ${isSidebarVisible ? 'visible' : ''}`}
                    >
                    <div id="servi" className="blogs-side1">
                        <h1 className="blog-category-headi">Services</h1>
                    </div>
                    
                    <div id="services-side-bar">
                    {servicesWithExplanations.map((ser,index) => (
                        <div 
                            key={index}
                            onClick={() =>{navigator("/services/"+index); setService(servicesWithExplanations[index]);   document.getElementsByClassName('blogs')[0].scrollTo(0, 0);  }} 
                            id="services-cat"
                            className={`blog-category ${ser.label === service.label ? 'blog-active' : ''}`}
                        >
                            <a 
                            id="services-cat-heading"
                                className={`blog-category-heading ${ser.label === service.label ? 'blog-active1' : ''}`}
                            >
                                {ser.label}
                            </a>
                        </div>
                    ))}
                    </div>
                </div> */}

                <div  className="blogs" id="service-p">
                    <h1 className="service-page-heading">{service.label}</h1>
                    <img src={img} className="service-page-image" />
                    <u1 className="service-page-content1">
                       {service.explanation.split('.').map((point,index) => (
                            point!=""? 
                            <li key={index} className="service-page-content">{point}</li>
                            : null
                          ))}
                    </u1>
                    
                    <Connect/>
                               
                </div>

            </div>
        </div>
    )
}

export default Services;