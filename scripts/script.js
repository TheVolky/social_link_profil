document.querySelectorAll('.links a').forEach(function(anchor) {
    anchor.addEventListener('mouseover', function() {
        this.closest('.links').classList.add('hovered');
    });
    anchor.addEventListener('mouseout', function() {
        this.closest('.links').classList.remove('hovered');
    });
});