const sortDice = () =>{
        const side = 6;
        let sort = Math.floor(Math.random()*side)+1;
        // switch (sort){
        //     case 1:
        //         const faceUm = `<div id="console" class="face-um">
        //                             <span class="ponto"> </span>
        //                         </div>`
        //         face = faceUm
        //         document.getElementById('frame').innerHTML = faceUm;
        //         console.log(sort);
        //         break;
        //     case 2:
        //         const faceDois = `<div id="console" class=" face-dois">
        //                             <span class="ponto"> </span>
        //                             <span class="ponto"> </span>
        //                         </div>`
        //         document.getElementById('frame').innerHTML = faceDois;
        //         console.log(sort);
        //         break;
        //     case 3:
        //         const faceTres = `<div id="console" class=" face-tres">
        //                             <span class="ponto"></span>
        //                             <span class="ponto"></span>
        //                             <span class="ponto"></span>
        //                         </div>`
        //         document.getElementById('frame').innerHTML = faceTres;
        //         console.log(sort);
        //         break;
        //     case 4:
        //         const faceQuatro = `<div id="console" class=" face-quatro">
        //                                 <div class="coluna">
        //                                     <span class="ponto"></span>
        //                                     <span class="ponto"></span>
        //                                 </div>
        //                                 <div class="coluna">
        //                                     <span class="ponto"></span>
        //                                     <span class="ponto"></span>
        //                                 </div>
        //                             </div>`
        //         document.getElementById('frame').innerHTML = faceQuatro;
        //         console.log(sort);
        //         break;
        //     case 5:
        //         const faceCinco = `<div id="console" class=" face-cinco">
        //                                 <div class="coluna">
        //                                 <span class="ponto"></span>
        //                                 <span class="ponto"></span>
        //                                 </div>
                                        
        //                                 <div class="coluna">
        //                                 <span class="ponto"></span>
        //                                 </div>
                                        
        //                                 <div class="coluna">
        //                                 <span class="ponto"></span>
        //                                 <span class="ponto"></span>
        //                                 </div>
        //                             </div>`
        //         document.getElementById('frame').innerHTML = faceCinco;
        //         console.log(sort);
        //         break;
        //     case 6:
        //         const faceSeis = `<div id="console" class="face-quatro">
        //                             <div class="coluna">
        //                                 <span class="ponto"></span>
        //                                 <span class="ponto"></span>
        //                                 <span class="ponto"></span>
        //                             </div>
        //                             <div class="coluna">
        //                                 <span class="ponto"></span>
        //                                 <span class="ponto"></span>
        //                                 <span class="ponto"></span>
        //                             </div>
        //                         </div>`
        //         document.getElementById('frame').innerHTML = faceSeis;
        //         console.log(sort);
        //         break;
        //     default:
        //         document.getElementById('frame').innerHTML = `<div id="console"></div>`;
        //         break;
        // }
        const dice = [...document.querySelectorAll(".die-list")];
        dice.forEach(die => {
            die.dataset.roll = sort;
        });

    }
