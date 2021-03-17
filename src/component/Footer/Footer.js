import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="bctop">
                <h3 className="h3"><a href="header">Back to top</a></h3>
            </div>
            <div className="one-fourth">
                <h4 className="footer-h3">Get to know Us </h4>
               
                <ul>Careers</ul>
                
                <ul>blog</ul>
                <ul>About amazon</ul>
                <ul>Sustainability</ul>
                <ul>Investor Relations</ul>
                <ul>Amazon Devices</ul>
                <ul>Amazon Tours</ul>
             
            </div>
            <div className="one-fourth">
            <h4 className="footer-h3">Make money With us </h4>
            <ul>Sell products on Amazon</ul>
                <ul>Sell apps on Amazon</ul>
               <ul>Become an Affiliate</ul>
               <ul>Advertise Your Products</ul>
               <ul>Self-Publish with Us</ul>
               <ul>Host an Amazon Hub</ul>
               <ul>See More Make Money with </ul>

            </div>
            <div className="one-fourth">
            <h4 className="footer-h3">Amazon Payment Products </h4>
               
               <ul>Amazon Business Card</ul>
               
               <ul>Shop with Points</ul>
               <ul>Reload Your Balance</ul>
               <ul>Amazon Currency Converter</ul>

            </div>
            <div className="one-fourth">
            <h4 className="footer-h3">Let Us Help You </h4>
            <ul>Amazon and COVID-19</ul>
                <ul>Your Account</ul>
               <ul>Your Orders</ul>
               <ul>Shipping Rates and Policies</ul>
               <ul>Returns and Replacements</ul>
               <ul>Manage Your Content and Devices</ul>
               <ul>Amazon Assistant </ul>
               <ul>Help</ul>



            </div>
            
        </div>
    );
};

export default Footer;