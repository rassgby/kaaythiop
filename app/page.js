"use client";

import { useEffect, useState } from 'react';

export default function Home() {
    const [activeTab, setActiveTab] = useState('petitdej');
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const tabs = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.category-banner, .menu-section');
        const navContainer = document.querySelector('.nav-container');
        const navH = () => navContainer ? navContainer.offsetHeight : 0;

        const handleScroll = () => {
            let cur = '';
            sections.forEach(s => { 
                const offset = s.offsetTop - navH() - 150;
                if (window.scrollY >= offset) {
                    const id = s.id.replace('banner-', '');
                    if (id) cur = id; 
                }
            });
            if (cur && cur !== activeTab) setActiveTab(cur);
            setShowScroll(window.scrollY > 500);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { 
                if (e.isIntersecting) { 
                    e.target.classList.add('vis'); 
                    obs.unobserve(e.target); 
                } 
            });
        }, { threshold: 0.08 });
        
        document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            obs.disconnect();
        };
    }, [activeTab]);

    useEffect(() => {
        const activeElement = document.querySelector(`.nav-tab[data-id="${activeTab}"]`);
        const navTabs = document.querySelector('.nav-tabs');
        if (activeElement && navTabs) {
            const containerWidth = navTabs.offsetWidth;
            const elementOffset = activeElement.offsetLeft;
            const elementWidth = activeElement.offsetWidth;
            
            navTabs.scrollTo({
                left: elementOffset - (containerWidth / 2) + (elementWidth / 2),
                behavior: 'smooth'
            });
        }
    }, [activeTab]);

    const scrollToSection = (id) => {
        const banner = document.getElementById('banner-' + id);
        const section = document.getElementById(id);
        const navContainer = document.querySelector('.nav-container');
        const navH = navContainer ? navContainer.offsetHeight : 0;
        
        const target = banner || section;
        if (target) {
            window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
            setActiveTab(id);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main>
            {/* HERO */}
            <div className="hero">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="logo-text">
                        <span className="logo-kaay">Kaay</span> <span className="logo-thiop">Thiop</span>
                    </div>
                    <p className="tagline">Food and Drink</p>
                    <a href="tel:+221771076969" className="phone-link">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                        (+221) 77 107 69 69
                    </a>
                </div>
            </div>

            {/* NAV */}
            <div className="nav-container">
                <div className="nav-tabs">
                    <div className={`nav-tab ${activeTab === 'petitdej' ? 'active' : ''}`} data-id="petitdej" onClick={() => scrollToSection('petitdej')}>Petit Déj</div>
                    <div className={`nav-tab ${activeTab === 'sandwichs' ? 'active' : ''}`} data-id="sandwichs" onClick={() => scrollToSection('sandwichs')}>Sandwichs</div>
                    <div className={`nav-tab ${activeTab === 'crepes' ? 'active' : ''}`} data-id="crepes" onClick={() => scrollToSection('crepes')}>Crêpes</div>
                    <div className={`nav-tab ${activeTab === 'fastfood' ? 'active' : ''}`} data-id="fastfood" onClick={() => scrollToSection('fastfood')}>Fast-Food</div>
                    <div className={`nav-tab ${activeTab === 'supplements' ? 'active' : ''}`} data-id="supplements" onClick={() => scrollToSection('supplements')}>Extras</div>
                </div>
            </div>

            {/* ==================== PETIT DEJEUNER ==================== */}
            <div className="category-banner fade-in" id="banner-petitdej">
                <img className="category-banner-img" src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80" alt="Petit Déjeuner" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <div className="category-banner-overlay">
                    <div className="category-banner-text">
                        <h2>Petit Déj</h2>
                        <p>Bouillies traditionnelles & Amuse-bouches</p>
                    </div>
                </div>
            </div>

            <div className="menu-section" id="petitdej">
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Fonde</span><span className="item-price">500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Lakh</span><span className="item-price">1 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Thiakry</span><span className="item-price">500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Nems (l'unité)</span><span className="item-price">200 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Rissoles (l'unité)</span><span className="item-price">250 F</span></div></div>
            </div>

            {/* ==================== SANDWICHS ==================== */}
            <div className="category-banner fade-in" id="banner-sandwichs">
                <img className="category-banner-img" src="/images/sandwich.jpg" alt="Sandwichs" />
                <div className="category-banner-overlay">
                    <div className="category-banner-text">
                        <h2>Sandwichs</h2>
                        <p>Tortillas, Fataya & plus encore</p>
                    </div>
                </div>
            </div>

            <div className="menu-section" id="sandwichs">
                {/* Featured */}
                <div className="featured-item fade-in">
                    <div className="featured-body">
                        <span className="featured-badge">Populaire</span>
                        <div className="item-top">
                            <span className="item-name">Jeune Mara</span>
                            <span className="item-price">3 500 F</span>
                        </div>
                        <p className="item-desc">Cuisse de poulet entier pané + frite + boisson au choix</p>
                    </div>
                </div>

                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Team VJ</span><span className="item-price">1 500 F</span></div><p className="item-desc">Tortilla + blanc poulet + frites + fromage + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">La Corniche</span><span className="item-price">1 500 F</span></div><p className="item-desc">Tortilla + Dibi + frites + fromages + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Tonton Safff</span><span className="item-price">1 500 F</span></div><p className="item-desc">Tortilla + jambon + fromage + oeuf + frites + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Pain Omelette (PM)</span><span className="item-price">500 F</span></div><p className="item-desc">Pain + omelette + frites</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Pain Omelette (GM)</span><span className="item-price">1 000 F</span></div><p className="item-desc">Pain + omelette + frites + fromage</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Pain Viande Hachée</span><span className="item-price">700 F</span></div><p className="item-desc">Pain + viande hachée + frites + sauce</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">La Diarra</span><span className="item-price">500 F</span></div><p className="item-desc">Fataya + omelette + frite + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Team Feeeee</span><span className="item-price">700 F</span></div><p className="item-desc">Fataya + viande hachée + frite + sauce aux choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Rama Chou</span><span className="item-price">1 000 F</span></div><p className="item-desc">Fataya + viande hachée + fromage + sauces au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">L'Incontournable</span><span className="item-price">1 000 F</span></div><p className="item-desc">Fataya + jambon + fromage + sauces</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Anti-Goumin</span><span className="item-price">1 500 F</span></div><p className="item-desc">Fataya + viande dibi + fromage + frite + sauces aux choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Anthia</span><span className="item-price">1 500 F</span></div><p className="item-desc">Fataya + poulets + fromage + frite + sauces au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Ile du Saloum</span><span className="item-price">2 000 F</span></div><p className="item-desc">Fataya + poulets + viande dibi + fromage + frite + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Nana & Sigua</span><span className="item-price">1 000 F</span></div><p className="item-desc">Fataya + hot dog + fromage + sauce au choix</p></div>
            </div>

            {/* ==================== CREPES ==================== */}
            <div className="category-banner fade-in" id="banner-crepes">
                <img className="category-banner-img" src="/images/crepes.jpg" alt="Crêpes" />
                <div className="category-banner-overlay">
                    <div className="category-banner-text">
                        <h2>Crêpes</h2>
                        <p>Sucrées & Salées</p>
                    </div>
                </div>
            </div>

            <div className="menu-section" id="crepes">
                <div className="subsection-title">Crêpes Sucrées</div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Nutella</span><span className="item-price">1 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Nutella Banane Coco</span><span className="item-price">1 500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Nutella Biscuits</span><span className="item-price">1 500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Nutella Oreo</span><span className="item-price">1 500 F</span></div></div>

                <div className="subsection-title">Crêpes Salées</div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Jambon + Fromage</span><span className="item-price">2 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Saucisse + Fromage</span><span className="item-price">2 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Jambon + Fromage + Saucisse + Oeuf</span><span className="item-price">2 500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Poulet + Fromage</span><span className="item-price">2 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Dibi + Fromage</span><span className="item-price">2 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Viande Hachée + Fromage</span><span className="item-price">2 000 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Poulet + Fromage + Frites + Oeuf</span><span className="item-price">2 500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Viande Hachée + Fromage + Frites + Oeuf</span><span className="item-price">2 500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Crêpe Dibi + Fromage + Frites + Oeuf</span><span className="item-price">2 500 F</span></div></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Padin Chou</span><span className="item-price">3 000 F</span></div><p className="item-desc">Crêpe jambon + fromage + poulet + Dibi + oeuf</p></div>
            </div>

            {/* ==================== FAST-FOOD ==================== */}
            <div className="category-banner fade-in" id="banner-fastfood">
                <img className="category-banner-img" src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80" alt="Fast Food" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <div className="category-banner-overlay">
                    <div className="category-banner-text">
                        <h2>Fast-Food</h2>
                        <p>Tacos & Burgers</p>
                    </div>
                </div>
            </div>

            <div className="menu-section" id="fastfood">
                <div className="subsection-title">Tacos</div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Tacos Poulet</span><span className="item-price">2 000 F</span></div><p className="item-desc">Pain tortilla + blanc de poulet + fromage + frites + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Tacos Viande</span><span className="item-price">2 000 F</span></div><p className="item-desc">Pain tortilla + Dibi + fromage + frites + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Tacos Mixte</span><span className="item-price">2 500 F</span></div><p className="item-desc">Pain tortilla + blanc de poulet + Dibi + fromage + frites + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Tacos Pacha</span><span className="item-price">2 000 F</span></div><p className="item-desc">Pain tortilla + viande dibi + fromage + frites + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Tacos Norvégien</span><span className="item-price">2 000 F</span></div><p className="item-desc">Pain tortilla + hotdog + fromage + frites + oeuf + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Norvégienne</span><span className="item-price">1 500 F</span></div><p className="item-desc">Pain arabe + hotdog + frites + fromage + oeuf + sauce au choix</p></div>

                <div className="subsection-title">Burgers</div>

                <div className="featured-item fade-in">
                    <img className="featured-img" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80" alt="Burger Royal" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                    <div className="featured-body">
                        <span className="featured-badge">Best-Seller</span>
                        <div className="item-top">
                            <span className="item-name">Burger Royal</span>
                            <span className="item-price">2 000 F</span>
                        </div>
                        <p className="item-desc">Pain burger + double steak + frites + fromage + oeuf + sauce au choix</p>
                    </div>
                </div>

                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Burger Simple</span><span className="item-price">1 500 F</span></div><p className="item-desc">Pain burger + steak + frites + fromages + oeuf + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Chicken Burger</span><span className="item-price">2 000 F</span></div><p className="item-desc">Pain burger + steak poulet + frites + fromage + oeuf + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Burger Mixte</span><span className="item-price">2 500 F</span></div><p className="item-desc">Pain burger + steaks viande & poulet + frites + fromage + oeuf + sauce au choix</p></div>
                <div className="menu-item fade-in"><div className="item-top"><span className="item-name">Burger Jamila</span><span className="item-price">2 500 F</span></div><p className="item-desc">Pain tortilla + double steak + double oeuf + frite + fromage</p></div>
            </div>

            {/* ==================== SUPPLEMENTS ==================== */}
            <div className="category-banner fade-in" id="banner-supplements">
                <img className="category-banner-img" src="/images/drinks.jpg" alt="Extras" />
                <div className="category-banner-overlay">
                    <div className="category-banner-text">
                        <h2>Extras</h2>
                        <p>Suppléments & Boissons</p>
                    </div>
                </div>
            </div>

            <div className="menu-section" id="supplements">
                <div className="supplements-grid">
                    <div className="supplement-item fade-in">
                        <div className="supp-info"><div className="supplement-name">Supplément Fromage</div><div className="supplement-price">500 F</div></div>
                    </div>
                    <div className="supplement-item fade-in">
                        <div className="supp-info"><div className="supplement-name">Frite</div><div className="supplement-price">500 F</div></div>
                    </div>
                    <div className="supplement-item fade-in">
                        <div className="supp-info"><div className="supplement-name">Boisson</div><div className="supplement-price">400 F</div></div>
                    </div>
                    <div className="supplement-item fade-in">
                        <div className="supp-info"><div className="supplement-name">Eau</div><div className="supplement-price">50 / 100 F</div></div>
                    </div>
                    <div className="supplement-item fade-in">
                        <div className="supp-info"><div className="supplement-name">Maad</div><div className="supplement-price">500 / 1 000 F</div></div>
                    </div>
                    <div className="supplement-item fade-in">
                        <div className="supp-info"><div className="supplement-name">Smoothie</div><div className="supplement-price">1 000 / 1 500 F</div></div>
                    </div>
                </div>
            </div>

            {/* PROMO */}
            <div className="promo-banner">
                <p className="promo-text">
                    Tous les vendredis
                    <span className="promo-highlight">Sachet d'eau offert !</span>
                </p>
            </div>

            {/* FOOTER */}
            <div className="footer">
                <div className="footer-logo">
                    <span className="logo-kaay">Kaay</span> <span className="logo-thiop">Thiop</span>
                </div>
                <div className="footer-divider"></div>
                <p>Food and Drink &bull; Dakar, Senegal</p>
                <p style={{marginTop: '6px'}}><a href="tel:+221771076969">(+221) 77 107 69 69</a></p>
            </div>

            {/* SCROLL TOP */}
            <button className={`scroll-top ${showScroll ? 'show' : ''}`} id="scrollTop" onClick={scrollToTop}>&#8593;</button>
        </main>
    );
}
