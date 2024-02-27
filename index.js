
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        card();
    }, 2000);
    load();
    overlay();
});

var arr = [
    {
        "naam": "spider",
        "url": "https://i.pinimg.com/474x/bc/2f/cf/bc2fcf3d13bed857372eb865d6c5901a.jpg"
    },
    {
        "naam": "rock",
        "url": "https://i.pinimg.com/474x/00/9c/97/009c9729d6a6d83a0ab89c50d4131a5f.jpg"
    },
    {
        "naam": "jama",
        "url": "https://i.pinimg.com/474x/19/05/3b/19053bbffc9e8babf8753095fb24f5c5.jpg"
    },
    {
        "naam": "man",
        "url": "https://i.pinimg.com/474x/fa/a7/70/faa770d377c88ca12b6df71724e7146e.jpg"
    },
    {
        "naam": "website",
        "url": "https://i.pinimg.com/474x/33/8e/24/338e248207040078b99c17eb937cddb8.jpg"
    },
    {
        "naam": "ring",
        "url": "https://i.pinimg.com/474x/7b/8f/21/7b8f214302940c95cd2cb4242d39a9f6.jpg"
    },
    {
        "naam": "iphone wallpaper",
        "url": "https://i.pinimg.com/474x/3b/ee/09/3bee09ce4514825d8f22278258e85ec2.jpg"
    },
    {
        "naam": "new image",
        "url": "https://i.pinimg.com/474x/ae/71/30/ae7130129f0748134b49163a73817b1e.jpg"
    },
    {
        "naam": "arts",
        "url": "https://i.pinimg.com/474x/d5/4f/a4/d54fa479e63f5ff73df72aa54cd51e81.jpg"
    },
    {
        "naam": "new image",
        "url": "https://i.pinimg.com/474x/c4/0a/9f/c40a9f8d1d5a8e7ad12dc19f27e033c8.jpg"
    },
    {
        "naam": "hulk",
        "url": "https://i.pinimg.com/474x/58/7a/d2/587ad256241742154247976f8d30349e.jpg"
    },
    {
        "naam": "jadu",
        "url": "https://i.pinimg.com/474x/24/6a/c1/246ac1193486947beb49ab55872cf4d4.jpg"
    },
    {
        "naam": "hulk 2",
        "url": "https://i.pinimg.com/474x/81/b3/71/81b37187807551815c45c15c36225af0.jpg"
    },

    {
        "naam": "home",
        "url": "https://i.pinimg.com/474x/fc/c0/be/fcc0bedf5b07f269bfed9b670a68f12f.jpg"
    },
    {
        "naam": "scoty",
        "url": "https://i.pinimg.com/474x/b6/64/bb/b664bb8898a41ae26560bc2e4d7062b3.jpg"
    },
    {
        "naam": "india",
        "url": "https://i.pinimg.com/474x/97/41/f4/9741f47a43dda1957f8663cd7bde4030.jpg"
    },
    {
        "naam": "japan",
        "url": "https://i.pinimg.com/474x/07/28/f4/0728f474616a5bdebd24dbdebe816098.jpg"
    },
    {
        "naam": "faluda",
        "url": "https://i.pinimg.com/474x/f4/b7/19/f4b7194ab2b8e65cdcf5a33b9109647e.jpg"
    },

]


function card() {

    var clutter = "";
    arr.forEach((img, index) => {
        clutter += `<div class=" overflow-hidden max-h-[80vh] hover:bg-slate-200  rounded-2xl"><img id="${index}" class="w-[20vw] max-sm:w-[45vw] rounded-2xl" src="${img.url}" alt="" srcset="">
            </div>`;
    })
    document.querySelector(".div-elm").innerHTML = clutter;

};

function load() {
    document.querySelector('.div-elm').innerHTML = `<div class='flex absolute	w-full space-x-2 justify-center items-center bg-white mt-[200px] '>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
</div>`;
};

var input = document.querySelector("#input-search");

function overlay() {
    input.addEventListener("focus", function (dets) {
        document.querySelector("#overlay").style.backgroundColor = 'rgba(0, 0, 0, 0.50)';
        document.querySelector(".nav-center").style.borderColor = 'skyblue';
        document.querySelector(".searchData").style.display = 'block';

    });
    input.addEventListener("blur", function (dets) {
        document.querySelector("#overlay").style.backgroundColor = '';
        document.querySelector(".nav-center").style.borderColor = '';
        document.querySelector(".searchData").style.display = 'none';

    })
    input.addEventListener('input', function () {
        const filterValue = arr.filter(item => item.naam.toLowerCase().startsWith(input.value))
        var clutter = '';
        if (input.value === "") {

            clutter += ` <div class="flex"><i class="ri-search-line px-2 font-black text-slate-500"></i><h4 class="italic text-slate-400 text-xl">Not found</h4></div> `;
        } else if (filterValue == false) {
            clutter += ` <div class="flex"><i class="ri-search-line px-2 font-black text-slate-500"></i><h4 class="italic text-slate-400 text-xl">No suggestion </h4></div> `;

        } else {
            filterValue.forEach((obj) => {
                clutter += ` <div class="flex border-b border-slate-200 py-2"><i class="ri-search-line px-2 text-xl font-black text-slate-500"></i><h4 class="text-xl text-slate-600">${obj.naam}</h4></div> `;
            })
        }

        document.querySelector(".searchData").innerHTML = clutter;
    })

};










