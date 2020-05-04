let length,path;
let gallery = document.querySelector('.gallery');

async function fetchPath() {
    const res = await fetch('data.json');
    const data = await res.json();
    return data[1];
}
async function setImage() {
    const data = await fetchPath();
    const length = data.length;
    const path = data.path;
    let img;
    for(let i=1;i<=length;i++) {
        let container = document.createElement('div');
        img = document.createElement('img');
        const ext = i<9 ? 'jpg' : 'jpeg';
        img.src = `${path}/${i}.${ext}`;
        container.appendChild(img);
        gallery.appendChild(container);
        container.addEventListener('click',(e)=>{
            e.target.classList.toggle('showImg');
            e.target.children[0].classList.toggle('big');
        })
    }
    let images = document.querySelectorAll('.gallery img');
    
    let options = {

    }
    let intersection = new IntersectionObserver((entries,observer)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting) {
                entry.target.classList.add('comeup');
                console.log(entry.target);
                observer.unobserve(entry.target);
            }
        });
    })

    images.forEach(image=>{
        intersection.observe(image);
    })
}
setImage();