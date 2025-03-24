let timer = 0;
let contador_acerto = 0;
let contadorr = 27;
let opacidade = 0;
let score = 0;
let contador_de_invocamento = 0;
let contador_erro = 0;
let contador_acertoA = 0;
let bye_rocket =  document.getElementById('launcher_rocket');
var music_background = new Audio("audio/musicBackground.mp3");
var music_start = new Audio("audio/Start_sound1.mp3");
let errado = new Audio("audio/errado.mp3");
let errado1 = new Audio("audio/memoria_peixe.mp3");
let errado2 = new Audio("audio/nao_acerto.mp3");
let acerto = new Audio("audio/apetece.mp3");
let acerto1 = new Audio("audio/acerto.mp3");
let acerto2 = new Audio("audio/perfeito.mp3");
let errado3 = new Audio("audio/isso_significa.mp3");

let bossA = new Audio("audio/boss_soundtrack.mp3");
let super_score = new Audio("audio/score_max.mp3");
let explosionn = new Audio("audio/explosion.mp3");
let tempo_esgotado = true;

const cartas = ["img/ana.png", "img/breno.png", "img/jonas.png", "img/gabriel.png", "img/habib.png", "img/thanos.png","img/gabriel_boss.jpg","img/caioo.png","img/negreiros.png","img/paulinho.png"];
let baralho = [...cartas, ...cartas];  // Duplicando o baralho para ter pares

// Embaralha o baralho
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));  // Gera um número aleatório
        [array[i], array[j]] = [array[j], array[i]];  // Troca as posições
    }
}

// Função para iniciar o jogo
function start() {
    // Esconde as telas iniciais
    const apagar = document.getElementById('dialogo_logo');
    apagar.classList.add('desaparecer_anim');
    const apagar1 = document.getElementById('launcher');
    apagar1.classList.add('desaparecer_anim');

    music_start.play();
    
         //--------------------tela-cheia-compativel-com-quase-todos-navegadores------------------------
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen(); // Para navegadores modernos
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari e Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
  
    setTimeout(() => {
        apagar_comeco();
    }, 3000);

    setTimeout(() => {
        start2();
    }, 2000);
}

// Esconde elementos iniciais e altera a cor de fundo
function apagar_comeco() {
    document.getElementById('launcher').style.display = "none";
    document.getElementById('dialogo_logo').style.display = "none";
    const back_cor = document.getElementById('body');
    back_cor.classList.add('trocas_cor');
}

// Exibe a tela do jogo e toca a música de fundo
function start2() {
    document.getElementById('launcher_rocket').style.display = "grid";
    music_background.loop = true;
    music_background.play();
    music_background.volume = 0.2;

    embaralhar(baralho);  // Embaralha as cartas ao começar
}

// Variáveis para controlar o jogo
let cartasSelecionadas = [];
let cartasViradas = [];
let bloqueado = false;

// Função chamada quando uma carta é clicada
function virarCarta(index) {
    if (bloqueado || cartasViradas.includes(index) || cartasSelecionadas.length === 2) return;

    // Mostrar a imagem da carta
    document.getElementById(`c${index + 1}`).style.backgroundImage = `url('${baralho[index]}')`;

    // Adiciona a carta à lista de selecionadas
    cartasSelecionadas.push(index);

    if (cartasSelecionadas.length === 2) {
        bloqueado = true; // Bloqueia o clique enquanto verifica
        // Verifica se as cartas são iguais
        setTimeout(verificarCartas, 700);
    }
}

