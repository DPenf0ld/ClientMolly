const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('click', () => {
    video.muted = false;
    video.volume = 1.0;

    video.play();
  });
});


const buttons = document.querySelectorAll(".btn");


buttons.forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  });
});

const headerOffset = 100;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});



const countdownDate = new Date("2026-01-02T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "Released!";
    clearInterval(timerInterval);
    return;
  }


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s ";

 // document.getElementById("timer").innerHTML ="PENDING";

}

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // call



const toggle = document.getElementById("onoff");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});


// Hide header on scroll for smaller screens
let lastScroll = 0;

function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    // Only activate on iPad/iPhone/small screens
    if (window.innerWidth <= 1024) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down → hide header
            header.classList.add('hide');
        } else {
            // Scrolling up → show header
            header.classList.remove('hide');
        }
    } else {
        // Ensure header always visible on desktop
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('resize', handleHeaderScroll);




