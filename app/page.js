"use client";

import { useEffect, useState } from 'react';

const MENU = [
    {
        id: 'sandwichs', tab: 'Sandwichs', title: 'Sandwichs', subtitle: 'Pain arabe, Fataya & plus encore', img: '/images/sandwich.jpg',
        groups: [
            {
                items: [
                    { name: 'Jeune Mara', price: '3 500 F', badge: 'Populaire', desc: 'Cuisse de poulet entier pané + frite + boisson au choix + eau' },
                    { name: 'Team VJ', price: '1 500 F', desc: 'Pain arabe + blanc poulet + frites + fromage + sauce au choix' },
                    { name: 'La Corniche', price: '1 500 F', desc: 'Pain arabe + Dibi + frites + fromages + sauce au choix' },
                    { name: 'Tonton Safff', price: '1 500 F', desc: 'Pain arabe + jambon + fromage + oeuf + frites + sauce au choix' },
                    { name: 'La Diarra', price: '500 F', desc: 'Fataya + omelette + frite + sauce au choix + eau' },
                    { name: 'Team Feeeee', price: '700 F', desc: 'Fataya + viande hachée + frite + sauce au choix' },
                    { name: 'Rama Chou', price: '1 000 F', desc: 'Fataya + viande hachée + fromage + sauces au choix + eau' },
                    { name: "L'Incontournable", price: '1 000 F', desc: 'Fataya + jambon + fromage + sauces + eau' },
                    { name: 'Anti-Goumin', price: '1 500 F', desc: 'Fataya + viande Dibi + fromage + frite + sauces au choix' },
                    { name: 'Fataya Kaay Thiop', price: '1 500 F', desc: 'Fataya + poulets + fromage + frite + sauces au choix' },
                    { name: 'Île du Saloum', price: '2 000 F', desc: 'Fataya + poulets + viande Dibi + fromage + frite + sauce au choix' },
                    { name: 'Nana & Sigua', price: '1 000 F', desc: 'Fataya + hot dog + fromage + sauce au choix' },
                ],
            },
        ],
    },
    {
        id: 'crepes', tab: 'Crêpes', title: 'Crêpes', subtitle: 'Sucrées & Salées', img: '/images/crepes.jpg',
        groups: [
            {
                title: 'Crêpes Sucrées',
                items: [
                    { name: 'Nutella', price: '1 000 F' },
                    { name: 'Crêpe Nutella Banane Coco', price: '1 500 F' },
                    { name: 'Crêpe Nutella Biscuits Nutella', price: '1 500 F' },
                    { name: 'Crêpe Nutella Oreo', price: '1 500 F' },
                ],
            },
            {
                title: 'Crêpes Salées',
                items: [
                    { name: 'Crêpe Jambon + Fromage', price: '2 000 F' },
                    { name: 'Crêpe Saucisse + Fromage', price: '2 000 F' },
                    { name: 'Crêpe Jambon + Fromage + Oeuf', price: '2 000 F' },
                    { name: 'Crêpe Poulet + Fromage', price: '2 000 F' },
                    { name: 'Crêpe Dibi + Fromage', price: '2 000 F' },
                    { name: 'Crêpe Viande Hachée + Fromage', price: '2 000 F' },
                    { name: 'Crêpe Poulet + Fromage + Frites + Oeuf', price: '2 500 F' },
                    { name: 'Crêpe Viande Hachée + Fromage + Frites + Oeuf', price: '2 500 F' },
                    { name: 'Crêpe Dibi + Fromage + Frites + Oeuf', price: '2 500 F' },
                    { name: 'El Capo', price: '4 000 F', desc: 'Crêpe jambon + fromage + poulet + Dibi + oeuf' },
                ],
            },
        ],
    },
    {
        id: 'fastfood', tab: 'Fast-Food', title: 'Fast-Food', subtitle: 'Tacos & Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
        groups: [
            {
                title: 'Tacos',
                items: [
                    { name: 'Tacos Poulet', price: '2 500 F', desc: 'Pain tortilla + blanc de poulet + fromage + frites + sauce au choix' },
                    { name: 'Tacos Viande', price: '2 500 F', desc: 'Pain tortilla + Dibi + fromage + frites + sauce au choix' },
                    { name: 'Tacos Mixte', price: '3 000 F', desc: 'Pain tortilla + blanc de poulet + Dibi + fromage + frites + sauce au choix' },
                    { name: 'Tacos Chawarma', price: '2 500 F', desc: 'Pain tortilla + Dibi + fromage' },
                    { name: 'Tacos Pacha', price: '2 500 F' },
                    { name: 'Tacos Norvégien', price: '2 500 F', desc: 'Pain tortilla + hotdog + fromage + frites + oeuf + sauce au choix' },
                    { name: 'Norvégien', price: '1 500 F', desc: 'Pain arabe + hotdog + frites + fromage + oeuf + sauce au choix' },
                ],
            },
            {
                title: 'Burgers',
                items: [
                    { name: 'Burger Kaay Thiop', price: '2 500 F', badge: 'Best-Seller', desc: 'Pain burger + double steak + frites + fromage + oeuf + sauce au choix' },
                    { name: 'Burger Simple', price: '1 500 F', desc: 'Pain burger + steak + frites + fromages + oeuf + sauce au choix' },
                    { name: 'Chicken Burger', price: '1 500 F', desc: 'Pain burger + steak poulet + frites + fromage + oeuf + sauce au choix' },
                    { name: 'Burger Mixte', price: '2 500 F', desc: 'Pain burger + steaks viande & poulet + frites + fromage + oeuf + sauce au choix' },
                ],
            },
        ],
    },
    {
        id: 'pizza', tab: 'Pizza', title: 'Pizza', subtitle: 'Petite, Moyenne & Grande', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
        groups: [
            {
                items: [
                    { name: 'Reine', desc: 'Jambon + champignon + olive noire', sizes: [['PM', '3 000 F'], ['M', '3 500 F'], ['GM', '5 000 F']] },
                    { name: 'Shawarma', desc: 'Shawarma + légumes + sauces + fromage', sizes: [['PM', '3 000 F'], ['M', '4 000 F'], ['GM', '6 000 F']] },
                    { name: 'Margarita', desc: 'Sauce + fromage', sizes: [['PM', '3 000 F'], ['M', '4 000 F'], ['GM', '5 000 F']] },
                    { name: 'Orientale', desc: 'Merguez ou viande hachée + sauce', sizes: [['PM', '3 000 F'], ['M', '4 000 F'], ['GM', '5 000 F']] },
                    { name: 'Poulet', desc: 'Fromage + poulet + sauce', sizes: [['PM', '3 500 F'], ['M', '4 500 F'], ['GM', '6 000 F']] },
                    { name: 'Vaugéne', desc: 'Jambon + fromage + oeuf + crème fraîche', sizes: [['PM', '4 000 F'], ['M', '4 500 F'], ['GM', '6 000 F']] },
                    { name: 'Filât Poulet', desc: 'Poulet + fromage + maïs + sauce barbecue', sizes: [['PM', '3 500 F'], ['M', '4 500 F'], ['GM', '6 000 F']] },
                    { name: 'Filât Viande', desc: 'Viande + maïs + fromage + sauces', sizes: [['PM', '3 500 F'], ['M', '4 500 F'], ['GM', '6 000 F']] },
                ],
            },
        ],
    },
    {
        id: 'plats', tab: 'Plats', title: 'Plats & Wraps', subtitle: 'Poulets, brochettes & plus', img: '/images/chicken.jpg',
        groups: [
            {
                title: 'Menu 3 places',
                items: [
                    { name: 'Poulet entier', price: '6 000 F' },
                    { name: 'Demi poulet', price: '3 000 F' },
                    { name: '1/4 de poulet', price: '1 500 F' },
                    { name: 'Nems', price: '200 F', desc: 'Box de 7 pièces : 2 000 F' },
                ],
            },
            {
                title: 'Plats',
                items: [
                    { name: 'Plat Shawarma', price: '2 500 F', desc: 'Shawarma + frites + pain arabe + légumes + sauce blanche' },
                    { name: 'Plat Steaks', price: '2 500 F', desc: 'Steaks + sauce oignon + mayo + pain' },
                    { name: 'Plat Omelettes', price: '2 000 F', desc: 'Omelette + sauce + salade + mayo + ketchup' },
                    { name: 'Méchoui', price: '6 000 / 3 000 F', desc: 'Viande agneau + sauce oignon + salade + tomate + maïs + pain' },
                    { name: 'Poutine', price: '2 000 F', desc: 'Dibi + fromage + frites + box' },
                ],
            },
            {
                title: 'Wraps & New-Yorkais',
                items: [
                    { name: 'Wrap Poulet', price: '2 000 F', desc: 'Poulet pané + sauce cocktail + fromage + frites' },
                    { name: 'Wrap Viande', price: '2 000 F', desc: 'Viande + maïs + fromage + sauce algérienne + tortilla' },
                    { name: 'Wrap Mixte', price: '3 000 F', desc: 'Poulet et viande + fromage + tortilla + sauce cocktail + algérienne' },
                    { name: 'New-Yorkais Poulet', price: '2 500 F', desc: 'Poulet + maïs + fromage + sauce barbecue' },
                    { name: 'New-Yorkais Viande', price: '2 000 F', desc: 'Viande + sauce algérienne + maïs' },
                ],
            },
            {
                title: 'Brochettes',
                items: [
                    { name: 'Brochette Poulet', price: '250 F', desc: "L'unité · Plat 5 pièces : 2 000 F" },
                    { name: 'Brochette Viande', price: '250 F', desc: "L'unité · Plat 5 pièces : 2 000 F" },
                ],
            },
        ],
    },
];

