import React from 'react';

const responsibilitiesData = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit Cumque quidem id in consequuntur provident delectus dicta molestiae velit perferendis ab necessitatibus cum illum quod voluptatibus architecto similique',
    // Add more responsibilities as needed
  ];

const PORComponent = ({ responsibilities }) => {
  const ResponsibilityCard = ({ content }) => {
    return (
      <div className="relative max-w-sm">
        <p className="mt-6 border-l-4 border-dotted px-4">
          {content}
        </p>
        <div className="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-blue-600" />
      </div>
    );
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center px-6 md:px-60 bg-white">
        <div>
          {responsibilities.map((content, index) => (
            <ResponsibilityCard key={index} content={content} />
          ))}
        </div>
      </div>
    </>
  );
};



export default PORComponent;
