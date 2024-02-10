import React from "react";
import "./main.css"

function Main() {
    const cards = [{src: "https://github.com/glamostoffer/MTG_collection/blob/master/img/emergence.jpg?raw=true", alt: "dragon", id: "dragon", butt_id: "dragon_a"},
    {src: "https://github.com/glamostoffer/MTG_collection/blob/master/img/leaf-avenger.jpg?raw=true", alt: "leaf", id: "leaf", butt_id: "leaf_a"},
    {src: "https://github.com/glamostoffer/MTG_collection/blob/master/img/junji.jpg?raw=true", alt: "junji", id: "junji", butt_id: "junji_a"}]

    return (
        <div class="main">
            {
                cards.map (card => 
                    <div class="glassmorph_card">
                        <div class="block1"></div>
                        <div class="block2"></div>
                        <div class="background_gradient" id={card.id}></div>
                        <div class="card">
                            <img src={card.src} alt={card.alt}/>
                            <a href="404.html" id={card.butt_id}>More</a>
                        </div>
                    </div>
                    )                
            }
        </div>
    );
}

export default Main;