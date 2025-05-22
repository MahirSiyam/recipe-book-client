import React from 'react';
import { Link } from 'react-router';
import { Fade, Zoom, Slide, Bounce } from 'react-awesome-reveal';

const About = () => {
  const categories = ['ALL CATEGORIES', 'RECIPES', 'CLASSES', 'COOK', 'DETAILS', 'KITCHEN'];
  const recipes = [
    {
      title: 'How To Cook A Tender Juicy Steak',
      author: 'BJAK B',
      category: 'RECIPES',
      excerpt: 'Capicola kiebasa pork belly cow Fatback meatloaf beef ribs, biltong...',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    },
    {
      title: 'How To Cook Turkey On Natural Gas Grills',
      author: 'BJAK B',
      category: 'RECIPES',
      excerpt: 'Venison porchetta turkey corned alcatta pancetta rump sausage...',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    },
    {
      title: 'The Importance Of Food Elements',
      author: 'JUNIX',
      category: 'RECIPES',
      excerpt: 'frankfurter short ribs tri-tip jerky beef, beef ribs pork belly tail pork...',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Fade direction="down" triggerOnce>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">LATEST NEWS NUKA</h2>
          <h3 className="text-xl text-gray-600">Our Fresh Blog Posts</h3>
        </div>
      </Fade>

      <Bounce delay={300} triggerOnce>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`btn btn-sm rounded-full ${index === 0 ? 'btn-primary' : 'btn-outline'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </Bounce>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {recipes.map((recipe, index) => (
          <Slide 
            key={index} 
            direction={index % 2 === 0 ? "left" : "right"} 
            delay={index * 100}
            triggerOnce
          >
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Zoom triggerOnce>
                <figure className="px-4 pt-4">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </figure>
              </Zoom>
              <div className="card-body">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{recipe.author}</span>
                  <span className="badge badge-outline">{recipe.category}</span>
                </div>
                <h4 className="card-title text-lg">{recipe.title}</h4>
                <p className="text-gray-600 mt-2 line-clamp-2">{recipe.excerpt}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Read More</button>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
      
      <Fade direction="up" delay={300} triggerOnce>
        <div className="text-center">
          <Link to={`/`} className="btn btn-primary">Back to Home</Link>
        </div>
      </Fade>
    </div>
  );
};

export default About;