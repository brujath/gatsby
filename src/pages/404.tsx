import React from 'react';
import Layout from 'components/Layout';

const Error: React.FC = () => {
  return (
    <Layout>
      <div className="yml-404">
        {"Oops! Looks like you landed on an page which Doesn't exist"}
      </div>
    </Layout>
  );
};

export default Error;
