import React from 'react';
import HeroBanner from '@/components/HeroBanner';

const CodePage = () => {
  return (
    <div className="page-container">
      <HeroBanner 
        title="Tech Notes" 
        teaser={
          <>
            The items below are primarily notes for my own personal use, if you find any of them usefull all the better.  
          </>
        }
        shortDesc={
          <>
            Lately I&apos;ve been instested in Infrastructure as Code (IaC) using  
            <a href="https://developer.hashicorp.com/terraform/install"  target="_blank" className="text-blue-500"> Terraform</a> and 
            <a href="  https://app.terraform.io/" target="_blank" className="text-blue-500"> Terraform Cloud</a> to provision resources in Azure and AWS. The runbooks below are templates and the steps needed to provision resources I regularly use. 
            I&apos;ve included instructions and links to the code in my <a href="https://github.com/jrmaloney" target="_blank" className="text-blue-500">Github</a> account.
          </>
        }
        
        longDesc={
          <>
            Another area of interest is using <a href="https://www.liquibase.com/" target="_blank" className="text-blue-500"> Liquibase </a> 
            to build and maintain databsase schemas. I work primarily with <a href="https://www.postgresql.org/" target="_blank" className="text-blue-500"> PostgreSQL </a> 
            and have started using <a href="https://supabase.com/" target="_blank" className="text-blue-500"> Supabase</a> for hosting the database on POC projects as it provides a rich feature set on it&apos;s free tier. 
          </>
          
        }
      />
    </div>
  );
};

export default CodePage;
