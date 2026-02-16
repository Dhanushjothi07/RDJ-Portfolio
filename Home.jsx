import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Projects } from '../components/Projects';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { smoothScrollTo } from '../utils/smoothScroll';

export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            // Short delay to ensure page is loaded
            setTimeout(() => {
                smoothScrollTo(location.state.scrollTo, 1200);
            }, 100);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Benefits />
            <Projects />
            <Testimonials />
            <Contact />
        </>
    );
};
