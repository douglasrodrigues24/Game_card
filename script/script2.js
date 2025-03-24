

function btn_continue() {
    const btn = document.getElementById('continue').classList.add('sumir_btn');
    const musicFim = new Audio('audio/music_bad.mp3');
    musicFim.loop = true;
    musicFim.play();
    setTimeout(()=>{
        document.getElementById('body').classList.add('ceuRed');
        document.getElementById('h1').style.display = 'block';
        document.getElementById('gabi_boss').style.display = 'block';
        const risada = new Audio('audio/risada_maligna.mp3');
        risada.loop = true;
        risada.play();
    },4000)
   
    
}
