    var headsCount = 0;
    var tailsCount = 0;
    var power3Count = 0;
    var wins = 0;
    var losses = 0;
    var myHealth = 100;
    var enemy1Health = 100;
    var enemy2Health = 100;
    var enemy3Health = 100;
    var enemiesKilled = 0;
    var attackPower1 = 1;
    var attackPower2 = 15;
    var attackPower3 = 30;
    var enemy1dead = 0;
    var enemy2dead = 0;
    var enemy3dead = 0;

 function newGame(){

    headsCount = 0,
    tailsCount = 0,
    power3Count = 0,
    wins = 0,
    losses = 0,
    myHealth = 100,
    enemy1Health = 100,
    enemy2Health = 100,
    enemy3Health = 100,
    enemiesKilled = 0,
    attackPower1 = 1,
    attackPower2 = 15,
    attackPower3 = 30,
    attacking = 0;
    enemyLoaded = 0;
    enemy1dead = 0,
    enemy2dead = 0,
    enemy3dead = 0;

 }

    function isGameOver(){
      if (enemiesKilled === 3) {
      $("#you-won").html("<h1>YOU WIN</h1><br><h2>You defeated all enemies</h2>");
      document.getElementById("you-won").style.background = "#f4af0a";
      document.getElementById("you-won").style.padding = "30px";
      document.getElementById("enemy-image").style.display = "none";
      } 
    }


    

    function iAmAttacking1() {

        if (attacking === 1){
                isGameOver();
                //var myAttack = Math.floor(Math.random()*30);

                if (enemyLoaded === 0) {
                } else {
                      var myAttack = attackPower1;
                      enemy1Health = (enemy1Health - myAttack);
                      document.getElementById("healthBar").style.width = (enemy1Health + "%");
                        attackPower1++;
                         $("#my-attack").html(attackPower1);  
                          if (enemy1Health <= 0) {
                            document.getElementById("healthBar").style.width = "0%";
                            $("#enemy-health").html("0"); 
                            $("#enemy-image").html("<img class='enemypic' src='assets/images/explode.gif'>"); 
                              enemiesKilled++;
                              isGameOver();
                              $("#kills").html(enemiesKilled);
                              enemyLoaded = 0;
                              enemy1dead = 1;
                          } else {
                              $("#enemy-health").html(enemy1Health);
                              enemyIsAttacking();
                          }
                  }
        }
    }   

    

           function iAmAttacking2() {
            isGameOver();
            var myAttack = Math.floor(Math.random()*30);
            $("#my-attack").html(myAttack);
            enemy2Health = (enemy2Health - myAttack);
            document.getElementById("healthBar").style.width = (enemy2Health + "%");
            if (enemy2Health <= 0) {
              document.getElementById("healthBar").style.width = "0%";
              $("#enemy-health").html("0"); 
              $("#enemy-image").html("<img class='enemypic' src='assets/images/explode.gif'>"); 
                enemiesKilled++;
                isGameOver();
                $("#kills").html(enemiesKilled);
               // if (enemiesKilled === 3) {
                  
              //  } else {
                  $("#kills").html(enemiesKilled);
                  enemy1dead = 2;
              //  }
            } else {
              $("#enemy-health").html(enemy2Health);
              enemyIsAttacking();
            }
          }

         

     function iAmAttacking3() {

      var myAttack = Math.floor(Math.random()*30);
      $("#my-attack").html(myAttack);
      enemy3Health = (enemy3Health - myAttack);
      document.getElementById("healthBar").style.width = (enemy3Health + "%");
      if (enemy3Health <= 0) {
        document.getElementById("healthBar").style.width = "0%";
        $("#enemy-health").html("0"); 
        $("#enemy-image").html("<img class='enemypic' src='assets/images/explode.gif'>"); 
          enemiesKilled++;
          isGameOver();
          $("#kills").html(enemiesKilled);
          //if (enemiesKilled === 3) {
            
          //} else {
            $("#kills").html(enemiesKilled);
            enemy1dead = 3;
         // }
      } else {
        $("#enemy-health").html(enemy3Health);
        enemyIsAttacking();
      }
    }


    function enemyIsAttacking() {

    	var enemyAttack = Math.floor(Math.random()*7);
      myHealth = (myHealth - enemyAttack);
      if (myHealth <= 0) {
        document.getElementById("myHealthBar").style.width = ("0%");
        $("#my-health").html("0");
        $("#you-won").html("<h1>YOU LOST</h1><br><h2>You were defeated by the enemy</h2>");
        document.getElementById("you-won").style.background = "red";
        document.getElementById("you-won").style.padding = "30px";
        document.getElementById("enemy-image").style.display = "none";
      } else {
        document.getElementById("myHealthBar").style.width = (myHealth + "%");
        $("#my-health").html(myHealth);
      }    
    }


 /* 

    function flipThatCoin(result) {

      var myAttack = Math.floor(Math.random()*3);
      $("#my-attack").html(myAttack);

  
      if (randomNumber === 0) {
          $("#enemy-image").html("<img class='enemypic' src='assets/images/at-st.gif'>");
           $("#rand-num").html(randomNumber);
        } else if (randomNumber === 1) {
          $("#enemy-image").html("<img class='enemypic' src='assets/images/boba-fett.gif'>");
           $("#rand-num").html(randomNumber);
        } else if (randomNumber === 2) {
          $("#enemy-image").html("<img class='enemypic' src='assets/images/probe.gif'>");
           $("#rand-num").html(randomNumber);
        }


      if (result == randomNumber) {
            wins++;
            $("#win-lose").html("<h2>Winner!</h2>");
            $("#wins").html(wins);
          } else {
            losses++;
            $("#win-lose").html("<h2>Loser!</h2>");
            $("#losses").html(losses);
          }
   }
*/

// CHOOSING AN ATTACK POWER
        $("#power1").on("click", function() {
         // headsCount++;
        $("#power1-chosen").html(headsCount);
       
        iAmAttacking1();
       // attackEnemy();

    });

/*
        $("#power2").on("click", function() {
       // tailsCount++;
        $("#power2-chosen").html(tailsCount);
        $("#power-used").html("<b>YOU USED: POWER 2</b>");
        iAmAttacking2();
        attackEnemy();
        attackPower1-5;
    });


        $("#power3").on("click", function() {
      //  power3Count++;
        $("#power3-chosen").html(power3Count);
        $("#power-used").html("<b>YOU USED: POWER 3</b>");
        iAmAttacking3();
        attackEnemy();
        attackPower1-10;
    });
*/


// CHOOSING AN ENEMY

        //PROBE DROID
        $("#enemy1").on("click", function() {
          attacking = 1;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/probe.gif'>");
        $("#enemy-name").html("<b>Probe</b>");
       	$("#enemy-health").html(enemy1Health);
        document.getElementById("healthBar").style.width = "100%";
    });
        $("#enemy2").on("click", function() {
          attacking = 1;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/stormtrooper.gif'>");
        $("#enemy-name").html("<b>Stormtrooper</b>");
       	$("#enemy-health").html(enemy2Health);
        document.getElementById("healthBar").style.width = "100%";
    });
        //AT-ST WALKER
        $("#enemy3").on("click", function() {
          attacking = 1;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/at-st.gif'>");
        $("#enemy-name").html("<b>AT-ST Walker</b>");
       	$("#enemy-health").html(enemy3Health);
        document.getElementById("healthBar").style.width = "100%";
    });

//newGame();        