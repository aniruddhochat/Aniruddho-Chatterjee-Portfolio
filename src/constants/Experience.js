import iub from "../assets/experience/iub.svg";
import siemens from "../assets/experience/siemens1.svg";
import pwc from "../assets/experience/pwc.svg";
import python from "../assets/experience/python.svg";
import postgresql from "../assets/experience/postgresql.svg";

import dotnet from "../assets/dotnet.svg";
import dotnetcore from "../assets/dotnetcore.svg";
import azure from "../assets/azuredevops.svg";
import azuresql from "../assets/azuresql.svg";
import mssql from "../assets/mssql.svg";
import csharp from "../assets/csharp.svg";
import xpp from "../assets/xpp.png";
import tfs from "../assets/tfs.svg";

export const ExperienceList = [
    {
      company: "Indiana University Bloomington",
      title: "Database Coordinator",
      years: "July 2023 - Present",
      technologies: [
        {img:python,description:"Python"},
        {img:postgresql,description:"PostgreSQL"},
      ],
      img:iub,
      description:[
        "• Revved up system speed by 35% - fine-tuned Oracle SQL Server and PostgreSQL processes, zapped inefficiencies with smart query tweaks, and dove deep into log files for a thorough analysis.",
        "• Efficiency wasn’t just a goal; it became the heartbeat of the system.",
        ],
    },
    {
      company: "Siemens Healthineers Pvt Ltd",
      title: "Software Development Intern",
      years: "May 2023 - Aug 2023",
      technologies: [
        {img:csharp,description:"C#"},
        {img:dotnet,description:".NET"},
        {img:dotnetcore,description:".NET Core"},
        {img:mssql,description:"SQL Server"},
        {img:azure,description:"Azure DevOps"},
      ],
      img:siemens,
      description: [
        "• Embarked on a migration adventure, smoothly transferring Test Management data from Azure DevOps Server to Azure DevOps Services. Armed with C# and the .NET Framework, I built a sleek data hub for efficient storage, retrieval, and reporting.",
        "• Revamped the code with a touch of magic – introducing multi-threading and parallelization. The result? A 60% boost in speed, making resource-intensive tasks a breeze.",
        "• In the world of real-time, brought projects to life. Thanks to nifty Azure DevOps web hooks and a custom .NET Web API, CRUD operations became as easy as a snap. Project visibility soared, and stakeholders? Delighted."
      ],
    },
    {
        company: "PricewaterhouseCoopers Pvt Ltd",
        title: "Senior Software Developer",
        years: "April 2021 - Aug 2022",
        technologies: [
          {img:xpp,description:"X++"},
          {img:csharp,description:"C#"},
          {img:azuresql,description:"Azure SQL"},
          {img:mssql,description:"SQL Server"},
          {img:azure,description:"Azure DevOps"},
          {img:tfs,description:"TFS"},
        ],
        img:pwc,
        description:[
            "• Led the charge in bringing Microsoft Dynamics 365 ERP to the doorstep of Fortune 500 giants, crafting a global Finance and Operations powerhouse. Picture a data-centric, scalable marvel that redefines how business manages its finances and operations.",
            "• Mastered the Dynamics Lifecycle Services (LCS), handling everything from Azure deployment to debugging with finesse. This streamlined approach boosted project execution by a solid 20%.",
            "• Cut deployment time by 30% – a feat achieved by keeping a tight ship with code check-ins on TFS/Azure DevOps and crafting slick CI/CD pipelines.",
            "• Played a vital role in every phase of the project, from go-live to troubleshooting. The outcome? Happier clients, a more efficient team, and a job well done.",
        ]
    },
    {
        company: "PricewaterhouseCoopers Pvt Ltd",
        title: "Software Developer",
        years: "July 2017 - March 2021",
        technologies: [
          {img:xpp,description:"X++"},
          {img:csharp,description:"C#"},
          {img:azuresql,description:"Azure SQL"},
          {img:mssql,description:"SQL Server"},
          {img:azure,description:"Azure DevOps"},
          {img:tfs,description:"TFS"},
        ],
        img:pwc,
        description:[
            "• Linked up Dynamics 365 ERP and Dynamics 365 CRM seamlessly, weaving together tools like Dual Write and Common Data Service(CDS). Tied the knot with third-party apps too, courtesy of Azure Logic Apps.",
            "• Boosted data flow efficiency by a solid 30% through some tech magic – AOT customizations, COC extensions, and slick integration with external apps via OData and SOAP/REST API services.",
            "• Made data more accessible than ever by exporting it into Azure Blob Storage with Data Entities and Data Management Framework. Leveraged Azure Functions to serve it up via REST APIs, making third-party applications sing with joy.",
            "• Crafted tailored financial and transactional reports using SQL, SSRS, and Power BI. The result? Decision-making got sharper, and business outcomes soared.",
        ]
    },
  ];