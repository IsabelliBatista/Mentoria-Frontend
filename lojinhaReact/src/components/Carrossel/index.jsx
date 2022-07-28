

import * as React from 'react'
import './style.css'

const Carrossel = () => {
  return (
    <main>
      <section class="section-category-mobile">
        <h2>Explore by category</h2>
        <div class="categories-mobile">
          <div class="item-category">
            <img src="img-category.png" alt="pessoa com tenis branco e calça cinza" />
            <h3>New Releases</h3>
          </div>
          <div class="item-category">
            <img src="img-category.png" alt="pessoa com tenis branco e calça cinza" />
            <h3>New Releases</h3>
          </div>
          <div class="item-category">
            <img src="img-category.png" alt="pessoa com tenis branco e calça cinza" />
            <h3>New Releases</h3>
          </div>
        </div>
      </section>
      <section class="section-carrousel-seen-recently-mobile">
        <div class="seen-text">
          <h2>Seen Recently</h2>
          <a href="">See More</a>
        </div>
        <div class="carrousel-items">
          <div class="carrousel-item">
            <div class="item-img">
              <img src="tenis-carrousel-mobile.png" alt="imagem tenis branco" class="item-img-carrousel" />
              <div class="for-icon">
                <img src="like.svg" alt="icone de like" />
              </div>
            </div>
            <div class="item-text-card">
              <h3>Name and Characteristics</h3>
              <strong class="item-text">74,95 € <span> 121,00 €</span> </strong>
              <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
            </div>
          </div>
          <div class="carrousel-item">
            <div class="item-img">
              <img src="tenis-carrousel-mobile.png" alt="imagem tenis branco" class="item-img-carrousel" />
              <div class="for-icon">
                <img src="like.svg" alt="icone de like" />
              </div>
            </div>
            <div class="item-text-card">
              <h3>Name and Characteristics</h3>
              <strong class="item-text">74,95 € <span> 121,00 €</span> </strong>
              <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
            </div>
          </div>
        </div>
      </section>
      <section class="section-carrousel-new-in desktop-hidden">
        <div class="container">
          <h2>NEW IN</h2>
          <div class="newin-carrousel-items">
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="image-shoes.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-carrousel-spring-summer desktop-hidden">
        <div class="container">
          <h2>SPRING/SUMMER 2021</h2>
          <div class="springsummer-carrousel-items">
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
            <div class="carrousel-item">
              <div class="item-img">
                <img src="spring.png" alt="imagem tenis branco" class="item-img-carrousel" />
                <div class="for-icon">
                  <img src="like.svg" alt="icone de like" />
                </div>
              </div>
              <div class="item-text-card">
                <span class="text-over">BRAND / TYPE</span>
                <h3>Name and Characteristics</h3>
                <strong class="item-text">74,95 € </strong>
                <img src="stars.svg" alt="cinco estrelas pretas" class="item-img-star" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
export default Carrossel;