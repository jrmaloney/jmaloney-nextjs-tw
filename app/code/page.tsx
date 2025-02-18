import React from 'react';
import HeroBanner from '@/components/HeroBanner';

const CodePage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Code Runbooks and Notes" 

        shortDesc={
          <>
            Lately I've been instested in Infrastructure as Code (IaC) using 
            <a href="https://developer.hashicorp.com/terraform/install"  target="_blank" className="text-blue-500">Terraform</a> and 
            <a href="  https://app.terraform.io/" target="_blank" className="text-blue-500">Terraform Cloud</a> to provision resources in Azure and AWS. The runbooks below are templates and the steps needed to provision resources I regularly use. 
            I've included instructions and links to the code in my <a href="https://github.com/jrmaloney" target="_blank" className="text-blue-500">Github</a> account, I hope you find them usefull.
          </>
        }
        
        longDesc={
          <>
            Another area of interest is using Liquibase to build and maintain databsase schemas.
          </>
          
        }
      />
    </div>
  );
};

export default CodePage;