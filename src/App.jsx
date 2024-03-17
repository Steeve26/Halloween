import { useEffect, useState } from 'react'
import './App.css'
import { IoClose } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
      window.scrollY >= 350 && setShowScroll(true)
    } else {
      window.scrollY < 350 && setShowScroll(false)
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

      <img src="/src/assets/shape-bg.png" alt="" className='shape__bg'/>

      {/* <!--==================== HEADER ====================--> */}
      <header className={`header ${scrolled && 'bg-header'}`} id="header">
          <nav className="nav container">
            <a href="#" className='nav__logo'>
              <img src="/src/assets/20240309_211246.png" alt="logo image" />
              <p>The Midnight Graveyard</p>
            </a>
          
            <div className={`nav__menu ${navOpen ? "show-menu" : ""}`} id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" onClick={() => setNavOpen(false)} className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#about" onClick={() => setNavOpen(false)} className="nav__link">about us</a>
                </li>
                <li className="nav__item">
                  <a href="#items" onClick={() => setNavOpen(false)} className="nav__link">items</a>
                </li>
                <li className="nav__item">
                  <a href="#party" onClick={() => setNavOpen(false)} className="nav__link">party</a>
                </li>
              </ul>

              <div className="nav__close" id="nav-close" 
                onClick={() => setNavOpen(false)}> 
                <IoClose size={25}/>
              </div>

              <img src="/src/assets/nav-bat.png" alt="nav image" className="nav__img" />
            </div>

            <div className="nav__toggle" id="nav-toggle"
              onClick={() => setNavOpen(true)}>
              <HiMenuAlt2 size={25}/>
            </div>
          </nav>
      </header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
          {/* <!--==================== HOME ====================--> */}
          <section className="home section" id="home">
            <div className="shape__small"></div>
            <div className="shape__big"></div>
            
            <div className="home__container container grid">
              <div className="home__data">
                <h1 className="home__title">
                  <span>Halloween</span> Trick or Treat!!!
                  <img src="/src/assets/stars.png" alt="home image" className='home__title-img-1' />
                  <img src="/src/assets/stars.png" alt="home image" className='home__title-img-2' />
                </h1>

                <p className="home__description">
                  This Halloween, enjoy trick—or—treating
                  with your friends and spend a terrifying 
                  night under the full moon.
                </p>

                <a href="#" className="button">Explore now!!!</a>
              </div>

              <img src="/src/assets/home-pumpkin.png" alt="home image" className='home__img'/>
              <img src="/src/assets/home-tree2.png" alt="home image" className='home__tree-1'/>
              <img src="/src/assets/home-tree1.png" alt="home image" className='home__tree-2'/>
            </div>
          </section>

          {/* <!--==================== CATEGORY ====================--> */}
          <section className="category section" id='category'>
              <h2 className="section__title">Choose your <br /> spookey category</h2>

              <div className="category__container container grid">
                <div className="category__card">
                  <img src="/src/assets/category-pumpkin.png" alt="category image" className='category__img'/>
                  <h3 className="category__title">Pumpkins</h3>
                  <p className="category__description">Light up horror pumpkins to scare at night</p>
                  <img src="/src/assets/stars.png" alt="category image" className='category__star' />
                </div>
                
                <div className="category__card">
                  <img src="/src/assets/category-ghost.png" alt="category image" className='category__img'/>
                  <h3 className="category__title">Ghost</h3>
                  <p className="category__description">Spooky ghosts to scare in the most haunted houses</p>
                  <img src="/src/assets/stars.png" alt="category image" className='category__star' />
                </div>
                
                <div className="category__card">
                  <img src="/src/assets/category-witch-hat.png" alt="category image" className='category__img'/>
                  <h3 className="category__title">Witch Hat</h3>
                  <p className="category__description">
                    The most elegant witch hats you can vlear and scare
                  </p>
                  
                  <img src="/src/assets/stars.png" alt="category image" className='category__star' />
                  
                </div>
              </div>
          </section>

          {/* <!--==================== ABOUT ====================--> */}
          <section className="about section" id="about">
            <div className="shape__small"></div>
            <div className="shape__big"></div>
              <div className="about__container container grid">
                <div className="about__data">
                  <h2 className="section__title"></h2>
                  <p className="about__description">
                    Halloween is celebrated every October 31 at night, 
                    walk around the city with your friends and trick or treat, 
                    enjoy this celebration under the full moon.
                  </p>
                  <a href="#" className="button">Know More!!!</a>
                </div>
                <img src="/src/assets/about-scare.png" alt="about image" className="about__img" />
              </div>
          </section>

          {/* <!--==================== ITEMS ====================--> */}
          <section className="items section" id="items">
            <h2 className="section__title">Select your <br/> accursed item</h2>
            <div className="items__container container grid">
              <article className="items__card">
                <img src="/src/assets/item-apple.png" alt="items image" className="items__img" />
                <h3 className="items__name">Candy Apple</h3>
                <span className="items__price">$4.99</span>
                <button className="items__button">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </article>

              <article className="items__card">
                <img src="/src/assets/item-broom.png" alt="items image" className="items__img" />
                <h3 className="items__name">Wicked Broom</h3>
                <span className="items__price">$12.99</span>
                <button className="items__button">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </article>

              <article className="items__card">
                <img src="/src/assets/item-pumpkin.png" alt="items image" className="items__img" />
                <h3 className="items__name">Pumpkin</h3>
                <span className="items__price">$7.99</span>
                <button className="items__button">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </article>


              <article className="items__card">
                <img src="/src/assets/item-spider.png" alt="items image" className="items__img" />
                <h3 className="items__name">Spooky Spider</h3>
                <span className="items__price">$9.99</span>
                <button className="items__button">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </article>


              <article className="items__card">
                <img src="/src/assets/item-witch-hat.png" alt="items image" className="items__img" />
                <h3 className="items__name">Witch Hat</h3>
                <span className="items__price">$15.99</span>
                <button className="items__button">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </article>
            </div>
          </section>

          {/* <!--==================== PARTY ====================--> */}
          <section className="party section" id="party">
              <div className="party__container container grid">
                <div className="party__data">
                  <h2 className="section__title">Halloween <br/> party 31 October</h2>
                  
                  <p className="party__description">
                    Organize a great Halloween party and
                    enjoy the creepiest night of terror 
                    with all your friends.
                  </p>

                  <a href="#" className="button">Join The Party!!!</a>
                </div>
                <div className="party__images">
                  <img src="/src/assets/party-cauldron.png" alt="party image" className="party__img" />

                  <img src="/src/assets/stars.png" alt="party image" className="party__star-1" />
                  <img src="/src/assets/stars.png" alt="party image" className="party__star-2" /></div>
              </div>
          </section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer section">
        <div className="shape__small"></div>
        <div className="shape__big"></div>
        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
              <img src="/src/assets/logo-skull.png" alt="logo image"/>
              Halloween
            </a>              
            
            <p className="footer__description">Enjoy the spookiest <br/> night of your life.</p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">About Us</h3>

              <ul className="footer__links">
                <li><a href="#" className="footer__link">About us</a></li>
                <li><a href="#" className="footer__link">Features</a></li>
                <li><a href="#" className="footer__link">News & Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Services</h3>

              <ul className="footer__links">
                <li><a href="#" className="footer__link">Pricing</a></li>
                <li><a href="#" className="footer__link">Discounts</a></li>
                <li><a href="#" className="footer__link">Rewards</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Company</h3>

              <ul className="footer__links">
                <li><a href="#" className="footer__link">Blog</a></li>
                <li><a href="#" className="footer__link">Celebrations</a></li>
                <li><a href="#" className="footer__link">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Social Media</h3>

              <ul className="footer__social">
                <a href="#" className="footer__social-link">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/Steeve26" target='_blank' className="footer__social-link">
                  <i className="fa-brands fa-github"></i>
                </a>
              </ul>
            </div>
          </div>

          <img src="/src/assets/footer-tree1.png" alt="footer image" className='footer__tree-1' />
          <img src="/src/assets/footer-tree2.png" alt="footer image" className='footer__tree-2' />
        </div>
        <span className="footer__copy">&copy; Copyright SteveBro. All rights reserved</span>
      </footer>

      {/* <!--========== SCROLL UP ==========--> */}
      <a href="#home" className={`scrollup ${showScroll && 'show-scroll'}`} id="scroll-up">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      
      {/* <!--=============== SCROLLREVEAL ===============--> */}
      {/* <script src=""></script>

      <!--=============== MAIN JS ===============-->
      <script src="assets/js/main.js"></script> */}
    
    </div>
  )
}

export default App
