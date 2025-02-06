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
        <strong>Weymouth, MA</strong> | <a href="mailto:john@jmaloney.net" target="_blank" className="text-blue-500">john@jmaloney.net</a> | <strong>617.694.9413</strong> 
      </p>
      <p className="text-lg mb-2 text-center" >
        <a href="https://www.linkedin.com/in/john-r-maloney" target="_blank" className="text-blue-500">LinkedIn</a> | <a href="https://jmaloney.net" target="_blank" className="text-blue-500">Website</a> | <a href="https://github.com/jrmaloney" target="_blank" className="text-blue-500">GitHub</a>
      </p>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          <strong>Enterprise Architect</strong> and seasoned <strong>digital development leader</strong> with a track record of delivering <strong>innovative digital experiences</strong> and driving <strong>enterprise digital transformation</strong>. Experienced in <strong>Agile methodologies</strong>, adept at aligning <strong>business strategy with technology</strong>, leading <strong>cross-functional teams</strong>, and optimizing <strong>SDLC processes</strong> for <strong>scalable, high-impact solutions</strong>. Early career experience in <strong>financial, compliance, and regulatory auditing</strong> provides a strong foundation for <strong>risk management and governance</strong> in digital initiatives.
        </p>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

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
            <li>Led <strong>digital development</strong> and <strong>product ownership</strong> for BVI Medical:</li>
            <ul className="list-disc pl-10">
              <li>Secured a <strong>$1M recurring annual engagement</strong> and delivered an <strong>internationalized (i18n), MM+M award-winning</strong> ophthalmic surgical pack configurator.</li>
              <li>Developed <strong>custom Salesforce/IFS-integrated cross-selling applications</strong>.</li>
            </ul>
            <li>Directed the <strong>digital transformation</strong> team for MAS Medical Staffing:</li>
            <ul className="list-disc pl-10">
              <li><strong>Led development</strong> of a turnkey credentialing portal and modernized recruiting operations.</li>
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
            <li>Led <strong>MarTech integrations</strong> across BMW enterprise and third-party platforms.</li>
            <li><strong>Directed the technical roadmap</strong> for MINI’s flagship site, <strong>miniusa.com</strong>.</li>
            <li><strong>Advocated for technology needs</strong> on behalf of MINI USA with BMW Corporate IT and vendor partners.</li>
            <li>Developed an <strong>A/B testing program</strong> to <strong>optimize user engagement</strong>.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Senior Software Engineer | 09/2006 – 03/2013</h4>
          <ul className="list-disc pl-5">
            <li>Co-led the <strong>migration of miniusa.com to Adobe AEM</strong>.</li>
            <li>Led development on the first <strong>adaptive design</strong> of miniusa.com.</li>
            <li>Built an <strong>OEM and dealership event platform</strong> to <strong>drive lead generation</strong>.</li>
            <li>Developed m.miniusa.com, the <strong>first handheld device solution</strong> for MINI USA.</li>
            <li>Implemented <strong>SOAP-based web services</strong> for <strong>lead processing automation</strong>.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">EVENTMONITOR – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Director of Client Services | 07/2004 – 06/2006</h4>
          <ul className="list-disc pl-5">
          <li>Managed <strong>$2M+ SaaS applications</strong>, boosting <strong>engagement and retention</strong>.</li>
            <li>Led <strong>discover and define</strong> phases of enhancement projects, <strong>translating business needs into solutions</strong>.</li>
            <li>Directed technology implementations and <strong>client training</strong>.</li>
            <li>Deployed a service management system which <strong>improved SLA response times</strong>.</li>
            <li>Implemented <strong>automated regression testing</strong>, reducing deployment errors and accelerating release cycles.</li>
          </ul>
        </div>

          {/* Page Break for Print Version*/}
          <div className="print-page-break"></div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">EZE CASTLE SOFTWARE – Boston, MA</h3>
          <h4 className="text-lg font-semibold">Software Engineer – Team Lead | 04/2000 – 06/2004</h4>
          <ul className="list-disc pl-5">
            <li>Designed the core business model for a trade order management system.</li>
            <li>Built FX trading and exposure monitoring solutions.</li>
            <li>Developed a bond calculation engine based on SIA standards.</li>
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
          <li><strong>Cloud & Infrastructure:</strong> Azure (SQL DB, SWA, AKS, VM), AWS (RDS, EC2, S3), Rackspace, Cloudflare</li>
          <li><strong>Languages, Libraries & Frameworks:</strong> SQL, Java, JavaScript, TypeScript, React, Next.js, Node.js</li>
          <li><strong>Digital Experience Platforms:</strong> Adobe AEM, Acquia/Drupal, Sitecore, Kentico, WordPress</li>
          <li><strong>CRM & ERP:</strong> Salesforce Sales Cloud (SFDC), Bullhorn, IFS</li>
          <li><strong>SDLC, DevOps & IaC:</strong> Terraform, Terraform Cloud, Docker, Kubernetes, GitHub, GitLab, Azure DevOps, Jira, Grafana K6</li>
          <li><strong>Databases & Tools:</strong> PostgreSQL, SQL Server, Oracle, MongoDB, Liquibase</li>
          <li><strong>Collaboration & Design:</strong> Figma, Miro, Confluence, Notion</li>
        </ul>
      </section>
      <div className="border-b border-gray-400 w-4/5 mx-auto py-1 mb-4"></div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Industry Experience</h2>
        <ul className="list-disc pl-5">
          <li><strong>Life Sciences & Healthcare:</strong> UM Health-Sparrow, BCBS FEP, Coverys Ins., BVI Medical, MAS Medical Staffing, UCB, CSL Seqirus</li>
          <li><strong>Automotive & Consumer:</strong> MINI USA, Aruba Tourism Assoc., Land O’ Frost</li>
          <li><strong>Finance & Enterprise:</strong> Nationwide, Transamerica, AMG, Wellington Management, MINI FS</li>
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
          <li><strong>MM+M Award – Gold, Professional Sales Tool (2020)</strong> <a href="https://www.mmm-online.com/mmm-awards/gold-professional-sales-tool-2020/" target="_blank" className="text-blue-500">BVI Medical Customeyes Configurator</a></li>
        </ul>
      </section>
</div>
    
  );
};

export default Resume;
  