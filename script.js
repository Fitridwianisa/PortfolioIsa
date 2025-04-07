document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = this.name.value;
    const subject = this.subject.value;
    const message = this.message.value;
    
    const email = 'sablahnisa201@gmail.com';
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=Halo Fitri!%0ASaya ${encodeURIComponent(name)}%0A${encodeURIComponent(message)}`;
    
    window.open(mailtoURL, '_blank');
  });
  
