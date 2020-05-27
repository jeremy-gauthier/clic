
let app = {
    
    counter: 0,
    elements: {},
    
    init: function() {

        console.log('app.init');

        
        app.elements.button = document.getElementById('button');
        app.elements.counter = document.getElementById('counter');

        
        app.startListener();
    },

    startListener: function() {

        app.elements.button.addEventListener('click', app.handleClickButton);
    },

    handleClickButton: function() {

        app.counter++;
        app.elements.counter.textContent = app.counter;
        
    }
};

document.addEventListener('DOMContentLoaded', app.init);

