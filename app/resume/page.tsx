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
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-3"></div>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          Experienced digital development leader and <strong>enterprise architect</strong> with a proven track record of crafting award-winning digital experiences. <strong>Proficient in Agile methodologies</strong> and skilled at fostering cross-functional collaboration among business, product, and development teams. Adept at translating strategic business needs into integrated digital solutions that align with core enterprise technologies, driving initiatives across sales, marketing, and operations. Experienced in navigating regulatory and compliance reviews in both the pharmaceutical and financial industries, including <strong>FINRA</strong> oversight. Early career experience in financial, compliance, and regulatory auditing provides a <strong>strong foundation in risk management and corporate governance</strong>.        
        </p>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-3"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">MERGE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">SVP, Group Technology Leader | 04/2023 – 01/2025</h4>
          <ul className="list-disc pl-5">
            <li>Served as an <strong>Architectural Review Board (ARB) member,</strong> guiding cloud and infrastructure strategy and governance in alignment with TOGAF domains</li>
            <li>Oversaw the <strong>management of 30+ hosted sites</strong> across <strong>Rackspace, Azure, and AWS</strong>, ensuring security, scalability, and cost efficiency</li>
            <li>Led <strong>Infrastructure as Code (IaC)</strong> adoption using Terraform Cloud and ARM Templates, enhancing deployment consistency and operational efficiency</li>
            <li><strong>Managed and mentored a 15-member development team</strong>, including full-time and freelance engineers</li>
            <li>Architected an education site and RILA calculator for the Nationwide Defender Annuity&reg; product, enhancing client education and decision-making &mdash; <strong>Tech stack: Azure (SQL, AKS, SWA), Spring Boot, Kotlin, Next.js, TypeScript</strong></li>
            <li>Collaborated with program management leaders to continuously enhance our delivery model</li>
            <li>Spearheaded new scopes of work within strategic client accounts</li>
          </ul>

          {/* Page Break for Print Version*/}
          <div className="print-page-break"></div>
          <h4 className="text-lg font-semibold mt-4">VP, Technology Leader | 04/2017 – 04/2023</h4>
          <ul className="list-disc pl-5">
            <li>Led digital development and product ownership for the BVI Medical account:</li>
            <ul className="list-disc pl-10">
              <li><strong>Secured a $1M annual recurring engagement</strong> and led the delivery of an internationalized (i18n), MM+M Award-winning ophthalmic surgical pack configurator &mdash; <strong>Tech stack: Azure (SQL, AKS), Spring Boot, Kotlin, React/Redux</strong></li>
              <li>Developed a custom, off-platform <strong>Salesforce integrated</strong> CPQ application</li>
            </ul>
            <li>Directed the digital transformation team for the MAS Medical Staffing account:</li>
            <ul className="list-disc pl-10">
              <li>Led business analysis and development of a turnkey, Bullhorn integrated, credentialing portal, driving more streamlined recruiting operations &mdash; <strong>Tech stack: AWS (RDS, EKS), Kotlin, Next.js, TypeScript</strong></li>
              <li>Maintained and optimized legacy shift booking and time tracking systems</li>
            </ul>
            <li>Oversaw resource planning, estimates, SOWs, and budgets to drive project profitability and ensure on-time, on-budget delivery</li>
            <li>Conducted project retrospectives to enhance SDLC processes and performance</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">BEAM INTERACTIVE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director, Technology and Development | 03/2013 – 04/2017</h4>
          <ul className="list-disc pl-5">
            <li><strong>Managed a $2M–$4M annual technical scope of work</strong> for MINI USA &mdash; <strong>Tech stack: AEM Sites, GlassFish, Java, Oracle</strong></li>
            <li>Led MarTech integrations across BMW enterprise and third-party platforms</li>
            <li>Orchestrated the technical roadmap for MINI&apos;s flagship site, MINIUSA.com</li>
            <li>Advocated MINI USA’s technology needs with BMW Corporate IT and partners</li>
            <li>Established an Agile-based test & learn program to enable rapid A/B and multivariate testing on MINIUSA.com</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Senior Software Engineer | 09/2006 – 03/2013</h4>
          <ul className="list-disc pl-5">
            <li>Co-led the platform migration of MINIUSA.com to Adobe AEM</li>
            <li>Led development on the first adaptive design implementation of MINIUSA.com</li>
            <li>Built an OEM and dealership event platform to drive lead generation</li>
            <li>Developed m.miniusa.com, MINI USA&apos;s first mobile-friendly platform</li>
            <li>Implemented SOAP-based web services for lead processing automation</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">EVENTMONITOR – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director of Client Services | 07/2004 – 06/2006</h4>
          <ul className="list-disc pl-5">
          <li>Managed proprietary SaaS applications generating over $2M in annual revenue, boosting client engagement and retention</li>
            <li>Led discovery and definition phases of enhancement projects</li>
            <li>Directed technology implementations and client training</li>
            <li>Implemented a service management system that improved SLA response times</li>
          </ul>
        </div>

          {/* Page Break for Print Version*/}
          <div className="print-page-break"></div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">EZE CASTLE SOFTWARE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Software Engineer – Team Lead | 04/2000 – 06/2004</h4>
          <ul className="list-disc pl-5">
            <li>Contributed to the design and development of the company&apos;s ASP-based trade order management system</li>
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
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-3"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills & Tools</h2>
        <p className="pb-2">A mix of <strong>hands-on experience</strong> and <strong>leadership</strong> in the following technologies:</p>
        <ul className="list-disc pl-5">
          <li><strong>Cloud & Infrastructure:</strong> Azure, AWS, Rackspace, Cloudflare, Vercel</li>
          <li><strong>Languages, Libraries & Frameworks:</strong> SQL, Java, Kotlin, JavaScript, TypeScript, Spring Boot, React, Next.js, Node.js</li>
          <li><strong>DXP & CRM:</strong> Adobe AEM, Acquia/Drupal, Kentico, Salesforce (SFDC), Bullhorn, WordPress, Yext</li>
          <li><strong>DevOps & IaC:</strong> Terraform, Terraform Cloud, Docker, Kubernetes, GitHub, GitLab, Azure DevOps</li>
          <li><strong>Monitor & Observability:</strong> New Relic, Azure Monitor, Grafana k6</li>
          <li><strong>Databases & Tools:</strong> PostgreSQL, Azure SQL DB, Oracle, MongoDB, Liquibase</li>
          <li><strong>Agile & Design:</strong> Jira, Confluence, Figma, Miro, Notion</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-3"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Vertical Experience</h2>
        <ul className="list-disc pl-5">
          <li><strong>Healthcare:</strong> UM Health-Sparrow, BCBS FEP, Coverys Insurance, MAS Medical Staffing</li>
          <li><strong>Consumer Brands:</strong> MINI USA, Aruba Tourism Assoc., Land O’ Frost</li>
          <li><strong>Finance:</strong> Nationwide Insurance, Transamerica, AMG, Wellington Management, MINI FS</li>
          <li><strong>Life Sciences:</strong> BVI Medical, UCB, Supernus, CSL Seqirus</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-3"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div className="flex justify-between">
        <p><strong>BSBA with Honors in Accounting</strong></p>
        <p>Slippery Rock University</p>
        </div>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-3"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Awards & Recognitions</h2>
        <ul className="list-disc pl-5">
          <li><strong>MM+M &mdash; Gold, Professional Sales Tool,</strong> <a href="https://www.mmm-online.com/mmm-awards/gold-professional-sales-tool-2020/" target="_blank" className="text-blue-500">BVI Medical &mdash; CustomEyes Configurator</a></li>
        </ul>
      </section>
</div>
    
  );
};

export default Resume;
  