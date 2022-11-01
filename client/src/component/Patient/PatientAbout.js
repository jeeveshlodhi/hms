import React, { Component } from 'react';
import Navber from './PatientNavbar';
import { MDBContainer } from 'mdbreact';
import Homeimage from '../Homeimage';
import Footer from '../Footer';

class PatientAbout extends Component {
    
    render() { 
        return ( 
            <div className = "bg-dark">
                <Navber/>
                <Homeimage/>

                <br>
                
                </br>
                <br>
                
                </br>
                <h1 className="head text-white" align="center"> About Us </h1>
                <br>
                
                </br>
                <br>
                
                </br>

            <MDBContainer>  
            <blockquote className="blockquote">
            <p className="text-white"> India's population in 2021 as per World Bank is 1.39 billion. Being the world's
second-most-populous country and one of its fastest-growing economies, India experiences
both challenges and opportunities in the context of public health. India is a hub for
pharmaceutical and biotechnology industries; world-class scientists, clinical trials, and
hospitals yet the country faces daunting public health challenges like child undernutrition,
high rates of neonatal and maternal mortality, growth in noncommunicable diseases, high
rates of road traffic accidents and other health-related issues.
Lack of digitization has contributed to one of our greatest national challenges—lack of
health insurance and underinsurance. Underwriting is the bedrock of this entire business.
Insurance companies need reliable data on diseases, patients, drugs, and tests to come up
with a sensible rational pricing policy. The problem in India is that the data is suspect and
thus leads to faulty analytics driving up costs across the entire insurance chain. This creates
under-penetration across large swathes of the population.
Therefore, the purpose of our project is to not only fulfill this lack of documentation but also
to create an ecosystem that can be between hospitals, clinics, pharmacies, and patients.</p>
            </blockquote>

           
            </MDBContainer> 
            
            <br>
            
            
            </br>
            <Footer/>
        
            </div>
         );
    }
}
 
export default PatientAbout;