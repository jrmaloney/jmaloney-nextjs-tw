"use client";
import React from "react";

const Resume = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between mt-4 no-print">
            <button onClick={() => window.print()} className="mt-4 px-4 py-2 bg-[#d2cebc] text-[#3b3b3b] font-bold rounded no-print hover:bg-[#bfb8a4] hover:text-black cursor-pointer transition duration-300">Print Resume</button>
            <button onClick={() => window.print()} className="mt-4 px-4 py-2 bg-[#d2cebc] text-[#3b3b3b] font-bold rounded no-print hover:bg-[#bfb8a4] hover:text-black cursor-pointer transition duration-300">PDF Download</button>
        </div>
      
      <h1 className="text-4xl font-bold mb-4 text-center">John R. Maloney</h1>
      <p className="text-lg mb-2 text-center" >
        <strong>Weymouth, MA</strong> | <a href="mailto:john@jmaloney.net" target="_blank" className="text-blue-500">john@jmaloney.net</a> | <strong>617.694.9413</strong> 
      </p>
      <p className="text-lg mb-2 text-center" >
        <a href="https://www.linkedin.com/in/john-r-maloney" target="_blank" className="text-blue-500">LinkedIn</a> | <a href="https://jmaloney.net" target="_blank" className="text-blue-500">Website</a> | <a href="https://github.com/jrmaloney" target="_blank" className="text-blue-500">GitHub</a>
      </p>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          <strong>Enterprise Architect</strong> and seasoned <strong>digital development leader</strong> with a track record of delivering <strong>innovative digital experiences</strong> and driving <strong>enterprise digital transformation</strong>. Experienced in <strong>Agile methodologies</strong>, adept at aligning <strong>business strategy with technology</strong>, leading <strong>cross-functional teams</strong>, and optimizing <strong>SDLC processes</strong> for <strong>scalable, high-impact solutions</strong>. Early career experience in <strong>financial, compliance, and regulatory auditing</strong> provides a strong foundation for <strong>risk management and governance</strong> in digital initiatives.
        </p>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">MERGE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">SVP, Group Technology Leader | 04/2023 – 01/2025</h4>
          <ul className="list-disc pl-5">
            <li><strong>Architectural Review Board (ARB) member</strong> leading <strong>Cloud & Infrastructure decisions and governance</strong>.</li>
            <li>Oversaw the <strong>management of 30+ hosted sites</strong> across <strong>Rackspace, Azure, and AWS</strong>, ensuring <strong>security, scalability, and cost efficiency</strong>.</li>
            <li>Led an initiative to transition all resource provisioning and management to an <strong>Infrastructure as Code (IaC) model</strong>, improving <strong>deployment consistency and scalability</strong>.</li>
            <li><strong>Architected digital solutions</strong> across various verticals and application stacks.</li>
            <li>Led a <strong>15-member development team</strong>, including full-time and freelance engineers.</li>
            <li>Collaborated with <strong>Program Management</strong> to refine <strong>digital delivery models</strong>.</li>
            <li>Oversaw <strong>resource allocation, budgeting, and project profitability</strong>.</li>
            <li>Conducted project <strong>retrospectives</strong> to enhance <strong>development processes and team performance</strong>.</li>
            <li>Spearheaded <strong>new scopes of work</strong> within strategic client accounts.</li>
          </ul>

          {/* Page Break for Print Version*/}
          <div className="print-page-break"></div>
          <h4 className="text-lg font-semibold mt-4">VP, Technology Leader | 04/2017 – 04/2023</h4>
          <ul className="list-disc pl-5">
            <li>Led <strong>digital development</strong> and <strong>product ownership</strong> for <strong>BVI Medical</strong>:</li>
            <ul className="list-disc pl-10">
              <li>Secured a <strong>$1M recurring annual engagement</strong> and delivered an <strong>internationalized (i18n), MM+M award-winning ophthalmic surgical pack configurator</strong>.</li>
              <li>Developed <strong>custom Salesforce/IFS-integrated cross-selling applications</strong>.</li>
            </ul>
            <li>Directed the <strong>digital transformation</strong> team for <strong>MAS Medical Staffing</strong>:</li>
            <ul className="list-disc pl-10">
              <li>Led development of a <strong>turnkey credentialing portal</strong> and modernized <strong>recruiting operations</strong>.</li>
              <li>Maintained and optimized <strong>legacy shift booking and time tracking systems</strong>.</li>
            </ul>
            <li>Managed <strong>project estimates, SOWs,</strong> and <strong>budget tracking</strong> to ensure <strong>delivery within scope</strong>.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">BEAM INTERACTIVE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director, Technology and Development | 03/2013 – 04/2017</h4>
          <ul className="list-disc pl-5">
            <li>Managed a <strong>$2M–$4M annual technical scope</strong> for <strong>MINI USA</strong>.</li>
            <li>Led <strong>MarTech integrations</strong> across <strong>BMW enterprise</strong> and <strong>third-party platforms</strong>.</li>
            <li>Directed the <strong>technical roadmap</strong> for MINI’s flagship site, <strong>miniusa.com</strong>.</li>
            <li>Advocated for MINI’s <strong>technology needs</strong> with <strong>BMW Corporate IT</strong> and <strong>vendor partners</strong>.</li>
            <li>Developed an <strong>A/B testing program</strong> to optimize <strong>user engagement</strong>.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Senior Software Engineer | 09/2006 – 03/2013</h4>
          <ul className="list-disc pl-5">
            <li>Co-led the <strong>migration of miniusa.com to Adobe AEM</strong>.</li>
            <li>Led development on the first <strong>adaptive experience design</strong> on miniusa.com.</li>
            <li>Built an <strong>OEM and dealership event platform</strong> to drive <strong>lead generation</strong>.</li>
            <li>Developed m.miniusa.com, the initial <strong>handheld device solution</strong> for MINI USA.</li>
            <li>Implemented <strong>SOAP-based web services</strong> for <strong>lead processing automation</strong>.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">EVENTMONITOR – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director of Client Services | 07/2004 – 06/2006</h4>
          <ul className="list-disc pl-5">
            <li><strong>Led discovery and definition phases</strong> of enhancement projects, aligning with client goals.</li>
            <li>Managed <strong>$2M+ SaaS applications</strong>, boosting <strong>engagement and retention</strong>.</li>
            <li>Acted as liaison between clients and engineers, <strong>translating business needs into solutions</strong>.</li>
            <li><strong>Implemented issue tracking systems</strong>, enhancing transparency and resolution speed.</li>
            <li>Promoted content-style decoupling for <strong>scalable white-label deployments</strong>.</li>
            <li><strong>Implemented SDLC best practices, automated testing, and CI/CD</strong> with Apache Ant.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">EZE CASTLE SOFTWARE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Software Engineer – Team Lead | 04/2000 – 06/2004</h4>
          <ul className="list-disc pl-5">
            <li>Designed the <strong>core business model</strong> for a <strong>trade order management system</strong>.</li>
            <li>Built <strong>FX trading</strong> and <strong>exposure monitoring solutions</strong>.</li>
            <li>Developed a <strong>bond calculation engine</strong> based on <strong>SIA standards</strong>.</li>
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
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills & Tools</h2>
        <p className="pb-2">A mix of <strong>hands-on experience</strong> and <strong>leadership</strong> in the following technologies:</p>
        <ul className="list-disc pl-5">
          <li><strong>Cloud & Infrastructure:</strong> Azure (SQL DB, SWA, AKS, VM), AWS (RDS, EC2, S3), Rackspace, Cloudflare</li>
          <li><strong>Languages, Libraries & Frameworks:</strong> SQL, Java, JavaScript, TypeScript, React, Next.js, Node.js</li>
          <li><strong>Digital Experience Platforms:</strong> Adobe AEM, Acquia/Drupal, Sitecore, Kentico, WordPress</li>
          <li><strong>CRM & ERP:</strong> Salesforce Sales Cloud (SFDC), Bullhorn, IFS</li>
          <li><strong>SDLC, DevOps & IaC:</strong> Terraform, Terraform Cloud, Docker, Kubernetes, GitHub, GitLab, Azure DevOps, Jira, Grafana K6</li>
          <li><strong>Databases & Tools:</strong> PostgreSQL, SQL Server, Oracle, MongoDB, Liquibase</li>
          <li><strong>Collaboration & Design:</strong> Figma, Miro, Confluence, Notion</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Industry Experience</h2>
        <ul className="list-disc pl-5">
          <li><strong>Life Sciences & Healthcare:</strong> UM Health-Sparrow, BCBS FEP, Coverys Ins., BVI Medical, MAS Medical Staffing, UCB, CSL Seqirus</li>
          <li><strong>Automotive & Consumer:</strong> MINI USA, Aruba Tourism Assoc., Land O’ Frost</li>
          <li><strong>Finance & Enterprise:</strong> Nationwide, Transamerica, AMG, Wellington Management, MINI FS</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div className="flex justify-between">
        <p><strong>BSBA with Honors in Accounting</strong></p>
        <p><strong>Slippery Rock University</strong> – Slippery Rock, PA</p>
        </div>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Awards & Recognitions</h2>
        <ul className="list-disc pl-5">
          <li><strong>MM+M Award – Gold, Professional Sales Tool (2020)</strong> <a href="https://www.mmm-online.com/mmm-awards/gold-professional-sales-tool-2020/" target="_blank" className="text-blue-500">BVI Medical Customeyes Configurator</a></li>
        </ul>
      </section>
</div>
    
  );
};

export default Resume;
  