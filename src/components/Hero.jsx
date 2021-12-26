import React from 'react'
import '../components/Hero.css';
import 'animate.css';


function Hero() {
    return (
        <div className="hero-container">
            <h1 class="animate__animated animate__bounce">An animated element</h1>

            <div className="container-2"> 
            <h1> Por que praticar boxe?</h1>
            <h2> As artes marciais estimulam o desenvolvimento de várias habilidades. A prática de arte marcial traz muitos benefícios para a saúde física e mental, de crianças à idosos. Por meio do boxe é possível também aprender a compartilhar valores e experiências. </h2>
             
             <div> 
          
            <h2> Benefícios do boxe: </h2>
            </div>

            <i class="fas fa-boxing-glove">
                <p className="p1"> Promoção da capacidade de defesa pessoal</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="p1"> Aumento da coordenação</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="p1"> Emagrecimento progressivo</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="p1"> Melhora na composição física</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="p1">  Redução do estresse</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="p1"> Elevação da autoestimal</p>
            </i>

                <div>
                <h3> Venha para a melhor academia da região!
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default Hero