// Função para verificar se as duas cartas selecionadas são iguais
function verificarCartas() {
    let [carta1, carta2] = cartasSelecionadas;
    if (baralho[carta1] === baralho[carta2]) {
        // Se as cartas forem iguais, marca as cartas como viradas permanentemente
        cartasViradas.push(carta1, carta2);
        audio_acerto();
        setTimeout(() => {
            verificador_pessoal_cartas(carta1);
            verificador_pessoal_cartas(carta2);
        }, 50);
        setTimeout(() => {
            scoree();
        }, 50);
           audio_acerto();
           
    } else {
        // Se não forem iguais, vira as cartas de volta
        document.getElementById(`c${carta1 + 1}`).style.backgroundImage = '';
        document.getElementById(`c${carta2 + 1}`).style.backgroundImage = '';
         audio_erro();
         setTimeout(() =>{
            score = score -25;
            document.getElementById('score').innerHTML = `Score: ${score}`;
         },50);
        
    }
    
    // Limpa o array de cartas selecionadas
    cartasSelecionadas = [];
    bloqueado = false;
    verificarVitoria();
    
}
function audio_erro(){
    
 
    
    errado2.volume = 0.1;
    if(contador_erro == 0){
        errado.play();
        errado2.play();
        contador_erro++;
       
        
    }
    else if(contador_erro === 1){
        errado1.play();
        errado2.play();
        contador_erro = 0;
    }

}
function audio_acerto(){
    if(contador_acerto == 0){
        acerto.play();
        acerto1.play();
       contador_acerto++;
        
    }
    else if(contador_acerto === 1){
        acerto2.play();
        acerto1.play();
       contador_acerto++;
    }
    acerto1.volume = 0.1;
    acerto.play();
    acerto1.play();
}
function verificarVitoria() { // verificar vitoriaaaa
    
    if (cartasViradas.length === baralho.length) {
        
        music_background.pause();
        acerto.pause();
        bossA.play();
        let ceu = document.getElementById('body');
        ceu.classList.add('ceu_red_anim');
        document.getElementById('gabriel_bost').style.display = 'block';
        document.getElementById('final_button').style.display = 'flex';
        document.getElementById('btn_fim').style.display = 'block';
        

         timer = setInterval(function() {
            document.getElementById('score').innerHTML = `${contadorr}s`;
            contadorr--;  // Decrementa o contador
           if(contadorr === 4){
               document.getElementById('btn_fim').style.left = "40%"
           }
            if (contadorr < 0) {
                clearInterval(timer);  // Para o timer quando o contador chegar a 0
                  // Exibe mensagem de fim
                  
                  setTimeout(() => {
                    the_end_bed();
                  },1000);
            }
        }, 1000);

        
    }
}
  
   async function the_end_bed(){
    if(tempo_esgotado === true){
        const music_bad = new Audio("audio/music_bad.mp3")
        
        bossA.pause();
        const sumir1= document.getElementById('final_button');
        const score_sumir = document.getElementById('score');
        score_sumir.classList.add('final_button_anim')
        sumir1.classList.add('final_button_anim');
       document.getElementById('btn_fim').style.display='none';
    
        setTimeout(()=>{
            const alahu = new Audio('audio/alahu.mp3');
            alahu.play();
        },100)
        setTimeout(()=>{
         const gabriel_bosS = document.getElementById('gabriel_bost');
           const explodee = new Audio('audio/music_explode_bad.mp3');
           explodee.play();
          gabriel_bosS.style.display = 'none';
          document.getElementById('launcher_rocket').style.display = "none";
          document.getElementById('nav_explode').style.display = 'block';
          let ceu = document.getElementById('body');
          ceu.classList.remove('ceu_red_anim');
          // colocar o pos explosão aqui do gabriel
          setTimeout(()=>{
            
            window.location.replace('index2.html');
            

          },6500);
        },1000)
    }
    
 
   }
   function verificador_pessoal_cartas(index){
    if (baralho[index] === "img/thanos.png") {
        
        score = score+ 475;
        super_score.play();
        
    }
    if (baralho[index] === "img/gabriel_boss.jpg") {
        
        
    }
    if (baralho[index] === "img/ana.png") {
    
        
        
    }
    if (baralho[index] === "img/breno.png") {
        
        
        
    }
    if (baralho[index] === "img/caioo.png") {
        
        
        
    }
    if (baralho[index] === "img/jonas.png") {
        
        
        
    }
    if (baralho[index] === "img/negreiros.png") {
        
        
    }
    if (baralho[index] === "img/paulinho.png") {
        
        
    }
   }
   function scoree(){
         score = score+ 47;
       
         document.getElementById('score').innerHTML = `Score: ${score}`;
   }
   async function invocando(){
    var elementoo = document.getElementById('mestre_jailson');
    
    if( opacidade < 1){
       opacidade += 0.01;
       elementoo.style.opacity = opacidade;
       
    }
    else{
      tempo_esgotado = false;
      document.getElementById('power_1').style.display = 'block';
      clearInterval(timer);
      setTimeout(() => {

          jogando_power();
          dimi_audio();
    }, 2000);
    }

   }
   function dimi_audio(){
    console.log(bossA.volume);
    if(bossA.volume < 0.1){ // arrumar aquiiiiiiiiii
        bossA.volume = bossA.volume - 0.1;
    }else{
        dimi_audio();
        console.log("baixando: ", bossA.volume);
    }
   }
  
   function jogando_power() {
    let poder_anim = document.getElementById('power_1');

    
    let animacoesAtuais = poder_anim.style.animation;
    setTimeout(() => {
        explosão();
  }, 2000);
    
    if (!animacoesAtuais.includes('jogando_power')) {
        poder_anim.style.animation = (animacoesAtuais ? animacoesAtuais + ', ' : '') + 'jogando_power 0.3s infinite';

    }
    setTimeout(()=>{
        const explode = new Audio('audio/music_explode_bad.mp3');
        explode.play();
        document.getElementById('gabriel_bost').style.display = 'none';
        document.getElementById('nav_explode2').style.display = 'block';
        document.getElementById('gabriel_bost').style.display = 'none';
        document.getElementById('bomb_gabi').style.display = 'none';
        document.getElementById('power_1').style.display = 'none';
        bossA.pause();
        setTimeout(()=>{
            document.getElementById('final_button').style.display = 'none';
            document.getElementById('power_1').style.display = 'none';
            document.getElementById('btn_fim').style.display = 'none';
            setTimeout(()=>{

                document.getElementById('launcher_rocket').style.display ='none';

                setTimeout(()=>{
                    window.location.replace('index3.html');
                },1000);
            },4000);
        });
    },5000);
}
function explosão() {
    let boddy = document.getElementById('body');
    
    document.getElementById('bomb_gabi').style.display = 'block';
    explosionn.play();
    
    // Remover animação anterior antes de adicionar a nova
    boddy.classList.remove('ceu_red_anim');

    setTimeout(() => {
        times();
    }, 500);
}

function times() {
    let boddy = document.getElementById('body');
    
    // Garante que a nova animação será aplicada sem conflito
    boddy.style.animation = 'none';
    void boddy.offsetWidth;
    boddy.classList.add('fim_anim');
    item1 = document.getElementById('launcher_rocket');
    item1.classList.add('sumirr');
    item1 = document.getElementById('gabriel_boss');
    item1.classList.add('sumirr');
    item1 = document.getElementById('final_button');
    item1.classList.add('sumirr');
    
}
