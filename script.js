//your JS code here. If required.
 const buttons = document.querySelectorAll('.btn');
        const stopBtn = document.querySelector('.stop');
        let audio;

        buttons.forEach((button)=>{
            button.addEventListener('click',()=>{
                if(audio){
                    audio.pause();
                }
                audio = new Audio(`https://github.com/acciojob/Soundbar-nikhilpatel9/blob/master/sounds/${button.innerText}.mp3?raw=true`);
                audio.play();
            })
        })

        stopBtn.addEventListener('click',()=>{
            if(audio){
                audio.pause();
            }
        })