document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = this.name.value;
    const subject = this.subject.value;
    const message = this.message.value;
  
    const whatsappURL = `https://wa.me/6285748196884?text=Halo%20Fitri!%0ASaya%20${name}%0ASubjek:%20${subject}%0APesan:%20${message}`;
    window.open(whatsappURL, '_blank');
  });
  