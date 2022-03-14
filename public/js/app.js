const drives = document.querySelectorAll(".song__drive");
console.log(drives);


// drives.forEach(drive => {
//     drive.addEventListener("click", e=>{
//         drive.firstElementChild.autoplay = true;
//         console.log(drive.firstElementChild);
//     });
// })

drives.forEach((drive, index) => {
    drive.addEventListener("click", e=>{
        const snd = new Audio(`../assets/${index+1}.mp3`);
        if(snd.autoplay === false){
            snd.autoplay = true;
        }else{
            snd.autoplay = false;
        }
        console.log(drive.firstElementChild);
    });
})