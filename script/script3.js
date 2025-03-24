let music_fim = new Audio('audio/music_end_good.mp3');
function the_end(){
    setTimeout(()=>{
 const depos = new Audio('audio/Depoimento_jailson.mp3');
 depos.play();
 setTimeout(()=>{
    const depos1 = new Audio('audio/ate.mp3');
    depos1.play();
    setTimeout(()=>{
        const depos2 = new Audio('audio/Climao.mp3');
        depos2.play();
                  
           },12000);   
       },5000);
    },8000);
    setTimeout(()=>{
        document.getElementById('continue').style.display='none';
    },800)
document.getElementById('continue').classList.add('sumir_btn');
music_fim = new Audio('audio/music_end_good.mp3');
music_fim.loop = true;
music_fim.play();
document.getElementById('launcher_rocket').style.display='block';
setTimeout(()=>{
    chamar_Planetas();
},1500)
}
function init_video(){
    const video = document.getElementById('videos');
    video.muted = false;
    video.play();
    document.getElementById('videos').style.display = 'block';
    document.getElementById('im1').style.display = 'block';
    document.getElementById('im2').style.display = 'block';
    document.getElementById('cx1').style.display = 'block';
    document.getElementById('cx2').style.display = 'block';
    music_fim.pause();
    document.getElementById('body').classList.add('anim_colors');
    

    video.addEventListener('ended', function() {
        document.getElementById('videos').style.display = 'none';
    document.getElementById('im1').style.display = 'none';
    document.getElementById('im2').style.display = 'none';
    document.getElementById('cx1').style.display = 'none';
    document.getElementById('cx2').style.display = 'none';
    document.getElementById('h1').style.display = 'none';
    document.getElementById('h2').style.display = 'none';
    document.getElementById('h3').style.display = 'none';
    document.getElementById('btn_video').style.display = 'none'
    document.getElementById('body').classList.remove('anim_colors');
    document.getElementById('explode_final').style.display = 'block';
    let audii = new Audio('audio/music_explode_bad.mp3');
    audii.play();
    setTimeout(()=>{
        window.location.href = "index_saida.html"
    },4000);
    });
}

async function chamar_Planetas(){
    document.getElementById('pl1').style.display = 'block'
    setTimeout(()=>{
       document.getElementById('pl2').style.display = 'block'
       setTimeout(()=>{
        document.getElementById('pl3').style.display = 'block'
        setTimeout(()=>{
            document.getElementById('pl4').style.display = 'block'
            setTimeout(()=>{
                document.getElementById('pl5').style.display = 'block'
                setTimeout(()=>{
                    document.getElementById('pl5').style.display = 'none'
                    document.getElementById('launcher_rocket').style.display='none';
                    setTimeout(()=>{
                        document.getElementById('h1').style.display = 'block'
                        setTimeout(()=>{
                            document.getElementById('h2').style.display = 'block'
                            setTimeout(()=>{
                                document.getElementById('h3').style.display = 'block'
                                setTimeout(()=>{
                                    document.getElementById('btn_video').style.display = 'block'
                                    
                                    
                                 },5000);
                             },3000);
                         },1000);
                     },500);
                 },8000);
             },7000);
         },7000);
     },7000);
    },7000);
}
