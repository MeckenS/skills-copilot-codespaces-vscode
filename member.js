function skillsMember() {
    var member = document.getElementById('member');
    var skills = document.getElementById('skills');
    var memberOffset = member.getBoundingClientRect().top - 100;
    
    if (window.scrollY >= memberOffset) {
        skills.classList.add('skills-animate');
    } else {
        skills.classList.remove('skills-animate');
    }
}