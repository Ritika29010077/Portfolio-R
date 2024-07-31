// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Date in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Interactive Button
document.getElementById('change-about-text').addEventListener('click', () => {
    const aboutMeText = document.getElementById('about-me-text');
    if (aboutMeText.textContent.includes('challenging position')) {
        aboutMeText.textContent = 'I am passionate about technology and problem-solving. I aim to bring creative solutions and drive innovation.';
    } else {
        aboutMeText.textContent = 'A dedicated and hardworking professional seeking a challenging position where I can utilize my skills and experience. Eager to contribute to a dynamic team and help achieve company goals while growing my own career. Highly motivated to bring innovative solutions and a strong work ethic to the organization.';
    }
});