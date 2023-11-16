var c = document.getElementById('clickspace');
var score = 0;
var conf;
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {

        c.addEventListener('click', function() {
            score += 1;
            })
            setTimeout(function(){
                if (score < 5) {
                    conf = confirm("Votre score est de : " + score + ", vous êtes classer 'Vins'");
                    
                    if (conf) {
                      location.reload();
                } else if (score > 5 && score < 10) {
                    conf = confirm("Votre score est de : " + score + ", vous êtes classer 'BABABOUILLE'");
                    
                    if (conf) {
                      location.reload();
                    }
                } else {
                    conf = confirm("Votre score est de : " + score + ", vous êtes classer 'Enorme et sec'");
                    
                    if (conf) {
                      location.reload();
                    }
                }
                location.reload();
              }
            }, 1000)
    }
})
