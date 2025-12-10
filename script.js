
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

