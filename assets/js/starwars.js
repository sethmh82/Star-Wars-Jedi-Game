    var myHealth = 100,
    enemy1Health = 100,
    enemiesKilled = 0,
    attackPower1 = 1,
    attacking = 0,
    enemyLoaded = 0,
    enemy1dead = 0,
    enemy2dead = 0,
    enemy3dead = 0;

    function isGameOver(){
      if (enemiesKilled === 4) {
      $("#you-won").html("<h1>YOU WIN</h1><br><h2>You defeated all enemies</h2>");
      document.getElementById("you-won").style.background = "#f4af0a";
      document.getElementById("you-won").style.padding = "30px";
      document.getElementById("enemy-image").style.display = "none";
      } 
    }

    function iAmAttacking() {
      isGameOver();
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
                            $("#kills").html(enemiesKilled + " /4");
                           document.getElementById("bottom-col").style.opacity = "100"; 
                            enemyLoaded = 0;
                            enemy1dead = 1;
                      } else {
                            $("#enemy-health").html(enemy1Health);
                            enemyIsAttacking();
                      }      
          }
                  
    }


    function enemyIsAttacking() {
        if (attacking === 1) {
        var enemyAttack = Math.floor(Math.random()*12);
        }
        if (attacking === 2) {
        var enemyAttack = Math.floor(Math.random()*22);
        }
        if (attacking === 3) {
        var enemyAttack = Math.floor(Math.random()*9);
        }
        if (attacking === 4) {
        var enemyAttack = Math.floor(Math.random()*5);
        }

          myHealth = (myHealth - enemyAttack);
              if (myHealth <= 0) {
              document.getElementById("myHealthBar").style.width = ("0%");
              $("#my-health").html("0");
              $("#you-won").html("<h1>YOU LOST</h1><br><h2>You were defeated by the enemy</h2>");
              document.getElementById("my-attack").style.opacity = "0";
              document.getElementById("power1").style.opacity = "0";
              document.getElementById("you-won").style.background = "red";
              document.getElementById("you-won").style.padding = "30px";
              document.getElementById("enemy-image").style.display = "none";
              } else {
              document.getElementById("myHealthBar").style.width = (myHealth + "%");
              $("#my-health").html(myHealth);
              }    
    }

// ATTACK BUTTON
        $("#power1").on("click", function() {
        iAmAttacking();
    });

// RESET BUTTON
        $("#reset").on("click", function() {
        location.reload();
    });

// CHOOSING AN ENEMY

        //PROBE DROID
        $("#enemy1").on("click", function() {
          document.getElementById("enemy1").style.opacity = "0";
          document.getElementById("bottom-col").style.opacity = "0";  
          attacking = 1;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/probe.gif'>");
        $("#enemy-name").html("<b>Probe</b>");
        $("#enemy-health").html(enemy1Health);
        document.getElementById("healthBar").style.width = "100%";
           
            });
        
        //STORMTROOPER
        $("#enemy2").on("click", function() {
         document.getElementById("enemy2").style.opacity = "0";
         document.getElementById("bottom-col").style.opacity = "0"; 
          attacking = 2;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/stormtrooper.gif'>");
        $("#enemy-name").html("<b>Stormtrooper</b>");
        $("#enemy-health").html(enemy1Health);
        document.getElementById("healthBar").style.width = "100%";
        
    });
        //AT-ST WALKER
        $("#enemy3").on("click", function() {
         document.getElementById("enemy3").style.opacity = "0";
         document.getElementById("bottom-col").style.opacity = "0"; 
          attacking = 3;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/at-st.gif'>");
        $("#enemy-name").html("<b>AT-ST Walker</b>");
        $("#enemy-health").html(enemy1Health);
        document.getElementById("healthBar").style.width = "100%";
        
    });
        //BOBA FETT
        $("#enemy4").on("click", function() {
          document.getElementById("enemy4").style.opacity = "0";
          document.getElementById("bottom-col").style.opacity = "0"; 
          attacking = 4;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/boba-fett.gif'>");
        $("#enemy-name").html("<b>Boba Fett</b>");
        $("#enemy-health").html(enemy1Health);
        document.getElementById("healthBar").style.width = "100%";
        
    });
