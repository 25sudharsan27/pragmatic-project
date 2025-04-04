import React, { useState, useRef, useEffect } from 'react';
import './Blogs.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import { scroller } from 'react-scroll';
import { useParams } from 'react-router-dom';
import complogo from "../../components/images/logo.png";



function Blogs({}) {
    const [categoriesData, setCategoriesData] = useState(0); // Default to 'All Categories'
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const sidebarRef = useRef(null);
    const toggleBtnRef = useRef(null);
    const navigator = useNavigate();
    const {id} = useParams('id');
    const {categoryId} = useParams('categoryId');
    const blogs = 
    [
        { category : 0 , 
           data : [
        {
            title: "Traditional Claims Management in EPC Projects",
            displaycontent: "Conflicts arise when multiple parties are involved in a construction project inevitable and when one party feels the other party is not following them. They can make a claim if they are working under contract.",
            content: [
                "Conflicts arise when multiple parties are involved in a construction project inevitable and when one party feels the other party is not following them. They can make a claim if they are working under contract.",
                "Bringing the right knowledge (the light) is the only way to comeout from ignorance ( improper understanding on claims), this is the law.",
                "No attention has been paid to his investigation of claims management in the EPC. The purpose of this exercise is to throw light on claims management Identify the cause of change requests, especially in the context of EPC projects.  A case study needs to be conducted within an organization operating a complex EPC project involving multiple parties. Tools have been applied to this work Root cause analysis to identify the root cause of change requests, and Conduct focus groups and semi-structured interviews to deepen understanding",
                "Claims Management Issues and Relationships. Two parties are involved in the claim. Thesis concludes that the most common cause can be traced back to subcontractors Design change claims where information about the design is insufficient Input provided or related to installations exhibited by subcontractors. Modify the claim to fix the self-created conflict. Other taproot is Lack of instructions from the client Party organization or change request. Graduation thesis finished.",
                "This takes time, so that complaints are avoided during system installation Formal Claim Resolution. Poor documentation is the main reason. Formal requests require more time to process. This article continues Concluding that the relationship between the two parties does not affect the claim, In contrast, relationships may benefit from claims if the cause is resolved correctly.",
                {
                    title: "The routine logic summary",
                    content: [
                        "Conflict is inevitable in interpersonal relationships, including construction projects. The main purpose of the claims management process is to solve specific problems. The purpose of this analysis is to throw light on claims management and identify its causes.",
                        "EPC projects involving multiple parties. Claims were verified using a root cause analysis technique involving various factors",
                        "A project to better understand the billing management process. In general school of thought is about how the relationship between the parties affects the claim. The identified root causes of Contractor claims are primarily related to design and subcontractors. Remember attentions are mandatory to raise the voice wherever it supposed to be.",
                        "Claims to resolve disputes caused by yourself and inadequate information Conflicts should be resolved as soon as possible and the project team Resolving conflicts in this way removes an important aspect of reporting claims Studies, relationships also do not affect the claims.",
                        "In contrast, claims management Identified as an important tool for quality improvement with positive impact Claims affect the relationship between the parties because they lead to precautionary measures. The benefit of quality improvements during the course of project and it’s cost must be included in the original cost budget, or mitigation avoidance"
                    ]
                },
                {
                    title: "Introduction and definition to claims",
                    content: [
                        "“A request, demand, or assertion of rights by a seller against a buyer, or vice versa, for consideration, compensation, or payment under the terms of legally binding contract, such as for a disputed change” (PMI – Project Management Institute).",
                        "Project participants should strive to avoid and minimize problems that could lead to claims in projects, which should be done in a proactive manner or as respond to the problem before it gets out of hands."
                    ]
                },
                {
                    title: "Thoughts and enquiries (5″W” & 1 “H”)",
                    content: [
                        "The causes of CONTRACTOR change claims, all means to identify the root cause analysis of change management in claims, and how such an initiation on claims and it’s process should be, unlikely how it affects the stakeholder relationships.",
                        "1. The main root cause relevant to such a claims?",
                        "2. Between the management how this affects on routine healthiness?",
                        "3. What would be an effect upon submission on claims between parties?"
                    ]
                },
                {
                    title: "A study and an analysis",
                    content: [
                        "Using Fishbone (Cause-and-effect chart) and Process chart, a traditional study will really focus to to analyze the problem within business plan. Further 'documentation reviews and case studies offered a more in-depth analysis of the change causes in projects'."
                    ]
                },
                {
                    title: "The importance of right interrogation with right people",
                    content: [
                        "The perceptions may change with individual, the author of claims only can objectify the issues pertaining to the claims, therefore the subject matter expert(s), and key participants are mandatory on the mind mapping workshops to conclude the claims. However, the change related claims to be reviewed with different sessions. The key participants such a Principal Manager(s), Engineering Manager(s), Senior Engineer(s), and an additional information should be gathered from all important stakeholders (internal, external). The potential benchmarks with reference to the possible and potential causes, and actual ground scenarios to be bring for the discussion and source validation as indeed.",
                        "The personal values and believes may affect and the conclusions drawn, likelihood of such an analysis to be biased is an important consideration."
                    ]
                },
                {
                    title: "Conclusions",
                    content: [
                        "The key purpose is to identify root causes of Contractor change claims and claim management in EPC-projects. Claims are undesired in the construction industry and disputed are common in construction projects as in accordance. Various parties are involved in the claims process and key outsourcings are also inevitable, these are not a problem, if the issues were not taken in right time and on right way the claims are leading to disputes, also inevitable.",
                        "Due to the hectic and tight project schedule, the stakeholders may avoid or 'no time' attitude, which unhealthy in the view of claims management.",
                        "A lesson learned register to be maintained in all time and throughout the life cycle."
                    ]
                }
            ]
        },

            {
                title: "Construction Delay Analysis Methodologies- Strengths & Weakness",
                displaycontent: "Critical Delay and Its Classifications: Types of Delays, Schedule Delay Analysis is typically used to support EOT claims. Numerous critical path-based delay analysis approaches are used to show the effects of delay events and then to assign blame for these delays to the accountable party.",
                content: [
                    {
                        title: "Critical Delay and Its Classifications:"
                    },
                    {
                        title: "Types of Delays"
                    },
                    {
                        title: "Schedule Delay Analysis is typically used to support EOT claims.",
                        content: [
                            "Numerous critical path-based delay analysis approaches are used to show the effects of delay events and then to assign blame for these delays to the accountable party. The following are the main techniques:",
                            "1. As-Planned Impacted Analysis",
                            "2. As-Built But For Analysis (Or Collapsed As-Built)",
                            "3. As Planned vs As-Built Analysis",
                            "4. Time Impact Analysis",
                            "The new SCL protocol has added 2 more delay analysis methodologies namely:",
                            "5. Time Slice Windows Analysis, and",
                            "6. Longest Path Analysis",
                            "But several variants in the above two additional methodologies but they are not commonly used"
                        ]
                    },
                    {
                        title: "Delay Analysis Methodologies"
                    },
                    {
                        title: "1. Impacted As-Planned Analysis",
                        content: [
                            "This method involves the analysis of the Contractor’s As-Planned Programmed.",
                            "The critical path is re-analyzed to determine the impact to the As-Planned program when delay events are added to it as time-duration activities. If one occurs, the ensuing delay will serve as the foundation for an EOT claim."
                        ]
                    },
                    {
                        title: "Strengths & Weakness",
                        content: [
                            "It is easily understood.",
                            "It is appropriate for modest projects where the parties desire an expedited resolution."
                        ]
                    },
                    {
                        title: "Weaknesses:",
                        content: [
                            "It is a theoretical analysis that disregards actual development or the situation on the ground.",
                            "It is not appropriate in situations when there are many concurrent delays since it is difficult to analyze and assign responsibility for them."
                        ]
                    },
                    {
                        title: "2. As-Built But For Analysis (Or Collapsed As-Built)",
                        content: [
                            "This approach entails examining the Contractor’s As-Built Program.",
                            "The As-Built programme isolates delay events as time-duration activities. Then, these occurrences are logically eliminated, and the earlier theoretical completion date that results is contrasted with the actual completion date.",
                            "The project’s delay is the difference between the two due dates; delays are categorised based on who is to blame for them, and claims can be made as a result. To provide the correct response for EOT claims, only the delays for which the Contractor is not responsible are deleted."
                        ]
                    },
                    {
                        title: "Strengths & Weakness",
                        content: [
                            "The analysis is supported by factual information because the delays are real.",
                            "Even without a baseline or as-planned program, analysis can still be done."
                        ]
                    },
                    {
                        title: "Weaknesses:",
                        content: [
                            "It is quite challenging to implement on complicated programs.",
                            "Additional logical connections will need to be made, and this can be altered, making the analysis prone to bias.",
                            "The existence of an as-built critical path is still up for discussion, which is subjective."
                        ]
                    },
                    {
                        title: "3. As-Planned vs As-Built",
                        content: [
                            "Comparing the As-Planned and As-Built programmes is part of this strategy.",
                            "This approach, which is frequently employed in EOT claims, is based on an examination of the differences in the length of the two program. This variation is properly supported by a 'Cause & Effect' analysis that describes the delay- and disruption-causing events and their influence on the programs."
                        ]
                    },
                    {
                        title: "Strengths & Weakness",
                        content: [
                            "This analysis is ideal for straightforward programs and is simple to comprehend.",
                            "When there is doubt about the validity of baseline and/or modified programs, it is typically used.",
                            "A common-sense approach is used instead of complex software-based modelling."
                        ]
                    },
                    {
                        title: "Weaknesses:",
                        content: [
                            "This analysis required experts to utilize their practical planning or project management skills to determine the project’s critical route based on a thorough examination of the supporting documentation.",
                            "However, different experts can come to differing findings, which could spark a lot of discussions."
                        ]
                    },
                    {
                        title: "4. Time Impact Analysis (TIA)",
                        content: [
                            "With this approach, delay events are included into the As-Planned program as they happen. In order to determine how these occurrences may affect the project’s critical path and completion date in the future, the critical path is then reanalyzed.",
                            "Contrary to some other methodologies, TIA is a 'predictive' or 'prospective' method; as such, it should not be used as a 'retrospective' tool to analyze delays long after they have occurred, but rather, it should be used dynamically throughout the course of the project to predict how delay events will affect the project critical path and completion date."
                        ]
                    },
                    {
                        title: "Strengths & Weakness",
                        content: [
                            "When employed concurrently, that is, at the time the delay events occurred, they are very helpful in proving delay.",
                            "Promotes settling EOT disputes in a proactive manner as required, for instance, by various standard forms of contract."
                        ]
                    },
                    {
                        title: "Weaknesses:",
                        content: [
                            "The analysis of complicated program is tough and generally difficult.",
                            "It needed a lot of precise data, including a realistic and doable baseline or as-planned program."
                        ]
                    }
                ]
            },
            {
                "title": "Recommended Practice on Forensic Schedule Analysis is Simple or Complex?",
                "displaycontent": "An in-depth examination of the complexities involved in forensic schedule analysis and the need for a standardized approach.",
                "content": [
                    "Finding out what happened, how it affected the timeline, and what was the cause, is the desired goal of schedule delay analysis. Delay analysis should start by identifying the events and their times. What was conclusion in terms of the schedule should then be clarified by delay analysis based on this preliminary examination. Specifically, did the project get delayed, and if so, how much? Finally, the proximate cause of the incidents that caused the project delay should be identified using delay analysis.",
                    "Legal and contractual inferences about the kind(s) of delay that occurred and what, if any, damages are payable as a result can be drawn from this study. Simple? No! why not because there is no industry-wide consensus on what constitutes a delay analysis or the best scheduling delay analysis technique to apply. Is it important? After all, scheduling is “objective” and “half-scientific” (i.e., fact driven).",
                    "Remember all accuracy is possible only after postmortem. The Recommended Practice on Forensic Schedule Analysis, which has been in preparation by AACE for almost two years, here the intention is to articulate the subject. The numerous forensic schedule analysis approaches now used in the construction industry are defined, described, and explained in this Recommended Practice. None of the techniques mentioned are excluded or supported by the Recommended Practice. Instead, it organizes and explains the ways that are currently known, provides warnings on how to use each approach, and describes best practices for implementation of each technique. This article includes a status report on the Recommended Practice as well as summaries of various sections.",
                    {
                        "title": "Forensic Scheduling – the purpose",
                        "content": [
                            "The following are some examples of the fundamental goal and typical applications of forensic scheduling. First, you should establish the Cause & Effect relationship in all analysis, further an elaboration of various types of causes shall take place, and to conclude with, if the effect is going to be another cause, resulting in further damages etc., The process is in place, of course the solution will follow.",
                            "An identification and quantification of Compensable Delay: A claimant who wants to establish their eligibility for a time extension and time-related damages, such as increased field and home office overheads, equipment rental, cost inflation, etc., typically uses forensic scheduling analysis in the beginning on this process.",
                            "Excusable Delay: A time extension is also justified using forensic scheduling analysis in order to avoid being subject to contractual penalties for late completion. To prove eligibility for an early completion incentive when one is included in the contract, forensic scheduling may also be used.",
                            "Owner’s Compensable Delay: To ascertain whether late completion damages are compensable in accordance with the contract documents, Owners may use forensic scheduling. In other situations, owners may use forensic scheduling to refute contractor claims of owner-caused or compensable delay.",
                            "Dispensation of Delay: When determining who is responsible for a delay or delays and examining a delay period(s), forensic schedule analysis may be used. This is frequently used to assess if her delays are contemporaneous (i.e., inextricably linked) or can be broken down and allocated to different parties.",
                            "Schedule Variance: To distinguish between planned and actual schedules, or between particular schedule revisions, forensic scheduling is used. This is frequently where a defensive forensic scheduling analysis begins as well.",
                            "Schedule Acceleration: To show how much and by whom the timetable was genuinely cut by one or both sides, forensic scheduling is also used.",
                            "Schedule Disruption: Last but not least, a claimant may use forensic schedule analysis to demonstrate that schedule alterations had repercussions rather than delays. Schedule compression, shifting activities from good to bad weather windows, stacking or crowding of trades, out-of-sequence activity, concurrent operations, etc. are examples of disruptions."
                        ]
                    },
                    {
                        "title": "Fundamentals and assumptions",
                        "content": [
                            "The Recommended Practice of Forensic Schedule analysis and the fundamentals are engaged to approach is for Project planning and scheduling are technical disciplines that are connected to but separate from forensic scheduling. It is more than just a division of conventional scheduling.",
                            "Independent of the legal rules and theories regulating claims relating to scheduling, delay, and disruption, uniform processes designed to ensure correct technical implementation of forensic scheduling can and should be implemented.",
                            "For project planning, scheduling, and control purposes, standard methods and standards might be suitable. However, they might not be sufficient for forensic schedule analysis.",
                            "All approaches are known to be manipulative because they all include analyst decisions, either in the creation or review of a forensic timetable.",
                            "In order to achieve consistency of practice in the spirit of intellectual honesty, practitioners should make use of the Recommended Practice of Forensic Schedule analysis."
                        ]
                    },
                    {
                        "title": "Protocols aiding evaluation of Delay Analysis",
                        "content": [
                            "Concurrent Delay: The definition, idea, and applicability of concurrent delay in a schedule delay analysis will all be covered in detail in this section of the Recommended Practice of Forensic Schedule analysis. This section will cover known tests for delay concurrency as well as further information on the effects of delay concurrency on delay analysis results.",
                            "Float and Pacing Delay: This section of the Recommended Practice of Forensic Schedule analysis will focus on the definition of float, float ownership, float utilization, and the effects of float utilization on a forensic schedule analysis.",
                            "Compensable Delay: This section of the Recommended Practice of Forensic Schedule analysis will give a brief explanation of delays that are usually considered compensable, along with examples. This portion will be based on the conventional North American industry interpretation and mainstream law.",
                            "Excusable Delay: This portion of the Recommended Practice of Forensic Schedule analysis will provide a brief description of delays that are often excused, non-compensable, and instances. This chapter will be based on common sense North American interpretation and mainstream legislation.",
                            "Recovery of Schedule, Mitigation for Delay and acceleration: The Recommended Practice of Forensic Schedule analysis will include a discussion of the scheduling implications of recovering from, mitigating, or accelerating project activities. This part will also cover how to do a forensic schedule analysis in order to identify and prove such impacts.",
                            "Schedule Disruption: The Recommended Practice of Forensic Schedule analysis will cover the distinction between impact and delay as well as how forensic scheduling can help with impact documentation, including impact on otherwise unmodified work.",
                            "Combined Methodologies and interpretation: A combination of some of the approaches mentioned in the Recommended Practice of Forensic Schedule analysis is conceivable for an analyst. As a result, the Recommended Practice of Forensic Schedule analysis will provide some advice on which techniques can be integrated with justification for each point and which shouldn’t.",
                            "Choosing right method: Regarding technique choice, the Recommended Practice of Forensic Schedule analysis will also make some sensible and pragmatic proposals. The main focus will be on what level of documentation is necessary to carry out various forensic scheduling techniques correctly. This section of the Recommended Practice of Forensic Schedule analysis may also include some discussion of the duration of particular procedures and the associated costs."
                        ]
                    },
                    {
                        "title": "Conclusion",
                        "content": [
                            "Schedule Delay analysis is not as much simple, which is complex in nature. The main reason because is lack of standard terminology and standard practices.",
                            "It is anticipated that the Recommended Practice of Forensic Schedule analysis will serve as a platform for forensic scheduling professionals to encourage consistency in practice, allowing forensic schedulers and their clients to focus on the facts and end disagreements about delays."
                        ]
                    }
                ]
            },
            {
                title: "Project Accounting: The most underrated responsibility in Project management",
                displaycontent : "The financial activities involved in operating a project, such as costs, billing, and income, are the main emphasis of project accounting.",
                content: [
                    {
                        title: "Introduction",
                        content: [
                            "The financial activities involved in operating a project, such as costs, billing, and income, are the main emphasis of project accounting.",
                            "This approach is used by experts like project managers and accountants to integrate crucial financial duties on a project-by-project basis and report their success to management.",
                            "Project accounting provides information to project managers about the status of direct costs, overhead costs, and any income in a particular project.",
                            "These numbers are produced by project accountants for use in financial reporting. These reports help a project manager decide whether to change the project’s work breakdown structure and budget (WBS)."
                        ]
                    },
                    {
                        title: "Project Accounting Plan",
                        content: [
                            "Project accountants frequently create a project accounting plan to make sure the projects are finished on time and under budget.",
                            "This plan includes regular—even daily—checks and breaks down each cost component of the project.",
                            "Through their timesheets, managers can monitor the use of resources, such as employees, and, if required, change the allotted hours."
                        ]
                    },
                    {
                        title: "Examples of Project Accounting",
                        content: [
                            "Production accounting, which is used in film or television projects, is a subspecialty of project accounting.",
                            "Internal projects including building construction, introducing new products, running advertising campaigns, conducting clinical research, making significant long-term purchases, and strategic planning for businesses are also included in project accounting."
                        ]
                    },
                    {
                        title: "Project Management and Accounting",
                        content: [
                            "Project management is another crucial accounting process. Any project plan modifications have an impact on the project’s financial results.",
                            "Project control can result in significant cost savings during the planning and design phase, even in the later stages of the project.",
                            "The project manager’s primary responsibility is to aid in the best project plan setup and development.",
                            "The project accountant’s responsibility is to ensure that the project’s financials, including billing and revenue, are set up correctly to comply with the project’s contract requirements."
                        ]
                    },
                    {
                        title: "Project Cost Accounting",
                        content: [
                            "Project cost accounting principles are the same as ordinary financial or management accounting in corporate accounting, despite having a different scope and objective.",
                            "Project accounting (also known as project cost accounting) tracks expenditures related to the project, in addition to billing and revenue recognition.",
                            "Project accounting differs from standard accounting systems in terms of adoptability, different systems, processes, and reporting standards."
                        ]
                    },
                    {
                        title: "Methods in Project Accounting",
                        content: [
                            "System of accounting: Project accounting accounts require more detailed and granular cost breakdowns compared to the summary level required by the organization's financial teams.",
                            "Frequency in reporting: Project teams require frequent reporting systems to ensure they are on track financially, while account teams may not require such frequent updates.",
                            "Reports and essentialness: The project manager and accountant should establish KPIs. For instance, the dashboard may display the budget variance figure in red, indicating the need for adjustments."
                        ]
                    },
                    {
                        title: "Forecasting in Project Accounting",
                        content: [
                            "As the project progresses, project managers should forecast the project budget and revise it as necessary.",
                            "Stakeholders are often concerned about the ongoing financial results, total cost, and necessary deliverables. These tasks start with creating a forecast with a clear scope that estimates the total cost."
                        ]
                    },
                    {
                        title: "Workflow of Project Accounting",
                        content: [
                            "Initiation: Project managers define who is in charge of each task and how those resources will code their time before a project is initiated.",
                            "Budget: The entire project budget is divided into different categories. Software solutions should support budget definition and versioning.",
                            "Administration: Project accountants record and process expenses, track financial obligations, manage billing and invoicing, recognize revenue, and generate profitability reports.",
                            "Execution: Project managers assign expenses, revenues, and measures to activities using predefined parameters, percentages, and factors.",
                            "Monitoring: The project team should validate the data and identify discrepancies regularly.",
                            "Analytics and Reports: Project accountants and managers generate reports with the help of regular access to accounting data to make informed business decisions."
                        ]
                    },
                    {
                        title: "Why Use Project Accounting?",
                        content: [
                            "Project accounting drills down to specifics frequently found at the project’s micro-level, ensuring the business meets its total financial goals.",
                            "The technique monitors project expenditures, material expenses, billing, and income to guarantee the project's financial success."
                        ]
                    },
                    {
                        title: "Project Accountant’s Role",
                        content: [
                            "A project accountant’s duties include assisting the project manager with financial variations, costs, and income while monitoring transactions and progress.",
                            "They control client billing, supplier payments, and all financial matters related to the project.",
                            "Project accountants must understand the management and financial accounting of their organization to apply these concepts effectively."
                        ]
                    },
                    {
                        title: "Important Tools in Project Accounting",
                        content: [
                            "Timesheet Views: Integration with timekeeping software is essential for tracking labor hours and managing the budget and schedule.",
                            "Resource Management: The project manager uses resource data to modify the resources employed in a project based on availability and project requirements.",
                            "Budgeting: The budget is based on the company's goals and what it can accomplish.",
                            "Forecasting: Project managers should be able to rapidly adjust the forecast as needed for ongoing communication about the budget, milestone dates, and completion date.",
                            "Earned Value Management (EVM): A best practice metric for project management to evaluate project progress and performance.",
                            "Billing: Revenue recognition and billing processes should be integrated to reduce the bid-to-bill lifecycle.",
                            "Metrics and Reports: Software programs should provide KPIs chosen by the project manager at the start of the project, and dashboards should present these KPIs visually."
                        ]
                    },
                    {
                        title: "Learning Project Accounting: A Guide",
                        content: [
                            "Project accounting education is available to both professionals and students, either formally or informally.",
                            "A bachelor’s degree in accounting and certification as a CPA or Chartered Accountant is often required for a project accountant."
                        ]
                    },
                    {
                        title: "Principles of Project Accounting",
                        content: [
                            "How to initiate accounting projects.",
                            "How to perform planning and setup with metrics and software.",
                            "How to execute contracts and avoid scope creep.",
                            "How to close out projects."
                        ]
                    },
                    {
                        title: "Importance of COA (Chart of Accounts)",
                        content: [
                            "A chart of accounts (COA) is an index of all the financial accounts in the general ledger of a company.",
                            "It provides a breakdown of all financial transactions conducted by the company during a specific accounting period."
                        ]
                    },
                    {
                        title: "Accruals",
                        content: [
                            "Accruals are revenues earned or expenses incurred that impact a company’s net income on the income statement, even though cash hasn't changed hands yet.",
                            "Examples include accounts payable, accounts receivable, accrued tax liabilities, and accrued interest."
                        ]
                    },
                    {
                        title: "Conclusion",
                        content: [
                            "Disciplined project management and a solid accounting function are crucial for the success of a project.",
                            "Effective communication and cooperation between project management and accounting are essential to ensure accurate job, management, and financial reporting.",
                            "Project management and accounting must collaborate to ensure the proper cash flow process, including billing, collection, and revenue recognition."
                        ]
                    }
                ]
            },
            {
                "title": "Thumb Rules to Write Success Stories in Delay Claims",
                "displaycontent": "Sometimes it’s impossible to avoid delays on construction projects. Contractors and subcontractors frequently incur higher expenses as a result of delays, and owners may be exposed to claims for liquidated damages for delays.",
                "content": [
                    {
                        "title": "An Understanding",
                        "content": [
                            "Sometimes it’s impossible to avoid delays on construction projects. Contractors and subcontractors frequently incur higher expenses as a result of delays, and owners may be exposed to claims for liquidated damages for delays.",
                            "Some delays, such as those brought on by events beyond the contractor’s control, can be considered excused delays and grant the contractor time extensions, preventing the need for liquidated damages.",
                            "Certain forms of excused delays, such as those brought on by the owner’s activity or inaction, may also be regarded as compensable delays, giving the contractor the right to reimbursement for the additional expenses of the delay as well as an extension of the project’s completion date.",
                            "However, establishing and demonstrating that a delay is acceptable and compensable can be difficult and fraught with pitfalls for the unwary. In the event that construction project delays occur, this articulation is intended to help contractors and subcontractors position themselves to successfully pursue claims for additional time or compensation.",
                            "It does this by offering five essential practical advice.",
                            "“Remember, waiting time is detrimental here in delay claims process.”"
                        ]
                    },
                    {
                        "title": "Negotiate, Not Negate the Terms of the Contract Before Start",
                        "content": [
                            "It is impossible to overestimate the significance of the contract language for the final success of recovering additional time and compensation for construction project delays. In the end, the contract will essentially determine what kinds of delays provide the contractor a right to relief and the conditions the contractor must meet to get that relief.",
                            "Therefore, it is crucial to carefully evaluate the contract’s delay and claims provisions up front, and where it is possible, negotiate for language that will allow for acceptable delay relief.",
                            "Contractors should, for instance, carefully examine the list of circumstances that may qualify them for exemption from delays to make sure that it is sufficiently inclusive and not unduly restricted.",
                            "In order to increase the likelihood that an unexpected delay event may qualify the contractor for relief, the list of acceptable delay events should ideally include catch-all language like “or any other event or occurrence outside of the contractor’s control.”",
                            "If at all feasible, avoid contract language that provides no consequences for delays. If not, the contractor should attempt to limit the scope of such wording such that it only applies to specific sorts of delays, such as those brought on by other parties, and hold the owner accountable to the contractor for delays brought on by the owner.",
                            "The contractor should also strive to get rid of any clauses that say claims are waived if they are not made within a specific amount of time.",
                            "In order to provide everyone a fair chance to be able to perceive and give notice of a delay, the contractor should endeavor to acquire a reasonable time period to offer notice of a claim, such as 21 or 30 days after the incident that caused the delay, if such waiver wording cannot be avoided."
                        ]
                    },
                    {
                        "title": "Timeline, the Schedule, an Importance",
                        "content": [
                            "The contractor must be able to identify an occurrence that will delay the project in order to effectively establish a delay claim. The project schedule lists which tasks are on the critical path and only delays that affect those activities will put off finishing the work.",
                            "In order to predict when an event can result in a critical path delay and to give timely warning of the delay, contractors must actively update and use the schedule.",
                            "By comparing the initial as-planned critical path to the then-current as-built critical path as a result of the delay, the schedule is also crucial for detecting and illustrating the impact of the delay.",
                            "A contractor’s ability to recognize, prove, and ultimately recover from delay claims can be severely hampered by inaccurate or outdated schedules.",
                            "Additionally, it might be advantageous to hire a third-party scheduling consultant early on to help with the development of the delay claim in order to try to best position the claim for success by allowing the consultant to provide contemporaneous input and analysis of the schedule and the delay rather than having to retrace what happened."
                        ]
                    },
                    {
                        "title": "Salute the Law and Claim Protocols as Defined",
                        "content": [
                            "The contract’s notification and delay claim obligations must be understood and followed by contractors, and especially by their project management employees. They must specifically adhere to the terms of the contract governing the time of notice, the right way to give notice, to whom notice must be given, and what information must be included in the delay claim notification.",
                            "To properly establish the claim, it is also necessary to carefully analyse and adhere to the temporal requirements for substantiating the delay claim.",
                            "A delay claim that otherwise has merit may be fatally damaged if proper and timely notice is not given. Due to inadequate notice, courts in many states, including Florida, have rejected claims outright.",
                            "Avoid relying exclusively on verbal exchanges with the owner or architect because there is a good chance that they won’t be sufficient to defend a claim for which timely and accurate written notice was not given.",
                            "Follow the best practice’s, lessons learned earlier success stories and good references, “As you think so you become.”"
                        ]
                    },
                    {
                        "title": "Bookkeeping on Delay Events Causes, and Contemporaneous Records",
                        "content": [
                            "Documentation of the delay and costs incurred throughout the course of the project, in addition to timely and appropriate notice of the claim, is essential for a successful recovery.",
                            "This entails recording not only the delay events that gave rise to the claim, but also the communications pertaining to the claim, the consequences of the delay, the actions taken to lessen the delay, and the losses sustained as a result of the delay.",
                            "It is crucial to record such events verbally through letters, meeting minutes, and daily reports. When appropriate, it is also vital to record events on camera or with a video camera (as allowed).",
                            "As similar to this, it’s critical to track and segregate out specific additional expenditures incurred as a result of delays in order to separate out and independently track damages.",
                            "Schedule analysis is another crucial tool for doing this. As contemporaneous documentation made and tracked around the time of the events is always going to be more powerful and effective proof than attempts to remember or recreate what occurred after the project has concluded, this should be done during the project while events are occurring rather than at the end."
                        ]
                    },
                    {
                        "title": "Be Within the Present, Do Not Delay on Delay Claims",
                        "content": [
                            "Contractors could be tempted to notify the client of the claim for a delay in order to keep the project on schedule, only to deal with it later. This may be harmful to the claim’s viability for a number of reasons.",
                            "First, as was already mentioned, it will be more challenging and probably less successful to try to reconstruct and establish the claim at the end of the project if the contractor fails to contemporaneously document the consequences of the delay and the damages attributable to the delay.",
                            "Secondly, most important, if the contractor waits to pursue the claim until after the project is complete, he or she may lose the leverage that will allow them to successfully resolve the delay claim when the owner is also under pressure to finish the project.",
                            "Finally, depending on the particular facts and circumstances, and the contract language at issue, there is a chance that the contractor may unintentionally waive the claim if it fails to timely pursue it."
                        ]
                    },
                    {
                        "title": "Conclusion",
                        "content": [
                            "These are only a few of the most important recommendations for improving the likelihood of a successful settlement for a construction project delay claim.",
                            "Of course, there are many other crucial factors to take into account and steps to take in connection with a delay claim, and it is necessary to take into account the unique circumstances of a certain project and the delay in question.",
                            "As a result, for specific inquiries and legal counsel on any particular construction project delay claim, a lawyer with experience in construction law should be engaged.",
                            "Remember, the claimant is the architect of his claims fortune, or misfortune."
                        ]
                    }
                ]
            },
            {
                "title": "Why Concurrent Delays Are Only Excusable but Not Compensable to Contractors?",
                "displaycontent" : "The delay occurrences are mainly from critical delays, which affect the critical path and contract completion date, resulting in prolongation claims and Extension of Time (EoT) claims to favor the contractor, if the contractor is not responsible for the delay." ,
                "content": [
                    {
                        "title": "Introduction to Concurrent Delays",
                        "content": [
                            "The delay occurrences are mainly from critical delays, which affect the critical path and contract completion date, resulting in prolongation claims and Extension of Time (EoT) claims to favor the contractor, if the contractor is not responsible for the delay.",
                            "Concurrent delays are a common occurrence in the construction industry, and they can have a significant impact on the progress of a construction project. A concurrent delay occurs when two or more events cause delays to a construction project at the same time. However, the question often arises as to whether concurrent delays are compensable under construction contracts.",
                            "In this article, we will explore why concurrent delays are generally considered excusable rather than compensable, and why they are only excusable between the contractor and employer."
                        ]
                    },
                    {
                        "title": "Excusable vs. Non-Excusable Delays",
                        "content": [
                            "Before we delve into concurrent delays, it’s important to understand the difference between excusable and non-excusable delays.",
                            "Excusable delays are those that are caused by factors beyond the control of the contractor, such as unforeseeable weather conditions, labor strikes, or changes in the scope of work. These delays generally allow the contractor to claim for an extension of time and additional costs incurred.",
                            "On the other hand, non-excusable delays are those that are caused by the contractor’s own actions or inactions, such as poor project management, defective work, or delays caused by the contractor’s subcontractors. These delays generally do not entitle the contractor to claim for an extension of time or additional costs incurred."
                        ]
                    },
                    {
                        "title": "Concurrent Delays",
                        "content": [
                            "Concurrent delays occur when two or more delays, one excusable and one non-excusable, occur at the same time. For example, a delay caused by unforeseeable weather conditions may occur at the same time as a delay caused by the contractor’s own delay in delivering materials. In this scenario, the question arises as to whether the contractor can claim for an extension of time and additional costs incurred as a result of the concurrent delay."
                        ]
                    },
                    {
                        "title": "Compensable vs. Excusable Concurrent Delays",
                        "content": [
                            "In general, concurrent delays are considered excusable rather than compensable. This is because it is often difficult to apportion responsibility for the delay between the contractor and employer. As a result, most construction contracts provide that concurrent delays are excusable, but not compensable.",
                            "Under a typical construction contract, if there is a concurrent delay, the contractor will be entitled to an extension of time, but will not be entitled to additional compensation for the delay. This means that the contractor will have to bear the cost of the delay, even if the delay was caused by factors beyond their control."
                        ]
                    },
                    {
                        "title": "Why are Concurrent Delays Not Compensable?",
                        "content": [
                            "One of the main reasons why concurrent delays are not compensable is that it can be difficult to apportion responsibility for the delay between the contractor and employer. For example, if there is a delay caused by unforeseeable weather conditions, it may be difficult to determine whether the contractor could have taken steps to mitigate the delay, or whether the delay was entirely beyond their control.",
                            "In addition, allowing contractors to claim for concurrent delays could lead to disputes and protracted litigation. This could further delay the construction project and result in additional costs and expenses for both the contractor and employer."
                        ]
                    },
                    {
                        "title": "Impact of Concurrent Delays on Project Completion",
                        "content": [
                            "While concurrent delays may be excusable, they can still have a significant impact on the completion of a construction project. Even if the contractor is entitled to an extension of time, the delay can still result in additional costs and expenses, such as increased labor costs or rental fees for equipment.",
                            "In addition, the delay may also impact the critical path of the project, which can further delay the completion of the project."
                        ]
                    },
                    {
                        "title": "Mitigating Concurrent Delays",
                        "content": [
                            "While contractors may not be able to claim for additional compensation for concurrent delays, they can still take steps to mitigate the impact of the delay. For example, the contractor may be able to accelerate the project schedule or take steps to improve the efficiency of the construction process. This can help to reduce the impact of the delay on the overall project completion time and reduce the costs associated with the delay.",
                            "However, it is important to note that the contractor’s duty to mitigate the impact of the delay is not unlimited. The contractor is only required to take reasonable steps to mitigate the delay, and is not required to take unreasonable or disproportionate steps that would result in additional costs or expenses."
                        ]
                    },
                    {
                        "title": "Preventing Concurrent Delays",
                        "content": [
                            "One way to prevent concurrent delays is to include clear and specific provisions in the construction contract that address the issue of concurrent delays. For example, the contract may require the contractor to give notice of any delays as soon as they become aware of them, or may require the contractor to take specific steps to mitigate the impact of the delay.",
                            "In addition, the contract may also include provisions that address the issue of concurrent delays caused by the employer. For example, the contract may require the employer to provide timely access to the construction site, or may require the employer to provide clear and specific instructions regarding the scope of work.",
                            "While concurrent delays are generally considered excusable rather than compensable, contractors can still take steps to mitigate the impact of the delay and prevent similar delays from occurring in the future."
                        ]
                    },
                    {
                        "title": "Conclusion",
                        "content": [
                            "It is important for both the contractor and employer to carefully consider the terms of the construction contract and to seek legal advice if there are any disputes or issues that arise during the construction project. By taking proactive steps to prevent and mitigate concurrent delays, contractors and employers can help to ensure the successful completion of the construction project on time and within budget.",
                            "Employer risk events and Contractor risk events occur concurrently/sequentially (with concurrent effect) there are several methods that are used to allocate the liabilities/damages. There are certain special cases where concurrent delays were also claimed, however, they cannot be treated as benchmarks."
                        ]
                    }
                ]
            },
            {
                "title": "Retrospective Vs Prospective Delay Analysis",
                "displaycontent": "Delay analysis is an essential aspect of the construction industry, as it helps identify the causes and effects of delays, thereby enabling parties to take appropriate action to minimize or mitigate their impact.",
                "content": [
                    {
                        "title": "Introduction",
                        "content": [
                            "Delay analysis is an essential aspect of the construction industry, as it helps identify the causes and effects of delays, thereby enabling parties to take appropriate action to minimize or mitigate their impact. Delay analysis is generally divided into two categories: retrospective delay analysis and prospective delay analysis. Retrospective delay analysis is conducted after the delay event has occurred, while prospective delay analysis is conducted before the delay event occurs. Both types of analysis are necessary for identifying the cause of the delay and determining the responsibility of the parties involved. This article will explore the differences between retrospective and prospective delay analysis, as well as the SCL protocols and AACE recommended practices related to these concepts."
                        ]
                    },
                    {
                        "title": "Retrospective Delay Analysis",
                        "content": [
                            "Retrospective delay analysis is a technique used to identify the causes and effects of delays that have already occurred. This type of analysis is conducted after the delay event has taken place and aims to determine what caused the delay, who was responsible for the delay, and what impact the delay had on the project schedule. Retrospective delay analysis involves reviewing the project plan, construction schedule, and other relevant documents to identify the cause of the delay and determine the extent of its impact."
                        ]
                    },
                    {
                        "title": "SCL Protocol & AACE Recommended Practices for Retrospective Delay Analysis",
                        "content": [
                            "The Society of Construction Law (SCL) has developed a protocol for retrospective delay analysis known as the Delay and Disruption Protocol. The Association for the Advancement of Cost Engineering (AACE) has shared the recommend practices under 29R03 for Retrospective delay analysis. These protocols provide guidance on how to conduct a retrospective delay analysis in a fair and transparent manner. The retrospective delay analysis should be conducted in the following stages:",
                            "1. **Preparation of a Baseline Schedule** – The first step in conducting a retrospective delay analysis is to prepare a baseline schedule. This schedule should reflect the original project plan, including the planned start and finish dates for each activity.",
                            "2. **Identification of Delays** – Once the baseline schedule has been prepared, the next step is to identify the delays that occurred during the project. This can be done by comparing the baseline schedule to the as-built schedule, which reflects the actual start and finish dates for each activity.",
                            "3. **Assessment of Causes of Delays** – After identifying the delays, the next step is to assess the causes of the delays. This involves reviewing all relevant documents, including project records, correspondence, and meeting minutes. The assessment should be conducted objectively and without bias.",
                            "4. **Quantification of Delay** – Once the causes of the delay have been assessed, the next step is to quantify the delay. This involves determining the amount of time that each delay caused and the impact that it had on the project schedule.",
                            "5. **Apportionment of Responsibility** – The final step in conducting a retrospective delay analysis is to apportion responsibility for the delay. This involves determining who was responsible for the delay and to what extent."
                        ]
                    },
                    {
                        "title": "Prospective Delay Analysis",
                        "content": [
                            "Prospective delay analysis is a technique used to identify potential delays before they occur. This type of analysis is conducted during the execution phase of a project and aims to identify potential causes of delay, such as design changes or procurement issues. Prospective delay analysis involves reviewing the project plan, construction schedule, and other relevant documents to identify potential risks and develop strategies to mitigate them."
                        ]
                    },
                    {
                        "title": "SCL Protocol & AACE Recommended Practices for Prospective Delay Analysis",
                        "content": [
                            "According to the AACE recommended practices 52R06 & SCL delay and disruption protocol, the prospective delay analysis should be conducted in the following stages:",
                            "1. **Identification of Potential Risks** – The first step in conducting a prospective delay analysis is to identify potential risks that could cause delays in the project. This involves reviewing the project plan and other relevant documents to identify potential risks, such as design changes, procurement issues, or resource constraints.",
                            "2. **Assessment of Likelihood and Impact of Risks** – After identifying potential risks, the next step is to assess the likelihood and impact of each risk. This involves determining how likely each risk is to occur and the potential impact it could have on the project schedule.",
                            "3. **Development of Mitigation Strategies** – Once the likelihood and impact of each risk have been assessed, the next step is to develop strategies to mitigate the risks. This involves developing contingency plans, risk assessment & management and alternative approaches to ensure that the project stays on schedule.",
                            "4. **Monitoring and Control** – The final step in conducting a prospective delay analysis is to monitor and control the project to ensure that the mitigation strategies are effective. This involves regular review of the project plan and other relevant documents to identify any changes in the project environment that could impact the schedule. The recommended corrective actions such as increase in manpower, resources, schedule crashing, etc., also shall be considered to keep the project on track without delays."
                        ]
                    },
                    {
                        "title": "Comparison between Retrospective and Prospective Delay Analysis",
                        "content": [
                            "Retrospective and prospective delay analysis serve different purposes in the construction industry. Retrospective delay analysis is conducted after the delay event has occurred and aims to identify the causes and effects of the delay, as well as to determine responsibility for the delay. On the other hand, prospective delay analysis is conducted before the delay event occurs and aims to identify potential risks and develop strategies to mitigate them.",
                            "Retrospective delay analysis is often more complex than prospective delay analysis because it involves reviewing project records and documents to determine the causes of the delay. It also requires a deep understanding of the project environment, ‘what if’ scenarios, including the contractual relationships between the parties involved. In contrast, prospective delay analysis is focused on identifying potential risks and developing strategies to mitigate them, which requires a strong understanding of project management and risk management principles.",
                            "Both the SCL Protocol and AACE Recommended Practices emphasize the importance of transparency and objectivity in delay analysis. They also emphasize the need for a thorough understanding of the project environment, including the contractual relationships between the parties involved. By following these protocols and recommended practices, parties can ensure that delay analysis is conducted in a fair and transparent manner, and that the causes and effects of delays are accurately identified."
                        ]
                    },
                    {
                        "title": "Limitations of Retrospective Delay Analysis",
                        "content": [
                            "While retrospective delay analysis is an essential aspect of the construction industry, it is not without limitations. One significant limitation is the difficulty in accurately determining responsibility for the delay, which is a great challenge and careful studies are highly recommended. This is particularly true when multiple parties are involved in the project, and there are conflicting interests and perspectives.",
                            "Another limitation is the availability and accuracy of project records and documents. If project records and documents are incomplete or inaccurate, it can be challenging to accurately determine the causes of the delay. An effective source validation is essential in this process.",
                            "Finally, retrospective delay analysis can be time-consuming and expensive. It requires a significant amount of effort to review project records and documents and to determine the causes and effects of the delay. In some cases, it may be more practical to focus on developing strategies to mitigate the impact of the delay rather than trying to determine responsibility for the delay."
                        ]
                    },
                    {
                        "title": "Essential of Prospective Delay Analysis in Practice",
                        "content": [
                            "Prospective delay analysis is becoming increasingly popular in the construction industry, as it allows parties to identify potential risks and develop strategies to mitigate them before they occur. The following is an overview of how prospective delay analysis can be conducted in practice:",
                            "1. **Risk Identification** – The first step in conducting prospective delay analysis is to identify potential risks to the project schedule. This can be done by reviewing the project plan and other relevant documents and by consulting with key stakeholders.",
                            "2. **Risk Assessment** – The next step is to assess the likelihood and impact of each risk. This involves determining how likely each risk is to occur and the potential impact it could have on the project schedule.",
                            "3. **Mitigation Strategies** – Once the likelihood and impact of each risk have been assessed, the next step is to develop strategies to mitigate the risks. This may involve developing contingency plans and alternative approaches to ensure that the project stays on schedule.",
                            "4. **Monitoring and Control** – The final step in conducting prospective delay analysis is to monitor and control the project to ensure that the mitigation strategies are effective. This involves regular review of the project plan and other relevant documents to identify any changes in the project environment that could impact the schedule."
                        ]
                    },
                    {
                        "title": "Integration of Retrospective and Prospective Delay Analysis",
                        "content": [
                            "While retrospective and prospective delay analysis serve different purposes in the construction industry, they are not mutually exclusive. In fact, integrating both types of analysis can provide a more comprehensive understanding of the causes and effects of delays and can help parties to develop more effective strategies for mitigating the impact of delays.",
                            "Integrating retrospective and prospective delay analysis involves conducting retrospective delay analysis to identify the causes and effects of delays that have already occurred and using this information to inform prospective delay analysis. For example, if a delay was caused by a particular risk that was not identified in the original project plan, this risk can be added to the list of potential risks in the prospective delay analysis.",
                            "By integrating retrospective and prospective delay analysis, parties can ensure that they have a comprehensive understanding of the causes and effects of delays and are better equipped to develop effective strategies for mitigating the impact of delays."
                        ]
                    },
                    {
                        "title": "Retrospective Delay Analysis in Forensic Investigations",
                        "content": [
                            "Retrospective delay analysis is often used in Forensic Investigations to determine the causes and effects of project delays. Forensic delay analysis is a detailed examination of project records and documentation to determine the root causes of delays and to identify the parties responsible for those delays. The ultimate goal of forensic delay analysis is to determine if a delay was caused by a breach of contract or negligence and to quantify the damages associated with the delay.",
                            "Forensic delay analysis can be a complex and time-consuming process that requires expertise in project management, construction law, and delay analysis techniques. It is typically conducted by experienced delay analysts or forensic experts who have extensive knowledge of the construction industry and the principles of delay analysis.",
                            "The retrospective delay analysis is an important tool in forensic investigations because it provides a detailed historical record of the project’s progress, including all events and activities that contributed to the delay. This record is used to identify potential sources of delay, such as design changes, weather events, or material shortages, and to determine the impact of these events on the project schedule."
                        ]
                    },
                    {
                        "title": "Conclusion",
                        "content": [
                            "In a forensic investigation, the retrospective delay analysis is typically conducted after the project has been completed, and all project records and documentation have been collected. The delay analyst or forensic expert will review all relevant project documents, including contracts, schedules, change orders, and daily reports, to identify all events that contributed to the delay.",
                            "The forensic expert will then conduct a detailed analysis of each delay event, using delay analysis techniques such as critical path analysis, time impact analysis, and as-built analysis, to determine the cause and impact of the delay. This analysis will typically involve reviewing project records and interviewing key project personnel to gain a thorough understanding of the event.",
                            "Once the cause and impact of each delay event have been determined, the forensic expert will assess responsibility for the delay. This involves identifying which party or parties were responsible for the delay and to what extent. The forensic expert will review the contract and other relevant documentation to determine if any party breached the terms of the contract or acted negligently.",
                            "The final step in a forensic delay analysis is to calculate the delay damages. This involves determining the financial impact of the delay, including additional costs incurred by the contractor and any damages suffered by the project owner. The delay analyst or forensic expert will use industry-standard methods to calculate these damages, such as the total cost method, the modified total cost method, or the measured mile method."
                        ]
                    },
                    {
                        "title": "Disclaimer",
                        "content": [
                            "The approaches are detrimental and vary from case to case, either Retrospective or Prospective. The criticality and corresponding risk significances are the matter of final decision and required steps to proceed further. In a nutshell, individual cases are objective, and the detailed quality of inputs, professional analysis, and common sense are driving factors to move forward."
                        ]
                    }
                ]
            },{
                "title": "Hurdles to Overcome in Change Management",
                "displaycontent": "Change is inevitable in any construction or EPC (Engineering, Procurement, and Construction) project. However, managing changes effectively is critical to the success of any project. The change management process is a critical element of project management that involves identifying, documenting, approving, and implementing changes to the project. Despite its importance, there are several hurdles that can impede the change management process in construction/EPC projects. This article will discuss some common hurdles in the change management process and how to overcome them.",
                "content": [
                    {
                        "title": "Resistance to Change",
                        "content": [
                            "One of the biggest hurdles in the change management process is resistance to change.",
                            "Stakeholders may resist change for various reasons, including fear of the unknown, loss of control, and uncertainty about the impact of changes.",
                            "To overcome resistance to change, stakeholders should be involved in the change management process from the beginning, and their concerns should be addressed through effective communication and collaboration."
                        ]
                    },
                    {
                        "title": "Lack of Clear Process",
                        "content": [
                            "Another common hurdle in the change management process is a lack of clear process.",
                            "A clear process is essential to ensure that changes are managed effectively and efficiently.",
                            "The process should include procedures for identifying, evaluating, approving, and implementing changes, as well as procedures for documenting and communicating changes to all stakeholders.",
                            "A lack of clear process can result in confusion and delays in implementing changes, which can impact the project’s timeline and budget."
                        ]
                    },
                    {
                        "title": "Poor Communication",
                        "content": [
                            "Effective communication is critical to the success of any project, and this is especially true in the change management process.",
                            "Poor communication can lead to misunderstandings, misinterpretations, and delays in implementing changes.",
                            "To overcome this hurdle, stakeholders should communicate effectively and regularly throughout the change management process.",
                            "Communication should be clear, concise, and timely, and all stakeholders should be kept informed of any changes."
                        ]
                    },
                    {
                        "title": "Inadequate Resources",
                        "content": [
                            "Managing changes requires adequate resources, including personnel, tools, and technology.",
                            "A lack of resources can impede the change management process, leading to delays in implementing changes and increased project costs.",
                            "To overcome this hurdle, resources should be allocated appropriately and in a timely manner.",
                            "Project managers should ensure that they have the necessary resources to manage changes effectively."
                        ]
                    },
                    {
                        "title": "Poor Documentation",
                        "content": [
                            "Documentation is critical to the change management process as it provides evidence of changes made to the project.",
                            "Poor documentation can lead to disputes, delays, and additional costs.",
                            "To overcome this hurdle, project managers should ensure that changes are documented thoroughly, accurately, and in a timely manner.",
                            "All documentation should be easily accessible and organized to facilitate efficient and effective change management."
                        ]
                    },
                    {
                        "title": "Lack of Stakeholder Engagement",
                        "content": [
                            "Effective stakeholder engagement is essential to the success of the change management process.",
                            "Stakeholders should be involved in the process from the beginning, and their concerns and feedback should be considered.",
                            "A lack of stakeholder engagement can lead to resistance to change, delays in implementing changes, and increased project costs."
                        ]
                    },
                    {
                        "title": "Scope Creep",
                        "content": [
                            "Scope creep is the gradual expansion of project scope beyond its original boundaries, resulting in an increase in project costs and delays.",
                            "Scope creep can be a major hurdle in the change management process, as it can make it difficult to identify and manage changes effectively.",
                            "To overcome this hurdle, project managers should establish clear project scope boundaries, monitor changes closely, and ensure that all changes are documented and approved through the change management process."
                        ]
                    },
                    {
                        "title": "Time Constraints",
                        "content": [
                            "Time constraints can be a significant hurdle in the change management process, as they can make it challenging to manage changes effectively while adhering to project deadlines.",
                            "To overcome this hurdle, project managers should prioritize changes based on their impact on the project schedule and budget.",
                            "They should also establish a clear process for managing changes quickly and efficiently, while also ensuring that all stakeholders are informed and involved in the process."
                        ]
                    },
                    {
                        "title": "Contractual Obligations",
                        "content": [
                            "Contractual obligations can be a hurdle in the change management process, as they can limit the flexibility of the project team to make changes.",
                            "To overcome this hurdle, project managers should ensure that all contractual obligations are understood and considered when managing changes.",
                            "They should also work closely with legal counsel and other stakeholders to negotiate changes when necessary to ensure that the project’s best interests are served."
                        ]
                    },
                    {
                        "title": "Cultural and Organizational Factors",
                        "content": [
                            "Cultural and organizational factors can also be a hurdle in the change management process, as they can impact how changes are perceived and managed.",
                            "To overcome this hurdle, project managers should establish a culture of change management within the organization, emphasizing the importance of managing changes effectively and involving all stakeholders in the process.",
                            "They should also work to identify any cultural or organizational factors that may impede the change management process and develop strategies to address them."
                        ]
                    }
                ]
            },
            {
                "title": "Measured Mile Approach for Disruption Analysis",
                "displaycontent": "Construction projects can be complex, time-consuming, and often involve various disruptions. Disruptions can come in the form of change orders, delays, or unforeseen events that can impact the schedule, budget, and overall success of a project. In the Engineering, Procurement, and Construction (EPC) industry, it is important to understand and mitigate the impact of these disruptions. One approach to evaluating and mitigating the impact of disruptions is the Measured Mile approach.",
                "content": [
                    {
                        "title": "What is Measured Mile Approach?",
                        "content": [
                            "The Measured Mile approach is a method of evaluating the impact of disruptions on a construction project by comparing actual performance against a benchmark.",
                            "This benchmark is established by measuring the project’s performance at regular intervals throughout the project, typically using a control schedule.",
                            "By comparing actual performance against the control schedule, the Measured Mile approach provides a clear and objective picture of the project’s progress and the impact of disruptions.",
                            "Mainly used in disruption claims, three ways of comparison from the cost estimates are the contractor BOQ or tender estimate, an undisturbed benchmark from the similar scope, and the work disrupted.",
                            "The detailed breakdown with maximum level on resources such as manpower, equipment hours, and materials, and productivity is the key parameter in this approach."
                        ]
                    },
                    {
                        "title": "Benefits of Measured Mile Approach",
                        "content": [
                            "Objectivity: This approach offers an objective evaluation of the project’s progress, reducing subjectivity and ensuring accuracy.",
                            "Early Identification of Disruptions: It enables early identification of disruptions, allowing teams to respond promptly and mitigate their impact.",
                            "Improved Schedule and Budget Management: The approach helps project teams to better understand the impact of disruptions on the project schedule and budget, and make necessary adjustments.",
                            "Improved Collaboration and Decision Making: By providing a clear and objective picture of the project’s progress, the approach can improve collaboration among stakeholders and aid in informed decision making.",
                            "Reduced Disputes and Increased Transparency: It can also reduce disputes between stakeholders and promote increased transparency in the project."
                        ]
                    },
                    {
                        "title": "Steps in Implementing Measured Mile Approach",
                        "content": [
                            "1. Establish a Control Schedule: The first step in implementing the Measured Mile approach is to establish a control schedule. This schedule should reflect the project’s original plan and should be updated regularly to reflect any changes or disruptions.",
                            "2. Measure Performance: The next step is to measure the project’s performance at regular intervals, using the control schedule as a benchmark. This can be done using a variety of methods, including progress reports, site inspections, and performance data.",
                            "3. Evaluate Disruptions: Once performance has been measured, the next step is to evaluate the impact of disruptions on the project. This can be done by comparing actual performance against the control schedule and identifying any deviations from the original plan.",
                            "4. Mitigate Disruptions: The final step is to mitigate the impact of disruptions. This can involve making changes to the project schedule, budget, or scope, and implementing effective risk management strategies to minimize the impact of future disruptions."
                        ]
                    },
                    {
                        "title": "Limitations of Measured Mile Approach",
                        "content": [
                            "Complexity: The Measured Mile approach can be complex and time-consuming to implement, especially in large and complex projects. It requires a certain level of expertise to establish a control schedule, measure performance, and evaluate disruptions.",
                            "Cost: Implementing the Measured Mile approach can be costly, as it requires resources such as time, personnel, and technology. In addition, the cost of regular performance measurements and updates to the control schedule can add up over time.",
                            "Data Accuracy: The accuracy of the data used in the Measured Mile approach is critical to its success. However, collecting and analyzing accurate performance data can be challenging, especially in projects with multiple stakeholders and contractors.",
                            "Resistance to Change: Some project stakeholders may resist the use of the Measured Mile approach, especially if they are not familiar with it or if they are used to more traditional project management methodologies. This resistance can be overcome through effective communication, education, and training.",
                            "Limited Focus: The Measured Mile approach is primarily focused on evaluating and mitigating the impact of disruptions on the project schedule. While it can provide valuable information on budget and scope, it may not provide a complete picture of the project’s overall performance."
                        ]
                    },
                    {
                        "title": "Some of the Contemporaneous Records Needed for the Measured Mile Approach",
                        "content": [
                            "Project Schedule: A detailed project schedule is needed to establish a control schedule and measure performance against it. The schedule should include all activities, milestones, and deadlines, and should be updated regularly to reflect changes in the project scope and timeline.",
                            "Progress Reports: Progress reports should be submitted regularly by all contractors and project team members. These reports should detail the status of activities, any changes to the project schedule, and any disruptions that have occurred.",
                            "Daily Logs: Daily logs should be maintained to capture all events and activities that occur on the project site. This includes issues, problems, and disruptions, as well as their causes and resolutions.",
                            "Cost Records: Detailed cost records should be maintained to track actual costs against the project budget. This information can be used to evaluate the impact of disruptions on the project budget and make informed decisions on how to mitigate their impact.",
                            "Correspondence: All correspondence related to the project should be kept, including emails, memos, and meeting minutes. This information can be used to understand the reasons for disruptions and to make informed decisions on how to address them.",
                            "Meeting Minutes: Minutes should be taken of all project meetings, including regular progress meetings and meetings to discuss disruptions. These minutes can be used to understand the reasons for disruptions and to make informed decisions on how to address them."
                        ]
                    },
                    {
                        "title": "International Recognition",
                        "content": [
                            "The Measured Mile approach is widely recognized and used by construction industry organizations and associations around the world. However, there are a few international organizations and associations that have specifically endorsed or promote the use of the Measured Mile approach in construction projects. These include:",
                            "The Project Management Institute (PMI): PMI is a global professional organization for project management professionals. They endorse the Measured Mile approach as a best practice for managing disruptions in construction projects.",
                            "The Association for the Advancement of Cost Engineering International (AACE): AACE is a global professional organization that promotes the use of cost engineering and project management techniques in construction projects. They endorse the Measured Mile approach as a best practice for measuring and mitigating disruptions in construction projects.",
                            "The Chartered Institute of Building (CIOB): The CIOB is a global professional organization for construction professionals. They endorse the Measured Mile approach as a best practice for managing disruptions and ensuring the success of construction projects.",
                            "The International Project Management Association (IPMA): IPMA is a global professional organization for project management professionals. They endorse the Measured Mile approach as a best practice for managing disruptions in construction projects and promoting project success."
                        ]
                    },
                    {
                        "title": "History of the Measured Mile Approach",
                        "content": [
                            "The Measured Mile approach is a well-established method for managing disruptions in construction projects. Its history can be traced back to the late 1970s and early 1980s, and it has been widely adopted by construction industry professionals and organizations around the world.",
                            "Today, the Measured Mile approach remains a key tool for managing disruptions and ensuring the success of construction projects."
                        ]
                    }
                ]
            },
            {
                "title": "Powerful Contemporaneous Records For Forensic Schedule Delay Analysis",
                "displaycontent": "Forensic Schedule Delay Analysis, Unlike Conventional Delay Analysis, not only relies on the minimal protocols of the Delay analysis records such as Schedules and its updates, in addition they include a comprehensive range of contemporaneous records to establish a credible case of facts.",
                "content": [
                    "Forensic Schedule Delay Analysis, Unlike Conventional Delay Analysis, not only relies on the minimal protocols of the Delay analysis records such as Schedules and its updates, in addition they include a comprehensive range of contemporaneous records to establish a credible case of facts such as",
                    {
                        "title": "Key Contemporaneous Records",
                        "content": [
                            "The Original Baseline Schedule (Programme)",
                            "Schedule Float",
                            "Resource Loaded Schedule",
                            "Schedule updates",
                            "Documentation",
                            "Site Instructions",
                            "Weather records",
                            "Project meeting minutes (MoM)",
                            "Daily Project Reports",
                            "Method(s) statements",
                            "Shop Drawings (submitted & as-built)",
                            "Progress Measurement Procedures",
                            "Request for Information (RFI) or Engineering Queries",
                            "Emails",
                            "Letters",
                            "Site Photographs",
                            "Drawing & Document Register",
                            "Project Reports",
                            "Searching for evidence of claimable events",
                            "Is the contractor’s team really on their side?",
                            "Records of Variation work",
                            "Hand-over documentation",
                            "Claim mitigation",
                            "Personal Diaries",
                            "Subcontractors"
                        ]
                    },
                    {
                        "title": "The Original Baseline Schedule (Programme)",
                        "content": [
                            "This is a detailed, comprehensive and well-defined schedule that outlines all the tasks, the original scope of work with detailed activity(ies) listing, work break down structure (WBS), milestones and durations of a project.",
                            "The Original Baseline Schedule serves as a benchmark for measuring performance and progress of the project.",
                            "The Contract Execution Plan (CEP), and Project Execution Plan (PEP) are submitted thru the basis of the baseline.",
                            "It provides an understanding of the project scope, timeline, activity sequencing, logical relationship between tasks and purpose, the critical path(s) and expectations for all stakeholders."
                        ]
                    },
                    {
                        "title": "Schedule Float",
                        "content": [
                            "This is the amount of time available to complete a task, before it impacts the completion of the project.",
                            "Schedule float is an important factor in measuring project progress and can be used to assess the impact of delays on the project timeline.",
                            "The types of floats such as free float, and total floats, in which the total float is the factor determines the critical path.",
                            "In case of any disputes, schedule float provides a measurable metric for determining the extent of delay."
                        ]
                    },
                    {
                        "title": "Resource Loaded Schedule",
                        "content": [
                            "A resource loaded schedule is a project schedule that takes into account the availability of resources such as labor, equipment, materials, and budgeted cost(s).",
                            "This schedule provides an accurate picture of the project timeline and helps to identify any potential bottlenecks or constraints in the project schedule, which also help the team to understand the weightages and weighted averages.",
                            "The resource loaded schedule serves as an important contemporaneous record for assessing the impact of resource constraints on project delays."
                        ]
                    },
                    {
                        "title": "Schedule Updates",
                        "content": [
                            "Regular schedule updates are critical to ensuring that the project remains on track and on budget.",
                            "Schedule updates help to identify potential delays and allow project managers to take corrective and preventive actions to mitigate the impact of these delays.",
                            "Schedule updates also serve as a contemporaneous record of project progress, understanding the critical movements of the programme over periods of time and can be used to assess the impact of changes on the project timeline."
                        ]
                    },
                    {
                        "title": "Documentation",
                        "content": [
                            "Documentation of all project activities is essential for maintaining a clear and accurate record of the project.",
                            "This includes documentation of project meetings, project correspondence, contracts, assumption logs, and change logs.",
                            "Documentation is an important contemporaneous record for forensic schedule delay analysis as it provides evidence of any decisions, deviations from original scope of work, cost impacts, communications, or events that may have impacted the project schedule."
                        ]
                    },
                    {
                        "title": "Site Instructions",
                        "content": [
                            "Instructions issued by the employer or project manager play a crucial role in defining the scope of work and the timeline for completing tasks, creating additional level of details for progress monitoring and controlling.",
                            "Instructions can impact the progress of the project and can serve as an important contemporaneous record for determining the extent of delay."
                        ]
                    },
                    {
                        "title": "Weather records",
                        "content": [
                            "Weather conditions can have a significant impact on construction projects, particularly outdoor projects.",
                            "Weather records provide an objective measure of the impact of weather conditions on project progress and can serve as an important contemporaneous record for assessing the impact of weather delays on the project timeline, the loss of productivity, and natural damages."
                        ]
                    },
                    {
                        "title": "Project meeting minutes (MoM)",
                        "content": [
                            "Project meeting minutes serve as a comprehensive record of all project discussions and decisions made during project meetings.",
                            "Project meeting minutes provide an accurate and contemporaneous record of project progress and can be used to assess the impact of decisions or actions taken during project meetings on the project schedule."
                        ]
                    },
                    {
                        "title": "Daily Project Reports",
                        "content": [
                            "Daily project reports provide a regular update on the progress of the project and help to identify any potential delays.",
                            "Daily project reports are an important contemporaneous record of project progress and provide a basis for evaluating the impact of project delays."
                        ]
                    },
                    {
                        "title": "Request for Information (RFI) or Engineering Queries",
                        "content": [
                            "RFIs or Engineering Queries are used to clarify or resolve technical or design issues that may arise during the course of a project.",
                            "RFIs or Engineering Queries serve as a contemporaneous record of any issues or questions that may have impacted the project schedule and provide evidence of the steps taken to resolve these issues."
                        ]
                    },
                    {
                        "title": "Verbal and Non-verbal communications, and Emails",
                        "content": [
                            "Verbal communication includes the exchange of information and ideas through speech or writing. This can include face-to-face meetings, phone calls, video conferences, email, and instant messaging. An effective verbal communication is an important contemporaneous record.",
                            "As similar, the nonverbal communication includes the exchange of information through nonverbal and how it has been following, nonverbal communication related records can provide additional context and meaning to verbal communication, helping to build trust and convey emotional intelligence.",
                            "Both verbal and nonverbal communication play important roles as part of contemporaneous records and are essential for ensuring the success of a claims, and ensure the delivery of high-quality results."
                        ]
                    },
                    {
                        "title": "Official letters",
                        "content": [
                            "Letters serve as important contemporaneous records for Forensic Schedule Delay Analysis as they contain crucial information related to the project.",
                            "These letters include communication between the parties involved in the project such as the contractor, subcontractors, supplier, and the owner.",
                            "They detail information such as project changes, instructions, agreements, and disputes. They provide an objective and formal record of the events that occurred during the project timeline and can be used as evidence in the event of a delay dispute."
                        ]
                    },
                    {
                        "title": "Site Photographs",
                        "content": [
                            "Documenting project progress through photographs is important as it provides visual evidence of the work completed, and the state of the work site at various stages of the project.",
                            "The photographic evidence can assist in verifying that work was carried out in accordance with the project plans and schedules."
                        ]
                    },
                    {
                        "title": "Drawing & Document Register",
                        "content": [
                            "The Drawing and Document Register contains a comprehensive list of all drawings, documents and other relevant information associated with a construction project.",
                            "This record is important in Forensic Schedule Delay Analysis as it provides an overview of what documents and drawings were available to the contractors and when they were submitted, review cycle, approved and made ready for construction."
                        ]
                    },
                    {
                        "title": "Project Reports",
                        "content": [
                            "Project Reports, including Monthly Progress Reports and Progress Payments, provide a record of the work completed on a project, the work still to be done and any issues or delays that have arisen.",
                            "These reports are an important contemporaneous record of the project as they provide a snapshot of the project status at a specific point in time."
                        ]
                    },
                    {
                        "title": "Searching for Evidence of Claimable Events",
                        "content": [
                            "To determine whether a delay was caused by a claimable event, it is important to search for evidence that the event occurred and impacted the construction project.",
                            "This may include weather records, project meeting minutes, and documentation of the event and its impact on the project schedule."
                        ]
                    },
                    {
                        "title": "Is the contractor’s team really on their side?",
                        "content": [
                            "Determining the attitudes and motivations of the contractor’s team can provide important insight into the delays that occurred on a construction project.",
                            "Personal diaries, emails, and letters can all provide evidence of the attitudes and motivations of the contractor’s team, and assist in understanding whether the delays were caused by factors outside of the contractor’s control."
                        ]
                    },
                    {
                        "title": "Records of Variation work",
                        "content": [
                            "Variation work refers to changes to the scope of work or specifications of the project.",
                            "Records of variation work, including variations in the construction schedule, can assist in determining the impact of these changes on the project schedule."
                        ]
                    },
                    {
                        "title": "Hand-over Documentation",
                        "content": [
                            "Hand-over documentation refers to the documentation and information provided by the contractor to the owner or end-user at the completion of the construction project.",
                            "This documentation may include confirm the work is done to requirements, complete final procurement closure, final acceptance of the project, customer’s feedback about the deliveries, the final construction schedule, the as-built drawings and any other relevant information related to the project.",
                            "Hand-over documentation can provide important evidence of the project’s completion status, and assist in determining whether delays occurred during the construction phase of the project."
                        ]
                    },
                    {
                        "title": "Claim Mitigation",
                        "content": [
                            "In the event of a delay, the contractor may implement mitigation measures to reduce the impact of the delay on the project.",
                            "Records of claim mitigation, including the measures implemented and the results achieved, can assist in determining the impact of the delay on the project schedule and the effectiveness of the mitigation measures."
                        ]
                    },
                    {
                        "title": "Personal Diaries",
                        "content": [
                            "Personal diaries, including site diaries and personal journals, can provide important evidence of the events that occurred on a construction project, including delays and disruptions.",
                            "Personal diaries can also provide insight into the attitudes and motivations of the contractor’s team, all stakeholders and assist in understanding whether the delays were caused by factors outside of the contractor’s control."
                        ]
                    },
                    {
                        "title": "Subcontractors / Vendor Records",
                        "content": [
                            "Subcontractors and vendors play a critical role in the delivery of construction projects and important stakeholders, and their records can provide important evidence of the events that impacted the project schedule.",
                            "Records of subcontractor and vendor activities, including schedules and progress reports, can assist in determining the impact of these activities on the overall project schedule."
                        ]
                    },
                    {
                        "title": "Further Learning Opportunity",
                        "content": [
                            "For further understanding of the concept, kindly enroll to our Master Course on FSDA.",
                            "Link: https://lnkd.in/gjh3Xw8K"
                        ]
                    }
                ]
            },
            {
                "title": "Why should Contractors engage Claims Consultancies in spite of inhouse Contracts Team?",
                "displaycontent": "EPC projects are complex endeavors that require coordination between multiple stakeholders. While in-house contract teams play an important role, third-party construction claims consultancies can provide additional benefits for more effective claims management.",
                "content": [
                    {
                        "title": "Who is a Construction Claims Consultancy?",
                        "content": [
                            "A professional firm that provides independent and objective analysis, advice, and support for construction claims management.",
                            "They are not affiliated with any of the parties involved in the project, which allows them to provide impartial and objective recommendations.",
                            "Claims consultancies have specialized knowledge and expertise in construction claims and dispute resolution, enabling them to offer comprehensive and effective support for construction claims management."
                        ]
                    },
                    {
                        "title": "Benefits of Construction Claims Consultancies",
                        "content": [
                            "Objectivity: One of the main benefits of using a claims consultancy is their impartiality and objectivity. They are not tied to any particular party or project and are able to provide independent and unbiased recommendations. This can be particularly valuable in complex and contentious claims, where emotions and tensions can run high.",
                            "Expertise: Claims consultancies have specialized knowledge and expertise in construction claims and dispute resolution. They have extensive experience in the field and can provide comprehensive and effective support for construction claims management. This is especially valuable in cases where in-house contract specialists may lack the necessary expertise to manage complex claims.",
                            "Cost-Effective: Claims consultancies can provide cost-effective solutions for construction claims management. By providing expert support, they help resolve claims more quickly and efficiently, reducing the overall costs and duration of disputes, especially in complex claims where legal fees and expenses can be significant.",
                            "Access to Resources: Claims consultancies have access to a wide range of resources, including industry-standard software and databases, to manage and resolve construction claims. They also leverage networks and connections in the construction industry to provide additional support when needed.",
                            "Independent Perspective: A third-party claims consultancy can offer an independent perspective on construction claims, helping identify issues and solutions that may not be apparent to the involved parties. This can prevent disputes from escalating and help resolve claims more effectively."
                        ]
                    },
                    {
                        "title": "Even with In-house Contracts Teams, Claims Consultancies Provide Value",
                        "content": [
                            "Even with in-house contract specialists, third-party claims consultancies offer significant value. They provide impartial analysis, expert knowledge, and effective dispute resolution strategies that enhance claims management and ensure a smoother resolution of disputes.",
                            "By offering an independent perspective and utilizing extensive resources, claims consultancies streamline the claims process, minimizing the potential for disputes to escalate and reducing project delays."
                        ]
                    },
                    {
                        "title": "Industry Changes and the Role of Third-Party Consultants",
                        "content": [
                            "Project management approaches are evolving. Traditional waterfall methods are being enhanced by iterative development models like Agile, which breaks down project development into isolated phases that flow into each other while advocating for iterative development cycles.",
                            "While PMOs or in-house teams may have limitations, third-party consultants can go beyond these constraints. They collect valuable inputs, conduct frequent interviews with all stakeholders, and explore endless possibilities, offering solutions both prospectively and retrospectively."
                        ]
                    },
                    {
                        "title": "Conclusion",
                        "content": [
                            "In-house contract specialists are essential for project success, but third-party claims consultancies offer additional benefits. These firms bring impartiality, expertise, and access to resources that help manage construction claims efficiently and effectively.",
                            "Engaging third-party claims consultancies ensures better management of complex claims and leads to smoother project execution and timely resolution of disputes."
                        ]
                    }
                ]
            },
            {
                "title": "A Positive perspective on 'Negative Float'",
                "displaycontent": "Always a positive approach to a negative conclusion in project planning, monitoring, and controlling involves acknowledging the setback and its impact, but also focusing on the steps that can be taken to mitigate the negative effects and move forward.",
                "content": [
                    "Always a positive approach to a negative conclusion in project planning, monitoring, and controlling involves acknowledging the setback and its impact, but also focusing on the steps that can be taken to mitigate the negative effects and move forward. This includes identifying the root cause of the issue, developing a plan to address it, and implementing effective solutions.",
                    "An idea is neutralizing negative and positive in general. Additionally, it is important to maintain clear and open communication with team members and stakeholders to ensure that everyone is aware of the situation and working towards a resolution. By adopting a proactive and solution-oriented mindset, project managers can turn a negative conclusion into an opportunity for growth and improvement. Remember, Even the Lier expects truth from others.",
                    {
                        "title": "Use of the Negative Float hypothesis for pacing claims’ in critical path",
                        "content": [
                            "The phrase 'negative float' refers to a situation in project management where a task or project’s planned completion date is earlier than the anticipated completion date.",
                            "Negative float in the context of a critical route refers to a task on the critical path that is taking longer than anticipated, which may delay the project’s overall completion.",
                            "A claim or disagreement that arises when a project is delayed or when extra expenditures are spent as a result of unforeseen circumstances is referred to as a 'pacing claim' in construction projects.",
                            "A pacing claim is used to recover expenses or time wasted due to delays or other problems that weren’t the contractor’s or other party’s fault."
                        ]
                    },
                    {
                        "title": "What is negative float, and where we can use negative floats in a project schedule",
                        "content": [
                            "Negative floats, also known as 'negative slack,' the amount of time that must be saved to complete a project on time.",
                            "This means there is not enough time for the first task to be completed before the next task begins. Negative floats indicate a potential problem in the project schedule and should be addressed.",
                            "Negative floats are allowed in project schedule but it should be avoided as it indicates a problem in the project schedule."
                        ]
                    },
                    {
                        "title": "Use of Negative float in a project schedule analysis",
                        "content": [
                            "A negative float in a project schedule analysis indicates a potential delay in the project.",
                            "Float, also known as slack, is the amount of time that a task can be delayed without delaying the overall project completion date.",
                            "A negative float means that the task in question has less time available than is required to complete it, and therefore, the project may be delayed. It is important to address negative float as soon as it is identified in order to keep the project on schedule and mitigate any potential delays."
                        ]
                    },
                    {
                        "title": "Views of negative float as a positive side in a project management",
                        "content": [
                            "In project management refers to the amount of time that a task can be delayed without delaying the overall project completion date.",
                            "While a negative float may indicate potential issues with the project schedule, it can also have positive aspects.",
                            "One positive aspect of negative float is that it allows for flexibility in the project schedule. If a task is delayed, the project team can prioritize and adjust other tasks to ensure that the overall project completion date is not affected.",
                            "Another positive aspect is that negative float can serve as an early warning sign for potential schedule issues. Project managers can use this information to take proactive measures to address any potential problems before they become critical.",
                            "Negative float can also indicate the potential for cost savings. If a task is delayed and does not require additional resources or costs, the project can be completed under budget.",
                            "Overall, negative float can be viewed as a positive aspect of project management if it is used to identify and address potential issues, increase flexibility and save costs.",
                            "A negative float in a project schedule analysis can indicate that the project is ahead of schedule, meaning that tasks are being completed faster than originally planned. This can be viewed positively because it suggests that the project is on track to be completed ahead of the original deadline.",
                            "Additionally, a negative float can also provide more flexibility for the project team to make changes or address any issues that may arise without delaying the overall project completion."
                        ]
                    },
                    {
                        "title": "Pacing Delays as an example",
                        "content": [
                            "'Pacing almost never occurs in the context of a literal method of concurrency analysis.'",
                            "Particularly from Literal Theory (where delays 'happening at the same time') and Functional Theory ('delays need only occur within the same analysis period') perspectives.",
                            "In other words, as a ‘pacing’ delay cannot exist when occurring (totally) sequential to a ‘parent’ delay, ‘pacing’ delay must start and end during the occurrence of ‘parent’ delay (i.e. overlapping of delay periods is required to an extent for ‘pacing’); therefore, what are the limits for ‘pacing’ to be validly considered with Functional Theory where such ‘overlapping’ is not a must for delays to be treated as having concurrent effects?",
                            "The concept is that literal concurrency theory is based on being able to identify the start and finish if delays down to a fairly tight time frame, usually within a day, and so pacing can only occur when there is concurrency of the delays – in literal concurrency, the delays must actually start on the same day (if that’s the definition used for literal by the expert).",
                            "Parse concurrency down to hours and then the delays would have to start on the same hour, which is an extreme position but helps to clarify the issue.",
                            "With functional concurrency theory, any delays within the expert’s definition would be considered concurrent, so if the expert assumes functional concurrency within the update period, any delays that happened in that update period would be concurrent.",
                            "Example: Could be a delay that occurred on May 5, and if another delay happened on May 20, the expert would take the position that both are concurrent. That would allow a pacing claim.",
                            "Other way to add thought process on 'Functional Theory is considered a ‘pacing’ delay can occur with or without overlapping with the ‘parent’ delay period as long as both delays are within the same update/analysis period and have concurrent effects felt at the same time. (In other words, a ‘pacing’ delay can exist when occurring (totally) sequential to a ‘parent’ delay.'",
                            "If the owner had a delay, it added float to the schedule, which would be available downstream (later in the schedule) for another delay to absorb that float before creating a critical path delay. So that is the situation, with or without functional concurrency."
                        ]
                    },
                    {
                        "title": "What is pacing delay in delay analysis",
                        "content": [
                            "Pacing delay is a type of delay that occurs when a project is delayed due to a lack of resources, such as equipment or personnel.",
                            "This type of delay is often caused by issues that are outside of the control of the project team, such as delays in obtaining permits or approvals from regulatory agencies, or delays in receiving materials or equipment from suppliers.",
                            "Pacing delay can also occur when a project is delayed due to a lack of funding or other financial constraints.",
                            "In delay analysis, pacing delay is typically considered a non-compensable delay, meaning that the project owner or contractor is not entitled to recover damages or additional compensation for the delay."
                        ]
                    },
                    {
                        "title": "Pacing Claim using negative float theory for critical path",
                        "content": [
                            "The phrase 'negative float' refers to a situation in project management where a task or project’s planned completion date is earlier than the anticipated completion date.",
                            "Negative float in the context of a critical route refers to a task on the critical path that is taking longer than anticipated, which may delay the project’s overall completion.",
                            "A claim or disagreement that arises when a project is delayed or when extra expenditures are spent because of unforeseen circumstances is referred to as a 'pacing claim' in construction projects.",
                            "A pacing claim is used to recover expenses or time wasted due to delays or other problems that weren’t the contractor’s or other party’s fault."
                        ]
                    },
                    {
                        "title": "Advantages of Negative float in a project schedule analysis",
                        "content": [
                            "Negative float, also known as negative slack, indicates that a task or project is running behind schedule.",
                            "While this may seem like a disadvantage, there are some advantages to identifying negative float in a project schedule analysis:",
                            "Early identification of delays: Negative float serves as an early warning sign that a task or project is running behind schedule. This allows project managers to take corrective actions before the delay becomes too significant.",
                            "Prioritization of tasks: Negative float helps project managers prioritize tasks and make sure that critical tasks are completed on time.",
                            "Better resource allocation: Negative float helps project managers identify which tasks are running behind schedule and allocate resources accordingly.",
                            "Better communication: Negative float helps project managers communicate the status of a project more effectively to stakeholders.",
                            "Better risk management: Negative float can help project managers identify potential risks and take steps to mitigate them.",
                            "Overall, negative float is a useful tool for project managers to track the progress of a project and make data-driven decisions to keep the project on track."
                        ]
                    }
                ]
            },
            {
                "title": "Significance of Project Cost Control & Its Basis",
                "displaycontent": "Project cost control is important because it helps ensure that a project stays within its budget, which is crucial for the overall success of the project.",
                "content": [
                    {
                        "title": "Cost Control Measures",
                        "content": [
                            "Establish clear cost objectives and budgets.",
                            "Continuously monitor and track actual costs against budgets.",
                            "Identify and analyze variances between actual and budgeted costs.",
                            "Implement corrective actions to address cost overruns.",
                            "Utilize cost-benefit analysis to evaluate potential projects or initiatives.",
                            "Implement cost-saving measures, such as negotiating better prices with suppliers or streamlining processes.",
                            "Regularly review and update cost control procedures to ensure they remain effective.",
                            "Ensure that all employees understand and adhere to cost control policies and procedures.",
                            "Communicate cost performance to relevant stakeholders on a regular basis.",
                            "Continuously strive to improve cost efficiency."
                        ]
                    },
                    {
                        "title": "Essence of Cost Control",
                        "content": [
                            "The essence of cost control is to manage and minimize costs in order to increase efficiency and profitability. It involves setting clear cost objectives, tracking and monitoring actual costs, identifying and analyzing variances, implementing corrective actions and cost-saving measures, and regularly reviewing and updating cost control procedures. The ultimate goal is to optimize the use of resources and achieve the best possible return on investment.",
                            "Effective cost control can also help to improve decision making, and enhance the overall financial performance of an organization."
                        ]
                    },
                    {
                        "title": "Objective of Cost Control",
                        "content": [
                            "The main objective of cost control is to manage and minimize costs in order to increase efficiency, improve profitability, and achieve the best possible return on investment. Specifically, cost control aims to:",
                            "Establish clear cost objectives and budgets that align with the overall strategic goals of the organization.",
                            "Continuously monitor and track actual costs against budgets in order to identify variances and potential areas for improvement.",
                            "Implement corrective actions to address any cost overruns and ensure that resources are being used efficiently.",
                            "Utilize cost-benefit analysis to evaluate potential projects or initiatives and ensure that they are financially viable.",
                            "Implement cost-saving measures such as negotiating better prices with suppliers, streamlining processes, and reducing waste.",
                            "Regularly review and update cost control procedures to ensure they remain effective and aligned with the organization’s goals.",
                            "Communicate cost performance to relevant stakeholders on a regular basis to ensure transparency and accountability.",
                            "Continuously strive to improve cost efficiency and overall financial performance.",
                            "In summary, cost control is a process that helps organizations to identify, monitor and manage the costs associated with their activities and operations, with the ultimate goal of achieving better financial performance."
                        ]
                    },
                    {
                        "title": "Economic Analysis – An Intro",
                        "content": [
                            "Economic analysis is the process of evaluating the cost and benefits of a specific decision or project. It is used to determine the feasibility and potential impact of a project or policy, and can involve the use of various tools and techniques, such as cost-benefit analysis, cost-effectiveness analysis, and risk analysis. Economic analysis can be applied to a wide range of areas, including public policy, business, and finance. The goal is to understand the economic implications of a decision and make the best choice based on the available information."
                        ]
                    },
                    {
                        "title": "Applied Economic Analysis",
                        "content": [
                            "Applied economic analysis is the use of economic principles and methods to study and solve real-world problems. This can include analyzing the impact of government policies, studying market trends and consumer behavior, and forecasting economic performance. It often involves the use of statistical methods and econometric techniques to analyze data and make predictions. The goal of applied economic analysis is to provide practical insights and recommendations that can inform decision-making in the public and private sectors."
                        ]
                    },
                    {
                        "title": "Probability, Statistics, and Risk",
                        "content": [
                            "Probability is a measure of the likelihood of an event occurring. It is expressed as a number between 0 and 1, with 0 indicating that an event is impossible and 1 indicating that an event is certain.",
                            "Statistics is the field of study that deals with the collection, analysis, interpretation, presentation, and organization of data. It involves the use of mathematical concepts and methods to extract useful information from data. Risk, in the context of statistics and probability, refers to the likelihood of an adverse event occurring. It is often used in decision-making to evaluate the potential consequences of different courses of action.",
                            "In summary, probability is a measure of how likely an event is to occur, statistics is the field of using data to extract information, and risk is the measure of the likelihood of an adverse event."
                        ]
                    },
                    {
                        "title": "Cost Control vs Cost Optimization",
                        "content": [
                            "Cost control and cost optimization are both important strategies for managing costs in an organization. However, they have slightly different objectives and focus areas.",
                            "Cost control is primarily focused on managing and minimizing costs in order to increase efficiency and improve profitability. It involves setting clear cost objectives, tracking and monitoring actual costs, identifying and analyzing variances, implementing corrective actions and cost-saving measures, and regularly reviewing and updating cost control procedures. The goal of cost control is to ensure that resources are being used efficiently and effectively, and to avoid cost overruns.",
                            "Cost optimization, on the other hand, is focused on finding the most efficient and effective ways to deliver goods or services, by identifying and eliminating unnecessary costs, and maximizing the value of the goods or services. It involves identifying areas where costs can be reduced, and implementing strategies to minimize those costs while still maintaining quality. Cost optimization is the process of finding the best balance between cost, quality and speed.",
                            "In summary, cost control is primarily focused on managing and minimizing costs, while cost optimization is focused on finding the most efficient and effective ways to deliver goods or services while minimizing costs. Both are important in an organization and they should be used together in order to achieve the best results."
                        ]
                    },
                    {
                        "title": "Budget and Cost",
                        "content": [
                            "A budget is a financial plan that outlines projected income and expenses for a specific period of time, such as a fiscal year or a quarter. It is a tool used to manage and control costs by setting financial targets and monitoring actual performance against those targets. A budget typically includes projected revenue, expenses, and capital expenditures, as well as any other financial commitments or obligations.",
                            "Cost, on the other hand, refers to the monetary value of the resources (such as labor, materials, and overhead) that are consumed in the production of goods or services. In the context of budgeting, costs are the expenses that an organization incurs in order to achieve its goals and objectives.",
                            "Budgets and costs are closely related, as the budget serves as a tool for managing and controlling costs. A budget helps an organization to identify and plan for expected costs, and to track actual costs against those projections. By comparing actual costs to budgeted costs, an organization can identify variances and take corrective action to address any cost overruns.",
                            "In summary, budget is a financial plan that outlines projected income and expenses for a specific period of time, while cost is the monetary value of the resources consumed in the production of goods or services. The budget serves as a tool for managing and controlling costs by setting financial targets and monitoring actual performance against those targets."
                        ]
                    },
                    {
                        "title": "Cost Engineering vs Cost Accounting",
                        "content": [
                            "Cost engineering and cost accounting are two different but related disciplines that are used in managing costs in an organization.",
                            "Cost engineering is the process of applying engineering and management principles to estimate, control, and optimize the costs of a project or product. It involves the use of cost estimating techniques and tools, such as bottom-up and parametric estimating, to develop cost estimates for a project or product. Cost engineers also use cost management techniques to monitor and control project costs during the execution phase, and to optimize costs through value engineering and other cost reduction strategies.",
                            "Cost accounting, on the other hand, is the process of measuring, analyzing, and interpreting financial information in order to support decision-making and control costs. It involves the use of accounting principles and techniques to record, classify, and summarize financial information, and to prepare financial statements and reports. Cost accounting also includes the process of analyzing and interpreting this information to identify variances and trends, and to make recommendations for improving cost efficiency.",
                            "In summary, cost engineering is focused on managing and controlling costs during the planning and execution of a project, while cost accounting is focused on the measurement, analysis and interpretation of financial information for decision making and cost control. Both are important for an organization, cost engineering is more focused on the project side and cost accounting on the financial side."
                        ]
                    },
                    {
                        "title": "Budgeting Methodologies",
                        "content": [
                            "There are several budgeting methodologies that organizations can use to develop and manage their budgets. Some of the most common methodologies include:",
                            "Zero-based budgeting: This method starts from a “zero base” and involves building a budget from scratch each year. All expenses are justified and must be approved through a detailed review process.",
                            "Incremental budgeting: This method is based on the previous year’s budget and involves making adjustments for inflation and other factors. The budget is developed by adding or subtracting a certain percentage from the previous year’s budget.",
                            "Activity-based budgeting: This method focuses on the activities that drive costs and is used to identify and allocate costs to specific products, services, or projects.",
                            "Rolling budget: This method involves updating the budget on a regular basis, such as quarterly or annually, rather than creating a single budget for the entire year.",
                            "Flexible budgeting: This method adjusts the budget based on actual results and performance, rather than assuming that the budgeted results will be achieved.",
                            "Performance-based budgeting: This method uses performance metrics and key performance indicators (KPIs) to set budget targets and evaluate the effectiveness of budgeted activities.",
                            "Each of these methodologies has its own advantages and disadvantages, and the best approach will depend on the specific needs and goals of the organization. Organizations may use a combination of these methodologies for better results."
                        ]
                    },
                    {
                        "title": "Cost Control Tools",
                        "content": [
                            "There are several tools and techniques that organizations can use to manage and control costs. Some of the most common cost control tools include:",
                            "Budgeting: This tool is used to plan and forecast costs, and to track actual costs against budgeted amounts.",
                            "Variance analysis: This tool is used to identify and analyze differences between actual and budgeted costs, and to take corrective action to address any variances.",
                            "Break-even analysis: This tool is used to determine the point at which revenue equals costs, and can be used to determine pricing strategies and evaluate the feasibility of potential projects or initiatives.",
                            "Activity-based costing (ABC): This tool is used to identify and allocate costs to specific products, services, or projects, and can be used to improve cost-benefit analysis and decision-making.",
                            "Target costing: This tool is used to set cost targets for products or services and to manage costs in order to meet those targets.",
                            "Life-cycle costing: This tool is used to evaluate the costs associated with a product or service over its entire life-cycle, from development to retirement.",
                            "Cost-benefit analysis: This tool is used to evaluate the costs and benefits of a project or initiative and to determine whether it is financially viable.",
                            "Value engineering: This tool is used to optimize costs by identifying and eliminating unnecessary costs, and by improving the value of products or services.",
                            "Benchmarking: This tool is used to compare the performance and costs of an organization to those of other organizations in the same industry.",
                            "Earned Value Management: This tool is used to measure and track project performance by comparing planned and actual costs, schedule and scope of the project."
                        ]
                    },
                    {
                        "title": "Cost Control Philosophy",
                        "content": [
                            "There is a strong emphasis on living a simple and frugal lifestyle, and on minimizing waste and unnecessary consumption. This mindset can be applied to cost control in an organization, with a focus on finding ways to reduce costs while still maintaining quality and meeting the organization’s goals.",
                            "One of the key Indian philosophies that can be applied to cost control is the principle of 'Aparigraha,' which translates to non-possessiveness or non-attachment. This principle encourages individuals to let go of their attachment to material possessions, and to focus instead on what is truly essential. In the context of cost control, this principle can be applied by identifying and eliminating unnecessary costs and luxuries, and by focusing on the essentials.",
                            "In summary, cost control philosophy emphasizes minimizing waste and unnecessary consumption, and focusing on essentials. These principles can be applied to cost control in an organization, by identifying and eliminating unnecessary costs, regularly reviewing, and updating cost control procedures, and continuously striving for cost efficiency."
                        ]
                    }
                ]
            },
            {
                "title": "Failure to Notice results in the denial of construction claims.",
                "displaycontent": "Failure to submit notices is one of the biggest failings of contractors when it comes to claims.",
                "content": [
                    {
                        "title": "Notice of Claim",
                        "content": [
                            "The first notice that contractors should be aware of is the notice of claim. This notice is typically required to be submitted within a certain timeframe, usually specified in the contract, and it serves to notify the owner of the contractor’s claim for damages. This notice should include a detailed description of the events that led to the claim and the damages that the contractor is seeking. It should also include any supporting documentation such as photographs, invoices, and witness statements.",
                            "One of the biggest mistakes contractors make is not submitting notices within the timeframe specified in the contract. This can result in the contractor losing their right to recover damages, even if the claim is valid. Therefore, it’s essential for contractors to be familiar with the notice requirements of their contracts and to submit notices as soon as possible."
                        ]
                    },
                    {
                        "title": "Notice of Potential Claim",
                        "content": [
                            "Another important notice is the notice of potential claim. This notice serves to alert the owner that a potential claim may be forthcoming, even if the contractor is not yet certain of the damages or the cause of the claim. This notice should include a brief description of the events that may have led to the claim, and the contractor should also indicate that they are still investigating the matter. The notice of potential claim serves as a precautionary measure for the contractor, to ensure that they will not lose their right to claim for damages if it turns out that the cause of the problem was the owner’s responsibility."
                        ]
                    },
                    {
                        "title": "Notice of Delay",
                        "content": [
                            "The notice of delay is another important notice that contractors should be aware of. This notice serves to alert the owner that the contractor is experiencing delays that may impact the completion of the project. This notice should include a description of the delays, the cause of the delays, and the expected impact on the completion of the project. It should also include any supporting documentation such as weather reports, equipment failure reports and subcontractor’s delays notices.",
                            "Failure to submit notice of delays can result in the contractor being held responsible for any additional costs incurred by the owner as a result of the delays. Therefore, it’s essential for contractors to submit notices of delay as soon as possible and to keep the owner informed of any delays that may occur during the project."
                        ]
                    },
                    {
                        "title": "Notice of Termination",
                        "content": [
                            "Finally, the notice of termination is a critical notice that contractors should be aware of. This notice serves to notify the owner that the contractor is terminating the contract due to a material breach or other grounds. This notice should include a detailed description of the events that led to the termination, and the contractor should also indicate whether they are seeking damages as a result of the termination. The notice of termination should include supporting documentation such as emails, letters, and meetings minutes that shows the contractor’s efforts to resolve the issues before terminating the contract."
                        ]
                    },
                    {
                        "title": "Conclusion",
                        "content": [
                            "In conclusion, notices are an important part of the claims process, and contractors should be aware of the various types of notices that are required by their contracts. Failure to submit proper notices can result in the contractor losing their right to recover damages or even termination of the contract. Therefore, contractors should be familiar with the notice requirements of their contracts and should be diligent in submitting notices in a timely manner. They should also ensure that the notices are complete, accurate, and supported by the necessary documentation.",
                            "It is also important for contractors to keep accurate records and documentation of the events leading up to the claims process. This can include photographs, invoices, and witness statements, among other things. This will help to support the contractor’s claim."
                        ]
                    }
                ]
            },
            {
                "title": "\"Time at large\" - is it rarely successful?",
                "displaycontent": "When time is at large, there is no set deadline for completing the contracted work when time is limited. It does not imply, however, that the parties cannot set a realistic deadline for finishing the task. The contract must get closer to its completion date.",
                "content": [
                    {
                        "title": "Definition",
                        "content": [
                            "When time is at large, there is no set deadline for completing the contracted work when time is limited. It does not imply, however, that the parties cannot set a realistic deadline for finishing the task. The contract must get closer to its completion date.",
                            "A completion period stipulated in the contract may also become inoperative due to unforeseen events, again extending time. As an illustration, consider a situation in which the employer delays the project and no extension of the completion date is provided by the contract’s conditions.",
                            "Typically, the date by which the works outlined in the contract are to be finished is included in construction contracts, often declares, practical completion must be certified by this date.",
                            "When a completion date is absent or has passed its expiration date, the situation is referred to as “time at large.” The commitment to finish the job by a specific date is subsequently released to the contractor."
                        ]
                    },
                    {
                        "title": "How and where",
                        "content": [
                            "Time at large, what is it? For those of you who are unfamiliar with time banning provisions, contractors frequently utilize the time at large argument to circumvent them in claims-related issues. The main discussion point is a legal defense put out by contractors to disprove the liquidated damages provision. Time at large is said to occur when a project’s duration is not specified in the contract or the contract is no longer in effect. In this case, the contractor might argue that the contract no longer obligates the contractor to complete by the completion date specified in the contract, in which case the contractor is only required to complete the project within a certain period of time.",
                            "The key word here is reasonable, and to define it, the contractor typically has to spend a lot of money on claims consultants and lawyers. It should also be noted that, if the engineer does not properly administer the EOT provisions, the extension of time provisions in the contract, the contractor may be able to demonstrate a time at large argument. The contractor might argue that time is at large if the employer did not provide an EOT for a critical delay in accordance with the contract, in which case the employer would no longer be able to impose liquidated damages for subsequent critical delays because there would be no longer be a defined time for completion."
                        ]
                    },
                    {
                        "title": "The first of the following scenarios, where the project duration or completion date was not specified in the contract, may sound weird to some of you, but professionals who have worked in the field for with different experience level can at least know, when that it does occur; in reality.",
                        "content": [
                            "In the second scenario, if the employer or the engineer fails to grant the contractor an extension of time in accordance with the contract, such as within the time periods specified in the contract, or if no decision is made at all now, time could be at large. It should be noted, however, that a simple denial of an extension of time claim does not necessarily result in a time at large scenario unless it can be justified.",
                            "A third circumstance time also stretches out when a contract has no extension of time clause and is delayed by an employer’s delay event or an exceptional delay event, such as severe weather."
                        ]
                    },
                    {
                        "title": "Time at large – what is",
                        "content": [
                            "When a construction project is delayed through the fault of the employer, the employer is prevented from enforcing the original completion date and / or claiming liquidated damages (assuming the contractor has followed all ancillary notice provisions). In this situation, it is not uncommon for contractors to argue that time is ‘at large’ and the contractor’s obligation is simply to complete the works within a reasonable time. Whether or not a contractor will be successful in such a claim will depend on the contract between the parties and the facts surrounding the delay."
                        ]
                    },
                    {
                        "title": "Time when ceases to apply",
                        "content": [
                            "There are a lot of situations that can make it impossible to finish the task by the date the parties agreed. For instance, severe weather, a labour strike, a lack of the necessary material on the market, employer interference or prevention of his employees or other contractors, strikes or local unrest, etc. If the delay was not the employer’s fault, the employer will be entitled to claim liquidated damages in accordance with the terms of the contract. However, if the contractor is not at fault, he may sue for damages under the ordinary contract law. When time is of the essence in the contract, the aforementioned remedies are open to the respective parties. However, neither party will be allowed to use the same."
                        ]
                    },
                    {
                        "title": "Prevention from completion",
                        "content": [
                            "Most construction contracts have a clause that allows for an extension of time if the employer takes preventative action for any cause. It is incorrect to believe that the contractor will gain from the contract’s time extension clause. Instead, it works to preserve the liquidated damages clause in the event that the delay was caused by the employer’s or his agent’s actions, which is to the employer’s advantage.",
                            "In the context of a construction or engineering project, the principle that one party may not insist on a second party’s compliance with the contract, where the first party has itself prevented the second party from being able to comply."
                        ]
                    },
                    {
                        "title": "Delay caused due to contract changes",
                        "content": [
                            "The contract documents frequently give the owner the ability to alter the work while still staying within the general parameters of the agreement, including",
                            "(1) specifications (including drawings and designs);",
                            "(2) the method or style of performance;",
                            "(3) owner-furnished facilities, equipment, materials, services, or site; or",
                            "(4) directing a faster pace of completion of the work.",
                            "Contracts may also state that any other direction, instruction, interpretation, or conclusion from the owner’s representative that results in a change will be regarded as a change order, whether it is written down or spoken. Even though the owner may not label it as a change, constructive changes frequently result from owner activity or inaction. Rejecting a product that is permissible, for instance, could constitute a constructive alteration that entitles the contractor to an equitable adjustment, just as rejecting a method that is allowed by the contract could.",
                            "Any written order or oral order (including direction, instruction, interpretation, or determination) that results in a change shall be deemed to be a change order for purposes of this clause if the contractor notifies the client in writing of the order’s date, circumstances, and source as well as its nature."
                        ]
                    },
                    {
                        "title": "Considering Time at large – “To be or not to be”",
                        "content": [
                            "Earlier considering for time at large, Is there any preventive measure has been taken place either by the employer or the contractor to justify. Because the extension of time clause is unclear, it should be interpreted in the contractor’s favor as well.",
                            "Change of Scope also leads to change in time which needs serious evaluation/analysis when it comes to EOT. Independent Engineer or Authority Engineer has the obligation to determine EOT for the Contractor or project."
                        ]
                    },
                    {
                        "title": "Failure to grant extension amounts to time being at large",
                        "content": [
                            "One of the cases, the contract there stated that the building work had to be finished by a specific date, subject to an engineer-approved extension. An application for an extension was submitted two months prior to the completion date, but the engineer did not give it any thought until that day. The works were completed 112 days after the original date of completion. When the contractor was sued for failing to finish on time, the court determined that the contract obliged the engineer to assess a request for a deadline extension as soon as they were received and to determine how long it would last. There was no longer a set deadline by which the contract had to be finished or from which penalties might be levied since the obligation had not been fulfilled before the start of the original time frame.",
                            "Usually, the event that the extension depends on must occur in order for it to be approved. A time extension should be requested before the delay is actually caused, for instance, if extras are ordered that cause the work to be delayed. Such an order would have the effect of setting time at large, at least temporarily and potentially permanently."
                        ]
                    },
                    {
                        "title": "In Multiplex Constructions (U.K) Ltd. vs Honeywell Control Systems Ltd., 7 Mr. Justice Jackson held that the prevention principle is the promisee cannot ask for performance which he himself has prevented the promisor from doing.",
                        "content": [
                            "He stated: “In the field of construction law, one consequence of the prevention principle is that the employer cannot hold the contractor to a specified completion date, if the employer has by act or omission prevented the contractor from completing by that date. Instead time becomes at large and the obligation to complete by the specified date is replaced by an implied obligation to complete within a reasonable time. The same principle applies as between main contractor and sub-contractor. It is in order to avoid the operation of the prevention principle that many construction contracts and sub-contracts include provision for extension of time. Thus it can be seen that the extension of time clauses exists for the protection of both parties to a construction contract or sub-contract.”"
                        ]
                    },
                    {
                        "title": "The Conclusion: Make time essence to avoid time being at large",
                        "content": [
                            "The employer may set a reasonable deadline for completion of the task and terminate the contractor if they fail to do so if time has not been made the essence of the contract or the deadline has become inapplicable due to a waiver.",
                            "In situations where the clause making time of the essence has been waived, time may be made of the essence where there is unreasonable delay by a notice from the party who is not in default setting a reasonable deadline for completion and stating that, in the event the work is not finished within the deadline so fixed, he intends to enforce the deadline or abandon the contract. However, the period set must be reasonable in light of the situation at the time the notice is provided, as well as all the other factors involved.",
                            "If time is not crucial initially, it can become crucial later on by giving the other party notice. Time will be of the essence of the contract if it is so stated in the contract or if one of the parties sends a reasonable notice to the other party following an unreasonable delay on the part of the other party. If neither of the two has occurred, reasonable time will be taken into consideration as the period that will be of the contract’s essence.",
                            "One final point, because time is such a broad topic, It’s essential more to conduct further research."
                        ]
                    }
                ]
            },            
            {
                "title": "Why Two Indian Parties Prefer to have a Foreign Seated Arbitration",
                "displaycontent": "This topic is one of the most popular themes in recent years, it has always been popular since the law has been evolving as a result of different high court decisions, although, though.",
                "content": [
                    {
                        "title": "Why is selecting the arbitration venue so crucial in arbitration?",
                        "content": [
                            "We must remember that arbitration doesn’t operate in a legal vacuum, the process of arbitration requires the public justice system represented by the courts of the land to give validity and sanctity to the process of arbitration without the support of the courts of the land it will be very difficult for the process of arbitration to be there as a freestanding system of justice and that is why every arbitration is rooted in a particular legal jurisdiction and every arbitration has a judicial seat, which is the primary legal jurisdiction to which an arbitration is anchored.",
                            "Anchoring of the arbitration to a particular seat or a jurisdiction is important because it gives it legitimacy, legality and nationality, which has been beautifully summed up by the supreme court in a five-judge constitution bench in that landmark case Bharat Aluminium Co vs Kaiser Aluminium. The Supreme Court is accepted by most experts that in most of the national laws arbitrations are anchored to the seat, place and situs of arbitration and the Supreme Court quotes on Redfern and Hunter, one of the most authoritative books on international commercial arbitration to conclude that the seat of arbitration is intended to be the center of gravity of an arbitration."
                        ]
                    },
                    {
                        "title": "Three reasons to fix the seat Under the New York convention and law of the seat of arbitration are",
                        "content": [
                            "Fixes which law would govern the conduct of the arbitration.",
                            "Decides which courts can have supervisory and supportive jurisdiction over the arbitration.",
                            "Determines the nationality of an award which is so important from the purposes of enforcement of an award."
                        ]
                    },
                    {
                        "title": "The results of a study conducted by Queen Mary university of London and its school of arbitration",
                        "content": [
                            "A study conducted in 2018 was titled The Evolution Of International Arbitration.",
                            "Two questions were the important aspects of the study and the report, which this study culminated in. This is a report or the results of a particular question which was asked of the respondents in this survey as to,",
                            "Which was the most preferred seat of arbitration of the respondents’ organizations?",
                            "London still appears to have most preferred seat followed by Paris, Singapore, Hong Kong, Geneva, New York and Stockholm. If looked from an Indian perspective it would be Singapore, London, Paris, Hong Kong, would be the order in terms of the most preferred seats but of course the Queen Mary’s study is an international study and therefore the results are very different from what it would have been as it had the respondents predominantly from an Indian base of respondents. Further very interestingly, the second question asked to the respondents was",
                            "What were the more five most important reasons as to why would you select a particular seat of arbitration?",
                            "1. General reputation and recognition",
                            "2. Neutrality and impartiality of the local legal system",
                            "3. National arbitration law",
                            "4. Track record and enforcing",
                            "5. Availability and quality arbitrators who are familiar with the seat"
                        ]
                    },
                    {
                        "title": "These are also probably the reasons why in recent times there has been a trend for Indian parties to have a seat of arbitration outside of India.",
                        "content": [
                            "In such case, when two parties have a seat outside of India, as long as the award is not challenged and voluntarily enforced there shouldn’t be a problem. Nevertheless, if the award might have to be enforced in India then there is a high possibility that it might not be enforced because its unsure that Court may or might not oppose that award on the grounds that it interferes with the public policy of India."
                        ]
                    },
                    {
                        "title": "The perception:",
                        "content": [
                            "Even under such circumstances, the trend of Indian parties selecting a foreign seat of arbitration is still high. There is a perception that courts in India tend to interfere in the process of arbitration much more than they would do in other jurisdictions, reemphasizing the word “perception” and there are chances that it may not be the reality, that courts in India tend to interfere much more in domestic arbitrations seated in India vis-a-vis International commercial arbitration seated in India and foreign seated arbitrations."
                        ]
                    },
                    {
                        "title": "Interference of Courts in Domestic Arbitration – End of the perception:",
                        "content": [
                            "In recent times because of the insertion of Sub-section 2A in Section 34 (2A) under the 2015 amendments to the Indian Arbitration and Conciliation Act, it states that an arbitrary award arising out of arbitrations other than International Commercial Arbitrations may also be set aside by the court, if the court finds that the award is vitiated by patent illegality appearing on the face the award. This will be applicable only in domestic arbitrations and therefore it would not be there when your arbitration is seated outside of India."
                        ]
                    },
                    {
                        "title": "Speed- End of the perception:",
                        "content": [
                            "There is another perception that arbitration seated outside of India is of greater speed and efficiency in the delivery of awards in these foreign jurisdictions. This perception is not entirely true post 2015 amendments to the Indian Arbitration and Conciliation Act. There has been a great deal of discipline which has been injected into the arbitration process in India by virtue of a deadline for completion of arbitrations. So this perception that arbitration seated outside of India are speedier and more efficient is not justified, the manner in which arbitrations are conducted today post 2015. The scenario has been changed and now a deadline of 12 months from the completion of pleadings for an award to be delivered. Very rare to find such a timeline or a deadline incorporated in the statute for completion of an arbitration globally. For example, in the UK or the arbitration statute in Singapore, there are no deadlines specifically incorporated into statute with respect to completion of Arbitration."
                        ]
                    },
                    {
                        "title": "Party Autonomy vs Public Policy",
                        "content": [
                            "Party autonomy is the ability of parties in an arbitration to decide the procedure of arbitration and the flexibility to decide the process of an arbitration and the arbitrator with respect to procedural matters in an arbitration. With respect to the choice of a seat of arbitration which is also called place of arbitration is incorporated under Section 20 of the Indian Arbitration and Conciliation Act. Party Autonomy effectively is giving parties the freedom to choose the place of arbitration, however Section 2(2) of the Indian Arbitration and Conciliation Act which states that this part shall apply only if the place of arbitration is in India.",
                            "Section 20 to a large extent is derived from Article 20 of the The United Nations Commission on International Trade Law model law (UNCITRAL) which is the basis on which the 1996 arbitration act in India was based on.",
                            "The English Arbitration Act of 1996– Section 3 allows the same freedom and flexibility in choice of seat when the arbitration is in England and when the English arbitration act applies. Section 3 states the seat of arbitration means the juridical seat of arbitration designated by the parties to the agreement.",
                            "Domestic Arbitration Act of Singapore (AA) – Section2(1) defines the place of arbitration as the place of arbitration means the juridical seat of arbitration designated by the parties to the arbitration agreement."
                        ]
                    },
                    {
                        "title": "It was relatively very easy to challenge an award on the grounds of public policy before 2015 amendments",
                        "content": [
                            "It was relatively very easy to challenge an award on the grounds of public policy before 2015 amendments, which has removed the automatic stay on the execution of an award which was there earlier when challenged against public policy. One of the most important grounds on which it has been argued in a lot of cases in India is that two parties cannot have a seat of arbitration outside of India, is that it would be a violation of the principles of public policy permitting two Indian parties to have a seat of arbitration outside India.",
                            "Often, the Section(28) is brought into the whole picture which actually deals with the substance of a dispute and Section(58) starts with the words where the place of arbitration is situated in India in an arbitration other than an International Commercial arbitration, the arbitral tribunal shall decide the dispute submitted to arbitration in accordance with the substantive law for the time being in force in India. Two Indian parties, when the place of arbitration is situated in India, cannot choose a foreign substantive law of the contract but there have been certain decisions where this has been stretched to also refer to the procedural law of the arbitration and therefore there is a line of thinking that certain decisions of the high court and supreme court in India that two Indian parties by virtue of having a seat of arbitration outside of India would tend to be derogating from Indian law which would automatically apply to the situation and the most important decision which is quite often cited in favor of the argument is that two Indian parties cannot have a seat of arbitration outside of India relates to a series of contracts tendered by the National Highway Authority of India (NHAI)."
                        ]
                    },
                    {
                        "title": "Source",
                        "content": [
                            "Can two Indian Parties choose a Foreign Seat of Arbitration? by Ajay Thomas Advocate https://www.beyondlaw.in/"
                        ]
                    }
                ]
            }
            ]
        },
        {
            "category": 1,
            data :[
                {
                    "title": "\"Time at large\" - is it rarely successful?",
                    "displaycontent": "When time is at large, there is no set deadline for completing the contracted work when time is limited. It does not imply, however, that the parties cannot set a realistic deadline for finishing the task. The contract must get closer to its completion date.",
                    "content": [
                        {
                            "title": "Definition",
                            "content": [
                                "When time is at large, there is no set deadline for completing the contracted work when time is limited. It does not imply, however, that the parties cannot set a realistic deadline for finishing the task. The contract must get closer to its completion date.",
                                "A completion period stipulated in the contract may also become inoperative due to unforeseen events, again extending time. As an illustration, consider a situation in which the employer delays the project and no extension of the completion date is provided by the contract’s conditions.",
                                "Typically, the date by which the works outlined in the contract are to be finished is included in construction contracts, often declares, practical completion must be certified by this date.",
                                "When a completion date is absent or has passed its expiration date, the situation is referred to as “time at large.” The commitment to finish the job by a specific date is subsequently released to the contractor."
                            ]
                        },
                        {
                            "title": "How and where",
                            "content": [
                                "Time at large, what is it? For those of you who are unfamiliar with time banning provisions, contractors frequently utilize the time at large argument to circumvent them in claims-related issues. The main discussion point is a legal defense put out by contractors to disprove the liquidated damages provision. Time at large is said to occur when a project’s duration is not specified in the contract or the contract is no longer in effect. In this case, the contractor might argue that the contract no longer obligates the contractor to complete by the completion date specified in the contract, in which case the contractor is only required to complete the project within a certain period of time.",
                                "The key word here is reasonable, and to define it, the contractor typically has to spend a lot of money on claims consultants and lawyers. It should also be noted that, if the engineer does not properly administer the EOT provisions, the extension of time provisions in the contract, the contractor may be able to demonstrate a time at large argument. The contractor might argue that time is at large if the employer did not provide an EOT for a critical delay in accordance with the contract, in which case the employer would no longer be able to impose liquidated damages for subsequent critical delays because there would be no longer be a defined time for completion."
                            ]
                        },
                        {
                            "title": "The first of the following scenarios, where the project duration or completion date was not specified in the contract, may sound weird to some of you, but professionals who have worked in the field for with different experience level can at least know, when that it does occur; in reality.",
                            "content": [
                                "In the second scenario, if the employer or the engineer fails to grant the contractor an extension of time in accordance with the contract, such as within the time periods specified in the contract, or if no decision is made at all now, time could be at large. It should be noted, however, that a simple denial of an extension of time claim does not necessarily result in a time at large scenario unless it can be justified.",
                                "A third circumstance time also stretches out when a contract has no extension of time clause and is delayed by an employer’s delay event or an exceptional delay event, such as severe weather."
                            ]
                        },
                        {
                            "title": "Time at large – what is",
                            "content": [
                                "When a construction project is delayed through the fault of the employer, the employer is prevented from enforcing the original completion date and / or claiming liquidated damages (assuming the contractor has followed all ancillary notice provisions). In this situation, it is not uncommon for contractors to argue that time is ‘at large’ and the contractor’s obligation is simply to complete the works within a reasonable time. Whether or not a contractor will be successful in such a claim will depend on the contract between the parties and the facts surrounding the delay."
                            ]
                        },
                        {
                            "title": "Time when ceases to apply",
                            "content": [
                                "There are a lot of situations that can make it impossible to finish the task by the date the parties agreed. For instance, severe weather, a labour strike, a lack of the necessary material on the market, employer interference or prevention of his employees or other contractors, strikes or local unrest, etc. If the delay was not the employer’s fault, the employer will be entitled to claim liquidated damages in accordance with the terms of the contract. However, if the contractor is not at fault, he may sue for damages under the ordinary contract law. When time is of the essence in the contract, the aforementioned remedies are open to the respective parties. However, neither party will be allowed to use the same."
                            ]
                        },
                        {
                            "title": "Prevention from completion",
                            "content": [
                                "Most construction contracts have a clause that allows for an extension of time if the employer takes preventative action for any cause. It is incorrect to believe that the contractor will gain from the contract’s time extension clause. Instead, it works to preserve the liquidated damages clause in the event that the delay was caused by the employer’s or his agent’s actions, which is to the employer’s advantage.",
                                "In the context of a construction or engineering project, the principle that one party may not insist on a second party’s compliance with the contract, where the first party has itself prevented the second party from being able to comply."
                            ]
                        },
                        {
                            "title": "Delay caused due to contract changes",
                            "content": [
                                "The contract documents frequently give the owner the ability to alter the work while still staying within the general parameters of the agreement, including",
                                "(1) specifications (including drawings and designs);",
                                "(2) the method or style of performance;",
                                "(3) owner-furnished facilities, equipment, materials, services, or site; or",
                                "(4) directing a faster pace of completion of the work.",
                                "Contracts may also state that any other direction, instruction, interpretation, or conclusion from the owner’s representative that results in a change will be regarded as a change order, whether it is written down or spoken. Even though the owner may not label it as a change, constructive changes frequently result from owner activity or inaction. Rejecting a product that is permissible, for instance, could constitute a constructive alteration that entitles the contractor to an equitable adjustment, just as rejecting a method that is allowed by the contract could.",
                                "Any written order or oral order (including direction, instruction, interpretation, or determination) that results in a change shall be deemed to be a change order for purposes of this clause if the contractor notifies the client in writing of the order’s date, circumstances, and source as well as its nature."
                            ]
                        },
                        {
                            "title": "Considering Time at large – “To be or not to be”",
                            "content": [
                                "Earlier considering for time at large, Is there any preventive measure has been taken place either by the employer or the contractor to justify. Because the extension of time clause is unclear, it should be interpreted in the contractor’s favor as well.",
                                "Change of Scope also leads to change in time which needs serious evaluation/analysis when it comes to EOT. Independent Engineer or Authority Engineer has the obligation to determine EOT for the Contractor or project."
                            ]
                        },
                        {
                            "title": "Failure to grant extension amounts to time being at large",
                            "content": [
                                "One of the cases, the contract there stated that the building work had to be finished by a specific date, subject to an engineer-approved extension. An application for an extension was submitted two months prior to the completion date, but the engineer did not give it any thought until that day. The works were completed 112 days after the original date of completion. When the contractor was sued for failing to finish on time, the court determined that the contract obliged the engineer to assess a request for a deadline extension as soon as they were received and to determine how long it would last. There was no longer a set deadline by which the contract had to be finished or from which penalties might be levied since the obligation had not been fulfilled before the start of the original time frame.",
                                "Usually, the event that the extension depends on must occur in order for it to be approved. A time extension should be requested before the delay is actually caused, for instance, if extras are ordered that cause the work to be delayed. Such an order would have the effect of setting time at large, at least temporarily and potentially permanently."
                            ]
                        },
                        {
                            "title": "In Multiplex Constructions (U.K) Ltd. vs Honeywell Control Systems Ltd., 7 Mr. Justice Jackson held that the prevention principle is the promisee cannot ask for performance which he himself has prevented the promisor from doing.",
                            "content": [
                                "He stated: “In the field of construction law, one consequence of the prevention principle is that the employer cannot hold the contractor to a specified completion date, if the employer has by act or omission prevented the contractor from completing by that date. Instead time becomes at large and the obligation to complete by the specified date is replaced by an implied obligation to complete within a reasonable time. The same principle applies as between main contractor and sub-contractor. It is in order to avoid the operation of the prevention principle that many construction contracts and sub-contracts include provision for extension of time. Thus it can be seen that the extension of time clauses exists for the protection of both parties to a construction contract or sub-contract.”"
                            ]
                        },
                        {
                            "title": "The Conclusion: Make time essence to avoid time being at large",
                            "content": [
                                "The employer may set a reasonable deadline for completion of the task and terminate the contractor if they fail to do so if time has not been made the essence of the contract or the deadline has become inapplicable due to a waiver.",
                                "In situations where the clause making time of the essence has been waived, time may be made of the essence where there is unreasonable delay by a notice from the party who is not in default setting a reasonable deadline for completion and stating that, in the event the work is not finished within the deadline so fixed, he intends to enforce the deadline or abandon the contract. However, the period set must be reasonable in light of the situation at the time the notice is provided, as well as all the other factors involved.",
                                "If time is not crucial initially, it can become crucial later on by giving the other party notice. Time will be of the essence of the contract if it is so stated in the contract or if one of the parties sends a reasonable notice to the other party following an unreasonable delay on the part of the other party. If neither of the two has occurred, reasonable time will be taken into consideration as the period that will be of the contract’s essence.",
                                "One final point, because time is such a broad topic, It’s essential more to conduct further research."
                            ]
                        }
                    ]
                },            
                {
                    "title": "Why Two Indian Parties Prefer to have a Foreign Seated Arbitration",
                    "displaycontent": "This topic is one of the most popular themes in recent years, it has always been popular since the law has been evolving as a result of different high court decisions, although, though.",
                    "content": [
                        {
                            "title": "Why is selecting the arbitration venue so crucial in arbitration?",
                            "content": [
                                "We must remember that arbitration doesn’t operate in a legal vacuum, the process of arbitration requires the public justice system represented by the courts of the land to give validity and sanctity to the process of arbitration without the support of the courts of the land it will be very difficult for the process of arbitration to be there as a freestanding system of justice and that is why every arbitration is rooted in a particular legal jurisdiction and every arbitration has a judicial seat, which is the primary legal jurisdiction to which an arbitration is anchored.",
                                "Anchoring of the arbitration to a particular seat or a jurisdiction is important because it gives it legitimacy, legality and nationality, which has been beautifully summed up by the supreme court in a five-judge constitution bench in that landmark case Bharat Aluminium Co vs Kaiser Aluminium. The Supreme Court is accepted by most experts that in most of the national laws arbitrations are anchored to the seat, place and situs of arbitration and the Supreme Court quotes on Redfern and Hunter, one of the most authoritative books on international commercial arbitration to conclude that the seat of arbitration is intended to be the center of gravity of an arbitration."
                            ]
                        },
                        {
                            "title": "Three reasons to fix the seat Under the New York convention and law of the seat of arbitration are",
                            "content": [
                                "Fixes which law would govern the conduct of the arbitration.",
                                "Decides which courts can have supervisory and supportive jurisdiction over the arbitration.",
                                "Determines the nationality of an award which is so important from the purposes of enforcement of an award."
                            ]
                        },
                        {
                            "title": "The results of a study conducted by Queen Mary university of London and its school of arbitration",
                            "content": [
                                "A study conducted in 2018 was titled The Evolution Of International Arbitration.",
                                "Two questions were the important aspects of the study and the report, which this study culminated in. This is a report or the results of a particular question which was asked of the respondents in this survey as to,",
                                "Which was the most preferred seat of arbitration of the respondents’ organizations?",
                                "London still appears to have most preferred seat followed by Paris, Singapore, Hong Kong, Geneva, New York and Stockholm. If looked from an Indian perspective it would be Singapore, London, Paris, Hong Kong, would be the order in terms of the most preferred seats but of course the Queen Mary’s study is an international study and therefore the results are very different from what it would have been as it had the respondents predominantly from an Indian base of respondents. Further very interestingly, the second question asked to the respondents was",
                                "What were the more five most important reasons as to why would you select a particular seat of arbitration?",
                                "1. General reputation and recognition",
                                "2. Neutrality and impartiality of the local legal system",
                                "3. National arbitration law",
                                "4. Track record and enforcing",
                                "5. Availability and quality arbitrators who are familiar with the seat"
                            ]
                        },
                        {
                            "title": "These are also probably the reasons why in recent times there has been a trend for Indian parties to have a seat of arbitration outside of India.",
                            "content": [
                                "In such case, when two parties have a seat outside of India, as long as the award is not challenged and voluntarily enforced there shouldn’t be a problem. Nevertheless, if the award might have to be enforced in India then there is a high possibility that it might not be enforced because its unsure that Court may or might not oppose that award on the grounds that it interferes with the public policy of India."
                            ]
                        },
                        {
                            "title": "The perception:",
                            "content": [
                                "Even under such circumstances, the trend of Indian parties selecting a foreign seat of arbitration is still high. There is a perception that courts in India tend to interfere in the process of arbitration much more than they would do in other jurisdictions, reemphasizing the word “perception” and there are chances that it may not be the reality, that courts in India tend to interfere much more in domestic arbitrations seated in India vis-a-vis International commercial arbitration seated in India and foreign seated arbitrations."
                            ]
                        },
                        {
                            "title": "Interference of Courts in Domestic Arbitration – End of the perception:",
                            "content": [
                                "In recent times because of the insertion of Sub-section 2A in Section 34 (2A) under the 2015 amendments to the Indian Arbitration and Conciliation Act, it states that an arbitrary award arising out of arbitrations other than International Commercial Arbitrations may also be set aside by the court, if the court finds that the award is vitiated by patent illegality appearing on the face the award. This will be applicable only in domestic arbitrations and therefore it would not be there when your arbitration is seated outside of India."
                            ]
                        },
                        {
                            "title": "Speed- End of the perception:",
                            "content": [
                                "There is another perception that arbitration seated outside of India is of greater speed and efficiency in the delivery of awards in these foreign jurisdictions. This perception is not entirely true post 2015 amendments to the Indian Arbitration and Conciliation Act. There has been a great deal of discipline which has been injected into the arbitration process in India by virtue of a deadline for completion of arbitrations. So this perception that arbitration seated outside of India are speedier and more efficient is not justified, the manner in which arbitrations are conducted today post 2015. The scenario has been changed and now a deadline of 12 months from the completion of pleadings for an award to be delivered. Very rare to find such a timeline or a deadline incorporated in the statute for completion of an arbitration globally. For example, in the UK or the arbitration statute in Singapore, there are no deadlines specifically incorporated into statute with respect to completion of Arbitration."
                            ]
                        },
                        {
                            "title": "Party Autonomy vs Public Policy",
                            "content": [
                                "Party autonomy is the ability of parties in an arbitration to decide the procedure of arbitration and the flexibility to decide the process of an arbitration and the arbitrator with respect to procedural matters in an arbitration. With respect to the choice of a seat of arbitration which is also called place of arbitration is incorporated under Section 20 of the Indian Arbitration and Conciliation Act. Party Autonomy effectively is giving parties the freedom to choose the place of arbitration, however Section 2(2) of the Indian Arbitration and Conciliation Act which states that this part shall apply only if the place of arbitration is in India.",
                                "Section 20 to a large extent is derived from Article 20 of the The United Nations Commission on International Trade Law model law (UNCITRAL) which is the basis on which the 1996 arbitration act in India was based on.",
                                "The English Arbitration Act of 1996– Section 3 allows the same freedom and flexibility in choice of seat when the arbitration is in England and when the English arbitration act applies. Section 3 states the seat of arbitration means the juridical seat of arbitration designated by the parties to the agreement.",
                                "Domestic Arbitration Act of Singapore (AA) – Section2(1) defines the place of arbitration as the place of arbitration means the juridical seat of arbitration designated by the parties to the arbitration agreement."
                            ]
                        },
                        {
                            "title": "It was relatively very easy to challenge an award on the grounds of public policy before 2015 amendments",
                            "content": [
                                "It was relatively very easy to challenge an award on the grounds of public policy before 2015 amendments, which has removed the automatic stay on the execution of an award which was there earlier when challenged against public policy. One of the most important grounds on which it has been argued in a lot of cases in India is that two parties cannot have a seat of arbitration outside of India, is that it would be a violation of the principles of public policy permitting two Indian parties to have a seat of arbitration outside India.",
                                "Often, the Section(28) is brought into the whole picture which actually deals with the substance of a dispute and Section(58) starts with the words where the place of arbitration is situated in India in an arbitration other than an International Commercial arbitration, the arbitral tribunal shall decide the dispute submitted to arbitration in accordance with the substantive law for the time being in force in India. Two Indian parties, when the place of arbitration is situated in India, cannot choose a foreign substantive law of the contract but there have been certain decisions where this has been stretched to also refer to the procedural law of the arbitration and therefore there is a line of thinking that certain decisions of the high court and supreme court in India that two Indian parties by virtue of having a seat of arbitration outside of India would tend to be derogating from Indian law which would automatically apply to the situation and the most important decision which is quite often cited in favor of the argument is that two Indian parties cannot have a seat of arbitration outside of India relates to a series of contracts tendered by the National Highway Authority of India (NHAI)."
                            ]
                        },
                        {
                            "title": "Source",
                            "content": [
                                "Can two Indian Parties choose a Foreign Seat of Arbitration? by Ajay Thomas Advocate https://www.beyondlaw.in/"
                            ]
                        }
                    ]
                }
                
            ]
        }
    // add category and data here 

    ]
    
    const categories = [
        { category: 0, title: "Construction" },
        { category: 1, title: "Cost Engineering" },
    ];

    const [filteredBlogs, setFilteredBlogs] = useState(blogs[0].data);

    useEffect(() => {
        // Filter blogs based on category selection
        const vv = blogs[categoriesData].data;
        setFilteredBlogs(vv);
        scroller.scrollTo('#blogs1', {
                smooth: true,
                duration: 2000,
        });
    }, [categoriesData]); // Depend on both 'categoriesData' and 'blogs'

    useEffect(() => {
        Aos.init({ duration: 1000, once: true, startEvent: 'DomContentLoaded' });
    }, []);

    // Close sidebar on clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)
            ) {
                setIsSidebarVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [isDropdownVisible, setDropdownVisible] = useState(false); // Initially hidden

    const toggleDropdownVisibility = () => {
        setDropdownVisible((prev) => !prev); // Toggle visibility
    };

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => {
            const newState = !prev;
            if (newState) {
                // Scroll to the top of the blogs section when the sidebar is shown
                window.scrollTo(0, 0);
            }
            return newState;
        });
    };

    return (
        <>
            <Helmet>
                <title>{(id!=undefined || categoryId!=undefined) ? blogs[categoryId]?.data[id]?.title : "Explore Our Blogs"}</title>
                <meta name="description" content={(id!=undefined || categoryId!=undefined) ? blogs[categoryId]?.data[id]?.title : ""} />
                <meta property="og:title" content={(id!=undefined || categoryId!=undefined) ? blogs[categoryId]?.data[id]?.title : "Explore Our Blogs"} />
                <meta property="og:description" content={(id!=undefined || categoryId!=undefined) ? blogs[categoryId]?.data[id]?.title : "Explore Our Blogs"} />
                <meta property="og:url" content={`https://pragmaticpc.com/blogs`} />
                <link rel="icon" type="image/x-icon" href="https://pragmaticpc.com/wp-content/uploads/2023/11/cropped-LOGO-HD-1-159x52.png" />
                </Helmet>
            <div className="blogs-page1">
                <div className="other-navbar">
                    {
                        (id===undefined || categoryId==undefined) ?
                        <button
                        ref={toggleBtnRef}
                        className="sidebar-toggle-btn"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button> : null
                    }
                    
                    <Navbar 
                        pos="relative"
                        isDropdownVisible={isDropdownVisible}
                        toggleDropdownVisibility={toggleDropdownVisibility}
                    />
                </div>

                <div className="blogs-page">
                    { (id===undefined || categoryId==undefined) ? 
                    <div id="services-side" ref={sidebarRef} className={`blogs-side ${isSidebarVisible ? 'visible' : ''}`}>
                        <div id="servi-button" className="blogs-side1">
                            <h1 
                                id="blog-category-close" 
                                onClick={() => setIsSidebarVisible(false)} 
                                className="blog-category-headi"
                            >
                                X
                            </h1>
                        </div>
                        <div id="servi" className="blogs-side1">
                            <h1 className="blog-category-headi">Blog Categories</h1>
                        </div>
                        <div id="services-side-bar">
                            {categories.map((category) => (
                                <div
                                    key={category.category}
                                    onClick={() => setCategoriesData(category.category)}
                                    className={`blog-category ${category.category === categoriesData ? 'blog-active' : ''}`}
                                >
                                    <a className={`blog-category-heading ${category.category === categoriesData ? 'blog-active1' : ''}`}>
                                        {category.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    : null
                    }
                    <div id="blogs1" className="blogs">

                        { (id===undefined || categoryId==undefined) ? 
                                <div className="blogs-page4">
                                    {
                                    filteredBlogs.map((blog, index) => (
                                        <div onClick={()=> {navigator(`${categoriesData}/${index}`) }} key={index} id="blog12" className="blog">
                                            <div className="blog-line">
                                                <h1 className="blog-heading">{blog.title}</h1>
                                            </div>
                                            <div className="blog-line2"></div>
                                            <p id="blog-screen" className="blog-content">
                                            {blog.displaycontent?.length > 60 ? blog.displaycontent.substring(0, 200) : blog.displaycontent}
                                            <a className="seemoreblogs" href={`${categoriesData}/${index}`}>See more</a>
                                            </p>
                                        </div>
                                    ))
                                    }
                                </div>
                        :
                            <div className="blog-singl1-page">
                                <h1 className="blog-content-heading">{blogs[categoryId].data[id].title}</h1>
                                {
                                    blogs[categoryId]?.data[id]?.content.map((content, index) => (
                                        typeof content === 'string' ? (
                                        <p key={index} className="blog-content1">{content}</p>
                                        ) : (
                                        <div key={index} className="blog-content2">
                                            <h1 id="blog-content1-heading" className="blog-content1"><b>{content?.title}</b></h1>
                                            {Array.isArray(content?.content) && content.content.map((content1, index1) => (
                                            <p key={index1} className="blog-content1">{content1}</p>
                                            ))}
                                        </div>
                                        )
                                    ))
                                }

                                
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
