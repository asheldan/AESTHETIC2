document.getElementById('mascot').addEventListener('mouseenter', function() {
    this.classList.add('pulse');
});

document.getElementById('mascot').addEventListener('mouseleave', function() {
    this.classList.remove('pulse');
});
