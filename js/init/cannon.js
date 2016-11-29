(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary to make your level challenging.
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        cannon.create.onTop(0);
        //cannon.create.onTop(100);
        cannon.create.onTop(200);
        //cannon.create.onTop(300);
        cannon.create.onTop(400);
        cannon.create.onTop(500);
        //cannon.create.onTop(600);
        cannon.create.onTop(700);
        //cannon.create.onTop(800);
        cannon.create.onTop(900);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);