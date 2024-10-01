// Add the missing import statement for the 'document' object
window.addEventListener('load', function() {
    let plus = document.querySelector('#plus');
    let minus = document.querySelector('#minus');
    let quantity = document.querySelector('#nbr');
    plus.addEventListener('click', function() {
        quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
        });
    minus.addEventListener('click', function() {
        if (parseInt(quantity.innerHTML) > 0) {
            quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
        }
    });
    let sizeDiv = document.querySelector('#sizeDiv');
    let listChildsOfSizeDiv = sizeDiv.children;
        for (let i = 0; i < listChildsOfSizeDiv.length; i++) {
            listChildsOfSizeDiv[i].addEventListener('click', function() {
                for (let j = 0; j < listChildsOfSizeDiv.length; j++) {
                    if (!listChildsOfSizeDiv[j].id.includes('size')) {
                        listChildsOfSizeDiv[j].classList.remove('selected');
                        listChildsOfSizeDiv[j].style.backgroundColor = 'rgb(205, 185, 31)';
                    }
                }
                listChildsOfSizeDiv[i].classList.add('selected');
                listChildsOfSizeDiv[i].style.backgroundColor = 'black';
            });
        }
        let colorDiv = document.querySelector('#colorsDiv');
        let listChildsOfcolorDiv = colorDiv.children;
        for (let i = 0; i < listChildsOfcolorDiv.length; i++) {
            listChildsOfcolorDiv[i].addEventListener('click', function() {
                for (let j = 0; j < listChildsOfcolorDiv.length; j++) {
                    if (!listChildsOfcolorDiv[j].id.includes('colors')) {
                        listChildsOfcolorDiv[j].classList.remove('selected');
                        listChildsOfcolorDiv[j].style.border = '0px solid black';
                    }
                }
                listChildsOfcolorDiv[i].classList.add('selected');
                listChildsOfcolorDiv[i].style.border = '3px solid black';
            });
        }
    
    }
);

     // Add this closing brace

    

