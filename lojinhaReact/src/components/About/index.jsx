import * as React from 'react'
import './style.css'

const About = () => {
  return (
    <section class="section-slide-about desktop-hidden">
      <article class="text-about">
        <h3>It’s all about you</h3>
        <p>Try now, pay later. We want that you’re really confident and happy with your purchase - you have 30 days
          before we charge you! Learn more about our policy.</p>
        <div class="set-slide">
          <img src="seta.svg" alt="seta para direita" class="text-about-img" />
        </div>
      </article>
      <img src="img-about.png" alt="imagem de uma pessoa na pista de corrida" class="about-img" />
    </section>
  );
}
export default About;