const SUPPLEMENTS = [
    ['Supplément Fromage', '500 F'],
    ['Frite', '500 F'],
    ['Boisson', '500 F'],
    ['Eau', '50 / 100 F'],
    ['Maad', '500 / 1 000 F'],
    ['Smoothie', '1 000 / 1 500 F'],
];

export default function Home() {
    const [activeTab, setActiveTab] = useState('sandwichs');
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
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                        (+221) 77 107 69 69
                    </a>
                </div>
            </div>

            {/* NAV */}
            <div className="nav-container">
                <div className="nav-tabs">
                    {MENU.map(cat => (
                        <div key={cat.id} className={`nav-tab ${activeTab === cat.id ? 'active' : ''}`} data-id={cat.id} onClick={() => scrollToSection(cat.id)}>{cat.tab}</div>
                    ))}
                    <div className={`nav-tab ${activeTab === 'supplements' ? 'active' : ''}`} data-id="supplements" onClick={() => scrollToSection('supplements')}>Extras</div>
                </div>
            </div>

            {MENU.map(cat => (
                <div key={cat.id}>
                    <div className="category-banner fade-in" id={'banner-' + cat.id}>
                        <img className="category-banner-img" src={cat.img} alt={cat.title} {...(cat.img.startsWith('http') ? { crossOrigin: 'anonymous', referrerPolicy: 'no-referrer' } : {})} />
                        <div className="category-banner-overlay">
                            <div className="category-banner-text">
                                <h2>{cat.title}</h2>
                                <p>{cat.subtitle}</p>
                            </div>
                        </div>
                    </div>

                    <div className="menu-section" id={cat.id}>
                        {cat.groups.map((group, gi) => (
                            <div key={gi}>
                                {group.title && <div className="subsection-title">{group.title}</div>}
                                {group.items.map(item => (
                                    <div key={item.name} className={item.badge ? 'featured-item fade-in' : 'menu-item fade-in'}>
                                        <div className={item.badge ? 'featured-body' : undefined}>
                                            {item.badge && <span className="featured-badge">{item.badge}</span>}
                                            <div className="item-top">
                                                <span className="item-name">{item.name}</span>
                                                {item.price && <span className="item-price">{item.price}</span>}
                                            </div>
                                            {item.sizes && (
                                                <div className="item-sizes">
                                                    {item.sizes.map(([size, price]) => (
                                                        <span key={size} className="item-size"><b>{size}</b> {price}</span>
                                                    ))}
                                                </div>
                                            )}
                                            {item.desc && <p className="item-desc">{item.desc}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

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
                    {SUPPLEMENTS.map(([name, price]) => (
                        <div key={name} className="supplement-item fade-in">
                            <div className="supp-info"><div className="supplement-name">{name}</div><div className="supplement-price">{price}</div></div>
                        </div>
                    ))}
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
                <p style={{ marginTop: '6px' }}><a href="tel:+221771076969">(+221) 77 107 69 69</a></p>
            </div>

            {/* SCROLL TOP */}
            <button className={`scroll-top ${showScroll ? 'show' : ''}`} id="scrollTop" onClick={scrollToTop}>&#8593;</button>
        </main>
    );
}
