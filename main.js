SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});





  $(document).ready(function() {
    SC.stream('/tracks/115952864',function(sound){
    $('#lady').click(function(e) {
             e.preventDefault();
             sound.start();
           });
           $('#kash').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

   });
   });




     $(document).ready(function() {
       SC.stream('/tracks/339593020',function(sound){
       $('#song1').click(function(e) {
                e.preventDefault();
                sound.start();
              });
              $('#song2').click(function(e) {
                e.preventDefault();
                sound.stop();
              });

      });
      });




      $(document).ready(function() {
        SC.stream('/tracks/390686295',function(sound){
        $('#song5').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
               $('#song6').click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });

       });
       });




            $(document).ready(function() {
              SC.stream('/tracks/25793168',function(sound){
              $('#song7').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                     $('#song8').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                     });

             });
             });




             $(document).ready(function() {
               SC.stream('/tracks/352158695',function(sound){
               $('#song11').click(function(e) {
                        e.preventDefault();
                        sound.start();
                      });
                      $('#song12').click(function(e) {
                        e.preventDefault();
                        sound.stop();
                      });

              });
              });

              $(document).ready(function() {
                SC.stream('/tracks/322992144',function(sound){
                $('#song13').click(function(e) {
                         e.preventDefault();
                         sound.start();
                       });
                       $('#song14').click(function(e) {
                         e.preventDefault();
                         sound.stop();
                       });

               });
               });



     $(document).ready(function() {
       SC.stream('/tracks/390687120',function(sound){
       $('#song3').click(function(e) {
                e.preventDefault();
                sound.start();
              });
              $('#song4').click(function(e) {
                e.preventDefault();
                sound.stop();
              });

      });
      });

   $(document).ready(function() {
     SC.stream('/tracks/331502729',function(sound){
     $('#super').click(function(e) {
              e.preventDefault();
              sound.start();
            });
            $('#model').click(function(e) {
              e.preventDefault();
              sound.stop();
            });

    });
    });




    $(document).ready(function() {
      SC.stream('/tracks/50315846',function(sound){
      $('#si').click(function(e) {
               e.preventDefault();
               sound.start();
             });
             $('#vi').click(function(e) {
               e.preventDefault();
               sound.stop();
             });

     });
     });
