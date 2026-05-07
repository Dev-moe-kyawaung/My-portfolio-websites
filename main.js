document.addEventListener('DOMContentLoaded', () => {

  // ===== Filter Portfolio =====
  const filterButtons = document.querySelectorAll('.filters button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if(filter === 'all' || card.dataset.category === filter){
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===== Dark/Light Mode Toggle =====
  const body = document.body;
  const themeToggle = document.createElement('button');
  themeToggle.innerText = 'Toggle Dark/Light';
  themeToggle.classList.add('btn');
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '20px';
  themeToggle.style.right = '20px';
  body.appendChild(themeToggle);

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  // Apply saved theme
  if(localStorage.getItem('theme') === 'light') body.classList.add('light-mode');

  // ===== Contact Form Validation =====
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if(!name || !email || !message){
      alert('Please fill in all fields.');
      return;
    }
    alert('Message sent! (This is a placeholder. Integrate email backend)');
    contactForm.reset();
  });
});
