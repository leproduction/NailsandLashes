
const downloadLink = document.querySelector('.downloadLink');

        downloadLink.addEventListener('click', () => {
            if (confirm('This option currently is unavailable?')) {
                // You can track download events here (e.g., using analytics)
            } else {
                event.preventDefault(); // Prevent default download behavior
            } 
        });
const spanCl = document.querySelector('#hover');
spanCl.addEventListener('mouseover', moOver)

function moOver(){
spanCl.style.textDecorationLine = 'none'
};