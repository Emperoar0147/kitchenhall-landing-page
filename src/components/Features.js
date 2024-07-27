import React from 'react';
import './Features.css'; // Import CSS for styling
import premiumIcon from '../components/utensil3.jpeg'; // Adjust the path as necessary
import techIcon from '../components/innovative.jpeg';
import easeOfUseIcon from '../components/easy-use.jpeg';
import expertIcon from '../components/expert.jpeg';
import deliveryIcon from '../components/delivery.jpeg';
import ecoIcon from '../components/eco.jpeg';

const featuresData = [
  {
    title: 'Premium Quality Products',
    description: 'We source the highest quality kitchenware to ensure durability and performance in every meal you create.',
    imgSrc: premiumIcon,
    altText: 'Premium Quality',
  },
  {
    title: 'Innovative Technology',
    description: 'Experience cutting-edge appliances designed to make cooking faster, easier, and more enjoyable.',
    imgSrc: techIcon,
    altText: 'Innovative Technology',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Our intuitive website design allows you to effortlessly find and purchase your favorite kitchen essentials.',
    imgSrc: easeOfUseIcon,
    altText: 'User-Friendly Interface',
  },
  {
    title: 'Expert Recommendations',
    description: 'Benefit from our curated selections and expert advice to choose the best tools and gadgets for your kitchen.',
    imgSrc: expertIcon,
    altText: 'Expert Recommendations',
  },
  {
    title: 'Fast and Reliable Shipping',
    description: 'Enjoy speedy delivery with tracking and exceptional customer service every step of the way.',
    imgSrc: deliveryIcon,
    altText: 'Fast and Reliable Shipping',
  },
  {
    title: 'Sustainable Practices',
    description: 'We are committed to environmentally friendly practices and offer eco-conscious product options.',
    imgSrc: ecoIcon,
    altText: 'Sustainable Practices',
  },
];

const Features = () => {
  return (
    <section id="features">
      <h2>Why Choose KitchenHall?</h2>
      <p>Discover a world of kitchen possibilities with our handpicked collection, designed to inspire creativity and elevate your cooking experience. With KitchenHall, you can enjoy seamless shopping, expert advice, and unparalleled customer service, all from the comfort of your home.

Join us today and turn your kitchen into a haven of culinary excellence!</p>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.imgSrc} alt={feature.altText} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <a href="/shop" className="cta-button">Explore Our Store</a>
    </section>
  );
};

export default Features;
