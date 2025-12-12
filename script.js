
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  
  menu.classList.add('translate-x-[-100%]'); 
  

  
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('translate-x-0'); 
    menu.classList.toggle('translate-x-[-100%]'); 
  });

  
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.add('translate-x-[-100%]');
      menu.classList.remove('translate-x-0');
    }
  });


menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");

  const spans = menuBtn.querySelectorAll("span");

  if (menuBtn.classList.contains("open")) {

    spans[0].classList.add("translate-y-[7px]", "rotate-45");
    
    spans[1].classList.add("opacity-0");
    
    spans[2].classList.add("-translate-y-[7px]", "-rotate-45");
  } else {
    
    spans[0].classList.remove("translate-y-[7px]", "rotate-45");
    spans[1].classList.remove("opacity-0");
    spans[2].classList.remove("-translate-y-[7px]", "-rotate-45");
  }
});


  