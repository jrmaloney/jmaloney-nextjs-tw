import React from 'react';
import HeroBanner from '@/components/hero';

const CodePage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Code Runbooks and Recipes" 
        description="Below you'll find some descriptions and links to step-by-step guides for provision infrastructure resources and building databases using Terraform and Liquibase respectively. "
      />
    </div>
  );
};

export default CodePage;