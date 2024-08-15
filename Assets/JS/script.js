document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.display = 'flex';
    document.getElementById('menu-close').style.display = 'block';
});

document.getElementById('menu-close').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.display = 'none';
    document.getElementById('menu-close').style.display = 'none';
});
