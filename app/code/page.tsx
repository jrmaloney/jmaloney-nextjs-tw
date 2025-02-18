import React from 'react';
import HeroBanner from '@/components/HeroBanner';

const CodePage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Code Runbooks and Notes" 
        shortDesc="Lately I've been instested in Infrastructure as Code (IaC) using Terraform and Terraform Cloud to provision resources in Azure and AWS. The runbooks below are templates and the steps needed to provision resources I regularly use. I've included instructions and links to the code it GitHub, if you find them usefull feel free to use them." 
        longDesc="Another area of interest is using Liquibase to build and maintain databsase schemas." 
      />
    </div>
  );
};

export default CodePage;