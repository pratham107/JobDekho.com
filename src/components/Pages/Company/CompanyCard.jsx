import React, { useMemo } from 'react';

const gradients = [
  'bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500',
  'bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500',
  'bg-gradient-to-r from-green-200 via-green-300 to-green-500',
  'bg-gradient-to-r from-pink-200 via-pink-300 to-pink-500',
  'bg-gradient-to-r from-purple-200 via-purple-300 to-purple-500',
  'bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-500',
];

const CompanyCard = ({ url }) => {
  const randomGradient = useMemo(() => {
    const index = Math.floor(Math.random() * gradients.length);
    return gradients[index];
  }, []);

  return (
    <div className={`h-20 w-32 rounded-2xl ${randomGradient} flex items-center justify-center`}>
      <img
        src={url || 'https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png'}
        alt="company"
        className="p-2 max-h-full max-w-full object-contain"
      />
    </div>
  );
};

export default CompanyCard;
