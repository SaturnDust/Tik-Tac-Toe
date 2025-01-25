var rounds = 1;

function ReadMove(){
    document.querySelectorAll('.js-box').forEach((kotak_trigger) => {
        kotak_trigger.addEventListener('click', () => {
            const boxPosition = kotak_trigger.dataset.boxPosition;
            
            if(rounds % 2 == 0 ){
                document.querySelector(`.box-${boxPosition}`).innerHTML = `
                <div class="move-icon">
                    <div class="x-move triangle-left"></div>
                    <div class="x-move triangle-right"></div>
                </div>
                `;
            } else {
                document.querySelector(`.box-${boxPosition}`).innerHTML = `
                    <div class="move-icon">
                        <div class="circle-move"></div>
                    </div>
                `;
            }
            rounds++;
        })
    });  
}

ReadMove();