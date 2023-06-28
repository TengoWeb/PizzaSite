
window.addEventListener('scroll', function() {
    const section = document.querySelector('.section3');
    const image = document.querySelector('#chef-image');
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const imageHeight = image.offsetHeight;
    const imageTop = sectionTop + sectionHeight - imageHeight;

    if (window.pageYOffset > imageTop && window.pageYOffset < sectionTop + sectionHeight) {
      image.style.top = window.pageYOffset - imageTop + 'px';
    }
  });

  ScrollReveal().reveal('.navbar', {
    duration: 1000, 
    origin: 'top',
    distance: '20px',
    delay: 30, 
    easing: 'ease-in-out', 
    mobile: false, 
    reset: false, 
    viewFactor: 0.2 
  });

  ScrollReveal().reveal('#header', {
    duration: 1000, 
    origin: 'top', // Animation starting point (top, right, bottom, left, or center)
    distance: 'opx', // Distance the element moves during animation
    delay: 20, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('#first-page-text', {
    duration: 1000, 
    origin: 'right', // Animation starting point (top, right, bottom, left, or center)
    distance: '25px', // Distance the element moves during animation
    delay: 50, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });


  ScrollReveal().reveal('.twoshape', {
    duration: 1000, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '35px', // Distance the element moves during animation
    delay: 500, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('.shape', {
    duration: 1000, 
    origin: 'top', // Animation starting point (top, right, bottom, left, or center)
    distance: '20px', // Distance the element moves during animation
    delay: 500, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });


  ScrollReveal().reveal('.section-frist-headline', {
    duration: 1000, 
    origin: 'top', // Animation starting point (top, right, bottom, left, or center)
    distance: '20px', // Distance the element moves during animation
    delay: 500, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('.RightImage', {
    duration: 1000, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '20px', // Distance the element moves during animation
    delay: 500, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });


  ScrollReveal().reveal('.line1', {
    duration: 1000, 
    origin: 'top', // Animation starting point (top, right, bottom, left, or center)
    distance: '20px', // Distance the element moves during animation
    delay: 1000, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('.line2', {
    duration: 1300, 
    origin: 'top', 
    distance: '20px', 
    delay: 1000,
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('.line3', {
    duration: 1600, 
    origin: 'top', // Animation starting point (top, right, bottom, left, or center)
    distance: '20px', // Distance the element moves during animation
    delay: 1000, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });


  ScrollReveal().reveal('#chef-image' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 1000, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: true, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('#col-1' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 600, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });
  ScrollReveal().reveal('#col-2' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 600, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });
  ScrollReveal().reveal('#col-3' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 600, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });


  ScrollReveal().reveal('#col-4' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 600, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('#col-5' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 600, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('#col-6' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 600, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('.section-booking' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 300, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });

  ScrollReveal().reveal('.menu-section' ,{
    duration: 1600, 
    origin: 'bottom', // Animation starting point (top, right, bottom, left, or center)
    distance: '50px', // Distance the element moves during animation
    delay: 300, // Delay before the animation starts in milliseconds
    easing: 'ease-in-out', // Animation easing effect
    mobile: false, // Enable animation on mobile devices
    reset: false, // Reset the animation when scrolling back up
    viewFactor: 0.2 // Percentage of the element's visibility required for the animation to trigger
  });


  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContent = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContent.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active');
      target.classList.add('active');
    });
  });

  function validateForm(event) {
    event.preventDefault();

    var inputs = document.getElementsByTagName('input');
    var selects = document.getElementsByTagName('select');

    var isFormValid = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required') && !inputs[i].value.trim()) {
            isFormValid = false;
            break;
        }
    }

    for (var i = 0; i < selects.length; i++) {
        if (selects[i].hasAttribute('required') && !selects[i].value) {
            isFormValid = false;
            break;
        }
    }

    if (isFormValid) {
        showAlert();
        clearFields();
    } else {
        document.getElementById('#errorMessage').style.block = 'flex';
    }
}

function showAlert() {
    alert("Message sent");
}

function clearFields() {
    var inputs = document.getElementsByTagName('input');
    var selects = document.getElementsByTagName('select');
    var textarea = document.getElementById('exampleFormControlTextarea1');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    for (var i = 0; i < selects.length; i++) {
        selects[i].value = '';
    }

    textarea.value = '';
}