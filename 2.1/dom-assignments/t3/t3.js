const target = document.getElementById('target');

const browserName = navigator.userAgent.includes('Chrome')
  ? 'Google Chrome'
  : navigator.userAgent.includes('Firefox')
    ? 'Mozilla Firefox'
    : navigator.userAgent.includes('Safari')
      ? 'Safari'
      : 'Unknown Browser';

const browserVersion = navigator.userAgent.match(
  /(Chrome|Firefox|Version)\/([\d.]+)/
);
const version = browserVersion ? browserVersion[2] : 'Unknown';

let os = 'Unknown OS';
if (navigator.userAgent.includes('Win')) os = 'Windows';
else if (navigator.userAgent.includes('Mac')) os = 'macOS';
else if (navigator.userAgent.includes('Linux')) os = 'Linux';

const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

const now = new Date();
const dateStr = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const timeStr = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p><strong>Browser:</strong> ${browserName} ${version}</p>
  <p><strong>Operating system:</strong> ${os}</p>
  <p><strong>Screen size:</strong> ${screenWidth} x ${screenHeight}</p>
  <p><strong>Available space:</strong> ${availWidth} x ${availHeight}</p>
  <p><strong>Date:</strong> ${dateStr}</p>
  <p><strong>Time:</strong> ${timeStr}</p>
`;
