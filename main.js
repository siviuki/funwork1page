SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/267806421',function(sound){
    $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

 SC.stream('/tracks/340155138',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  SC.stream('/tracks/362640818',function(sound){
    $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  SC.stream('/tracks/256119085',function(sound){
    $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  SC.stream('/tracks/206493559',function(sound){
    $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  SC.stream('/tracks/291358852',function(sound){
    $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/311739188',function(sound){
    $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/311971479',function(sound){
    $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop7').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/225519099',function(sound){
    $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/315401304',function(sound){
    $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


SC.stream('/tracks/363589097',function(sound){
  $('#start10').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop10').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});


SC.stream('/tracks/407128221',function(sound){
  $('#start11').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop11').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
  });

});
