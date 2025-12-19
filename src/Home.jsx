// mern-frontend/src/Home.jsx - Welcome Page

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductStyles.css';

const Home = () => {
    return (
        <div className="welcome-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="welcome-title">Welcome to V-CART</h1>
                    <p className="welcome-subtitle">Your Ultimate E-Commerce Shopping Destination</p>
                    <p className="welcome-description">
                        Discover amazing products, manage your shopping cart, and enjoy a seamless shopping experience with V-CART.
                    </p>
                    
                    <Link to="/product" className="cta-button primary-btn">
                        🛍️ Start Shopping
                    </Link>
                </div>
                
                <div className="hero-icon">
                    <span className="icon-large">🛒</span>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2>Why Choose V-CART?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📦</div>
                        <h3>Wide Selection</h3>
                        <p>Browse through thousands of products from various categories</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">💳</div>
                        <h3>Easy Checkout</h3>
                        <p>Fast and secure payment options for your convenience</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Fast Delivery</h3>
                        <p>Quick shipping to your doorstep with real-time tracking</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">⭐</div>
                        <h3>Premium Quality</h3>
                        <p>All products are verified for quality and authenticity</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="cta-section">
                <h2>Ready to Shop?</h2>
                <p>Explore our exclusive collection and find exactly what you're looking for</p>
                <div className="cta-buttons">
                    <Link to="/product" className="cta-button primary-btn">
                        👉 Browse Products
                    </Link>
                    <Link to="/cart" className="cta-button secondary-btn">
                        🛒 View Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;