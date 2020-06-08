const countdown = document.querySelector('#countdown');
const launchDate = new Date('June 19, 2020 12:00:00').getTime();
// June 19, 2020 12:00:00
// June 8, 2020 22:49:00
// console.log(launchDate);
// console.log(now);
// console.log(days, ':', hours, ':', minutes, ':', seconds);

// Update every second
const intvl = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let output = '';

  output += `
    <ul>
      <li>${days}<span>天</span></li>
      <li>${hours}<span>小時</span></li>
      <li>${minutes}<span>分鐘</span></li>
      <li>${seconds}<span>秒</span></li>
    </ul>
  `;
  // Check if launch date passed
  if (distance < 0) {
    clearInterval(intvl);
    countdown.innerHTML = '<div class="container launched">已到期!<div>';
    document.querySelector('.logo .title').remove();
  } else {
    countdown.innerHTML = output;
  }
  // console.log(days, ':', hours, ':', minutes, ':', seconds);
}, 1000);
