const loveButton = document.getElementById('loveButton');
const surprise = document.getElementById('surprise');

loveButton.addEventListener('click', () => {
  if (surprise.style.display === 'none' || surprise.style.display === '') {
    surprise.style.display = 'block';  // Show the message
  } else {
    surprise.style.display = 'none';   // Hide the message if clicked again
  }
});
