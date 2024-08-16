const menuIcon = document.getElementById('menu-icon');
const mobileMenuContent = document.getElementById('mobile-menu-content');
const closeIcon = document.querySelector('.fa-times-circle.close');

menuIcon.addEventListener('click', () => {
    if (mobileMenuContent.style.display === 'none') {
        mobileMenuContent.style.display = 'block';
    } else {
        mobileMenuContent.style.display = 'none';
    }
});

closeIcon.addEventListener('click', () => {
    mobileMenuContent.style.display = 'none';
});

 