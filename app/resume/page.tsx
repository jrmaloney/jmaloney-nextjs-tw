"use client";
import React from "react";
import DownloadButton from "@/components/DownloadButton";

const Resume = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between mt-4 no-print mb-8">
            <button onClick={() => window.print()} className="mt-4 px-4 py-2 bg-[#d2cebc] text-[#3b3b3b] font-bold rounded no-print hover:bg-[#bfb8a4] hover:text-black cursor-pointer transition duration-300 hidden md:inline-block">Print Resume</button>
            <DownloadButton buttonLabel="Download PDF" href="/files/John_Maloney_Resume.pdf" downloadName="John_Maloney_Resume.pdf"/>
        </div>

      <h1 className="text-4xl font-bold mb-4 text-center">John R. Maloney</h1>
      <p className="text-lg mb-2 text-center" >
        <strong>Weymouth, MA</strong> | <a href="mailto:jrmaloney@gmail.com" target="_blank" className="text-blue-500">jrmaloney@gmail.com</a> | <strong>617.694.9413</strong> | <a href="https://www.linkedin.com/in/john-r-maloney" target="_blank" className="text-blue-500">LinkedIn</a>
      </p>
      {/**
      <p className="text-lg mb-2 text-center" >
        <a href="https://www.linkedin.com/in/john-r-maloney" target="_blank" className="text-blue-500">LinkedIn</a> | <a href="https://jmaloney.net" target="_blank" className="text-blue-500">Website</a> | <a href="https://github.com/jrmaloney" target="_blank" className="text-blue-500">GitHub</a>
      </p>
      */}
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          Experienced digital development leader and <strong>enterprise architect</strong> with a proven track record of crafting award-winning digital experiences. Proficient in <strong>Agile methodologies</strong> and skilled at fostering <strong>cross-functional collaboration</strong> among business, product, and development teams. Adept at <strong>translating strategic business needs</strong> into integrated digital solutions that align with core enterprise technologies, driving initiatives across sales, marketing, and operations. Early career experience in financial, compliance, and regulatory auditing provides a strong foundation in <strong>risk management and corporate governance</strong>.        
        </p>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">MERGE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">SVP, Group Technology Leader | 04/2023 – 01/2025</h4>
          <ul className="list-disc pl-5">
            <li><strong>Architectural Review Board (ARB) member,</strong> leading cloud & infrastructure decisions and governance</li>
            <li>Oversaw the <strong>management of 30+ hosted sites</strong> across <strong>Rackspace, Azure, and AWS</strong>, ensuring security, scalability, and cost efficiency</li>
            <li>Led an initiative to transition all resource provisioning and management to an <strong>Infrastructure as Code (IaC)</strong> model, improving <strong>deployment consistency and scalability</strong></li>
            <li>Architected digital solutions across various verticals and application stacks</li>
            <li><strong>Managed and mentored</strong> a 15-member development team, including full-time and freelance engineers</li>
            <li>Collaborated with program management leaders to continuously enhance our delivery model</li>
            <li>Oversaw <strong>resource allocation, budgeting, and project profitability</strong></li>
            <li>Conducted project retrospectives to enhance <strong>development processes and team performance</strong></li>
            <li>Spearheaded new scopes of work within strategic client accounts</li>
          </ul>

          {/* Page Break for Print Version*/}
          <div className="print-page-break"></div>
          <h4 className="text-lg font-semibold mt-4">VP, Technology Leader | 04/2017 – 04/2023</h4>
          <ul className="list-disc pl-5">
            <li>Led digital development and product ownership for the BVI Medical account:</li>
            <ul className="list-disc pl-10">
              <li>Secured a <strong>$1M annual recurring engagement</strong> and led the delivery of an <strong>internationalized (i18n), MM+M Award-winning</strong> ophthalmic surgical pack configurator</li>
              <li>Developed a custom, off-platform <strong>Salesforce/IFS integrated</strong> cross-selling application</li>
            </ul>
            <li>Directed the digital transformation team for the MAS Medical Staffing account:</li>
            <ul className="list-disc pl-10">
              <li>Led business analysis and development of a turnkey credentialing portal, <strong>driving more streamlined recruiting operations</strong></li>
              <li>Maintained and optimized legacy shift booking and time tracking systems</li>
            </ul>
            <li>Oversaw project estimates, statements of work, and budgets to ensure <strong>on-time, on-budget delivery</strong></li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">BEAM INTERACTIVE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director, Technology and Development | 03/2013 – 04/2017</h4>
          <ul className="list-disc pl-5">
            <li>Managed a $2M–$4M annual technical scope for MINI USA</li>
            <li>Led <strong>MarTech integrations</strong> across BMW enterprise and third-party platforms</li>
            <li>Orchestrated the <strong>technical roadmap</strong> for MINI&apos;s flagship site, MINIUSA.com</li>
            <li>Advocated MINI USA’s technology needs with BMW Corporate IT and partners</li>
            <li>Established an <strong>Agile-based Test & Learn</strong> program to enable rapid A/B and multivariate testing on MINIUSA.com</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Senior Software Engineer | 09/2006 – 03/2013</h4>
          <ul className="list-disc pl-5">
            <li>Co-led the <strong>platform migration</strong> of MINIUSA.com to Adobe AEM</li>
            <li>Led development on the first <strong>adaptive design implementation</strong> of MINIUSA.com</li>
            <li>Built an OEM and dealership event platform to <strong>drive lead generation</strong></li>
            <li>Developed m.miniusa.com, MINI USA&apos;s first mobile-friendly platform</li>
            <li>Implemented SOAP-based web services for <strong>lead processing automation</strong></li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">EVENTMONITOR – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director of Client Services | 07/2004 – 06/2006</h4>
          <ul className="list-disc pl-5">
          <li>Managed <strong>$2M+ SaaS applications</strong>, boosting <strong>engagement and retention</strong></li>
            <li>Led <strong>discovery and definition</strong> phases of enhancement projects, <strong>translating business needs into solutions</strong></li>
            <li>Directed technology implementations and client training</li>
            <li>Implemented a service management system that <strong>improved SLA response times</strong></li>
            <li>Developed <strong>automated regression testing</strong>, reducing deployment errors and accelerating release cycles</li>
          </ul>
        </div>

          {/* Page Break for Print Version*/}
          <div className="print-page-break"></div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">EZE CASTLE SOFTWARE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Software Engineer – Team Lead | 04/2000 – 06/2004</h4>
          <ul className="list-disc pl-5">
            <li>Contributed to the design and development of the core object model for the company&apos;s ASP-based trade order management system</li>
            <li>Built FX trading and exposure monitoring solutions</li>
            <li>Developed a bond calculation library based on SIA standards</li>
          </ul>
        </div>
        {/*
        <div className="mb-4">
          <h3 className="text-xl font-bold">DELTA GLOBAL TRADING LP – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Manager of Operations and Currency Trading | 06/1997 – 03/2000</h4>
          <ul className="list-disc pl-5">
            <li>Managed <strong>global settlements</strong> and <strong>currency swaps</strong> for a <strong>bond fund</strong>.</li>
            <li>Reconciled <strong>gain/loss discrepancies</strong> due to <strong>FX rate fluctuations</strong>.</li>
            <li>Provided <strong>counterparty exposure analysis</strong> and <strong>cash flow projections</strong>.</li>
          </ul>
        </div>
        */}
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills & Tools</h2>
        <p className="pb-2">A mix of <strong>hands-on experience</strong> and <strong>leadership</strong> in the following technologies:</p>
        <ul className="list-disc pl-5">
          <li><strong>Cloud & Infrastructure:</strong> Azure, AWS, Rackspace, Cloudflare</li>
          <li><strong>Languages, Libraries & Frameworks:</strong> SQL, Java, Kotlin, JavaScript, TypeScript, React, Next.js, Node.js</li>
          <li><strong>Digital Experience Platforms:</strong> Adobe AEM, Acquia/Drupal, Sitecore, Kentico, WordPress, Yext</li>
          <li><strong>CRM & ERP:</strong> Salesforce (SFDC), Bullhorn, IFS</li>
          <li><strong>SDLC, DevOps & IaC:</strong> Terraform, Terraform Cloud, Docker, Kubernetes, GitHub, GitLab, Azure DevOps, Jira, Grafana k6</li>
          <li><strong>Databases & Tools:</strong> PostgreSQL, SQL Server, Oracle, MongoDB, Liquibase</li>
          <li><strong>Collaboration & Design:</strong> Figma, Miro, Confluence, Notion</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Industry Experience</h2>
        <ul className="list-disc pl-5">
          <li><strong>Healthcare:</strong> UM Health-Sparrow, BCBS FEP, Coverys Insurance, BVI Medical, MAS Medical Staffing</li>
          <li><strong>Consumer:</strong> MINI USA, Aruba Tourism Assoc., Land O’ Frost</li>
          <li><strong>Finance:</strong> Nationwide, Transamerica, AMG, Wellington Management, MINI FS</li>
          <li><strong>Life Sciences:</strong> UCB, Supernus, CSL Seqirus</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div className="flex justify-between">
        <p><strong>BSBA with Honors in Accounting</strong></p>
        <p>Slippery Rock University</p>
        </div>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Awards & Recognitions</h2>
        <ul className="list-disc pl-5">
          <li><strong>MM+M Award – Gold, Professional Sales Tool (2020),</strong> <a href="https://www.mmm-online.com/mmm-awards/gold-professional-sales-tool-2020/" target="_blank" className="text-blue-500">BVI Medical CustomEyes Configurator</a></li>
        </ul>
      </section>
</div>
    
  );
};

export default Resume;
  