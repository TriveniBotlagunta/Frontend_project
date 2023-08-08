const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const total = document.getElementById('total');
const radioButtonsNodes = document.querySelectorAll('.radioBtn');
const sizeColorsDivsNodes = document.querySelectorAll('.size-color-boxes-container');
const boxesChildNode = document.querySelectorAll('.box');
const radioButtons = document.querySelectorAll('.radioBtn');

// Add event listener to each radio button
radioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener('click', () => {
    // Remove active class from all radio buttons
    radioButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked radio button
    radioBtn.classList.add('active');
  });
});

total.innerHTML = "DKK 360.00";

// This function updates the current box's code
function boxUpdaterFunction(nodes, radiobtn, sizeBoxController, box) {
    // Remove active classes
    for (let i = 0; i < nodes.length; i++) {
        radioButtonsNodes[i].classList.remove('active-outline');
        radioButtonsNodes[i].children[0].classList.remove('active-bg');
        nodes[i].classList.remove('active-box-style');
        nodes[i].children[1].style.display = 'none';
    }

    // Extract the total price value from the current box
    const totalValue = box.querySelector('.rdo-btn-dv2').innerHTML;
    // Update the total price element
    total.innerHTML = totalValue;

    // Add active classes
    radiobtn.classList.add('active-outline');
    radiobtn.children[0].classList.add('active-bg');
    box.classList.add('active-box-style');
    sizeBoxController.style.display = 'block';
}

// Event listeners for box1, box2, and box3
box1.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[0];
    const sizeBoxController = sizeColorsDivsNodes[0];
    const box = box1;

    boxUpdaterFunction(boxesChildNode, radiobtn, sizeBoxController, box);
});

box2.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[1];
    const sizeBoxController = sizeColorsDivsNodes[1];
    const box = box2;

    boxUpdaterFunction(boxesChildNode, radiobtn, sizeBoxController, box);
});

box3.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[2];
    const sizeBoxController = sizeColorsDivsNodes[2];
    const box = box3;

    boxUpdaterFunction(boxesChildNode, radiobtn, sizeBoxController, box);
});
