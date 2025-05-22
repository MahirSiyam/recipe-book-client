import React from 'react';
import { Tooltip } from 'react-tooltip';

const TipsAndTricks = () => {
  const tips = [
    {
      number: '1',
      title: 'Use fresh ingredients',
      description: 'Fresh ingredients provide richer taste and better nutrition. Always choose seasonal produce for maximum flavor.',
      tooltip: 'Pro tip: Visit farmers markets for the freshest local produce!'
    },
    {
      number: '2',
      title: 'Master knife skills',
      description: 'Proper cutting techniques ensure even cooking and professional presentation. Practice your julienne, dice, and chiffonade.',
      tooltip: 'Watch YouTube tutorials from chefs like Gordon Ramsay for techniques'
    },
    {
      number: '3',
      title: 'Control heat properly',
      description: 'Learn when to sear, simmer, or sauté. Different foods require specific heat levels for optimal results.',
      tooltip: 'Invest in a good infrared thermometer for precise heat measurement'
    },
    {
      number: '4',
      title: 'Balance flavors',
      description: 'Aim for harmony between sweet, salty, sour, bitter, and umami. Taste and adjust throughout cooking.',
      tooltip: 'Keep lemon juice, honey, and soy sauce handy for quick adjustments'
    },
    {
      number: '5',
      title: 'Rest your proteins',
      description: 'Let meat rest after cooking to redistribute juices. This simple step dramatically improves texture and moisture.',
      tooltip: 'Rest time should be about half the cooking time (e.g., 5 mins for a 10-min steak)'
    }
  ];

  return (
    <div className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.freepik.com/premium-photo/cookbook-with-ingredients-tablerecipe-book_434193-6699.jpg?ga=GA1.1.949294392.1744378709&semt=ais_hybrid&w=740)",
      }}>
      <div className="card bg-gray-50 shadow-xl max-w-4xl mx-auto p-6 md:p-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2 text-primary">5 ESSENTIAL TIPS</h2>
          <h3 className="text-2xl text-primary font-semibold">For Professional Cooking</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div 
                  data-tooltip-id={`tip-${index}`}
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary border-2 border-primary flex items-center justify-center text-xl font-bold 
                             group-hover:bg-primary group-hover:text-white transition-colors duration-300 cursor-help"
                >
                  {tip.number}
                </div>
                <Tooltip 
                  id={`tip-${index}`} 
                  place="right"
                  content={tip.tooltip}
                  className="z-50 !bg-primary !text-white"
                  delayShow={300}
                />
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-gray-800 text-primary transition-colors duration-300">
                  {tip.title}
                </h4>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default TipsAndTricks;