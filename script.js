$(document).ready(function () {
    console.log("loaded");
      $(document).on('click', '#geesehub', function (e) {
            console.log("alex is a stupid kent");
      });
  
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*    $(document).on('click', '#cancel', function () {
            hideconfirm();
            setTimeout(resetconfirm, 200);
      });

      $(document).on('click', '.shadow', function () {
            console.log("shadow pressed");
            hideconfirm();
            setTimeout(resetconfirm, 200);
      });

      function showconfirm() {
            showshadow();
            setTimeout(function () {
                  $(".shadow").removeClass('transparent');
            }, 100);
      };

      function hideconfirm() {
            $(".shadow").addClass('transparent');
            setTimeout(hideshadow, 200);
            setTimeout(resetconfirm, 210);
      };

      function resetconfirm() {
            $('#circle').detach();
            $('.tickwrapper').detach();
            $(".tickwrapper").addClass('transparent');
      }

      function showshadow() {
            $(".shadow").show();
      };

      function hideshadow() {
            $(".shadow").hide();
      };

      function clearbooking() {
            console.log("clear pressed");
            var clearbookingid = $('#clearbookingid').html();
            $.post('../db/clearbooking.php', {
                  clearbookingid: clearbookingid,
            }, function (bookingid) {
                  $('.textpart').html(bookingid);
            });

            $(".greywrapper").addClass("transparent");
            var date = $('#activedate').html();
            var timeid = $("#currtimeid").html();
            var day = $("#dayofweek").html();
            output(timeid, day, date);
      };
      var roomid;
      var newbookingsuccess;

      function newbooking() {
            var currenttimeid = $('#currenttimeid').html();
            var currentday = $('#currentday').html();
            var activedate = $('#activedate').html();
            var roomid = $('#roomid').html();
            console.log("Time id: " + currenttimeid + " Day: " + currentday + " Date: " + currentday + " Roomid: " + roomid);
            $.post('../db/updatebookings.php', {
                  activedate: activedate,
                  dayofweek: currentday,
                  timeid: currenttimeid,
                  roomid: roomid,
            }, function (newbooking) {
                  newbookingsuccess = (newbooking);
            });
      };
      $(document).keydown(function (event) {
            if (event.which == 27) {
                  console.log("shadow pressed");
                  hideconfirm();
                  setTimeout(resetconfirm, 200);
            }
      });
      var type;

      //code for new booking--------------------------------------
      $(document).on('click', '.available', function () {
            var roomid = $(this).attr('roomid');
            $('#roomid').html(roomid);
            console.log('new');
            type = 'new';
            $('#titletext').html('Confirm Booking');
            var date = $('#activedate').html();
            var timeid = $("#currtimeid").html();
            var day = $("#dayofweek").html();
            $.post('../db/confirmcontent.php', {
                  roomid: roomid,
                  type: type,
                  date: date,
                  timeid: timeid,
                  day: day,
            }, function (confirmcontent) {
                  $('.confirmcontent').html(confirmcontent);
            });
            showconfirm();
      });
      //code for my bookings----------------------------------------
      $(document).on('click', '.clearbutton', function () {
            console.log('view');
            type = 'view';
            $('#titletext').html('Confirm Cancellation');
            var roomid = $(this).attr('roomid');
            var date = $('#activedate').html();
            var timeid = $("#currtimeid").html();
            var day = $("#dayofweek").html();
            $.post('../db/confirmcontent.php', {
                  roomid: roomid,
                  type: type,
                  date: date,
                  timeid: timeid,
                  day: day,
            }, function (confirmcontent) {
                  $('.confirmcontent').html(confirmcontent);
            });
            var tempid = $(this).attr('id');
            $('#clearbookingid').html(tempid);
            showconfirm();
      }); //------------------------------------------------------------------------

      function output(timeid, day, date) {
            setTimeout(function () {
                  console.log(" time id: " + timeid + " day: " + day + " date: " + date);

                  $.post('../db/datequeryroomoutput.php', {
                        timeindicator: timeid,
                        activedate: date,
                        dayofweek: day,
                  }, function (calendarupdate) {
                        $('.calendarroomwrapper').html(calendarupdate);
                  });
            }, 200);
      };



      var width = 0;
      var height = 0;
      var r = 0;
      setSize();

      function setSize() {
            width = $(window).width();
            height = $(window).height();
            r = Math.sqrt(width * width + height * height);
      }
      $(window).resize(setSize);

      $(document).on('click', '#confirm', function () {
            if (type == 'new') {
                  console.log('confirmnew');
                  newbooking();
            } else {
                  console.log('confirmview');
                  clearbooking();
                  showcalendarviewcurbookings();
                  var date = $('#activedate').html();
                  var timeid = $("#currtimeid").html();
                  var day = $("#dayofweek").html();
                  output(timeid, day, date);
            }


            function tick() {
                  //adds success circle
                  $('.confirm').append($("<div id='circle'></div>"));
                  $('#circle').css({
                        "background-color": '#d32f2f',
                        position: 'absolute',
                        width: 0,
                        height: 0,
                        "border-radius": "50%",
                        "right": "200px",
                        "bottom": "30px",
                        //left: e.pageX,
                        //top: e.pageY,
                        'margin-left': 0,
                        'margin-top': 0,
                  });
                  //animate circle
                  $('#circle').animate({
                        width: (r * 2),
                        height: (r * 2),
                        'margin-right': -r,
                        'margin-bottom': -r
                  }, {
                        duration: 600,
                        easing: "easeInOutCubic",
                  });
                  $('.confirm').append($('<div class="tickwrapper transparent"><div id="tick"><i class="tick material-icons" style="text-align:center;line-height:55%;width:45%;height:55%;font-size:6em;">done</i></div></div>'));
                  $('.tickwrapper').append($('You did it'));
                  setTimeout(function () {
                        $(".tickwrapper").removeClass('transparent');
                  }, 500);
                  setTimeout(hideconfirm, 1200);
                  setTimeout(resetconfirm, 1400);
            }

            function newbookingfailure() {
                  $('.confirm').append($("<div id='circle'></div>"));
                  $('#circle').css({
                        "background-color": '#222',
                        position: 'absolute',
                        width: 0,
                        height: 0,
                        "border-radius": "50%",
                        "right": "200px",
                        "bottom": "30px",
                        //left: e.pageX,
                        //top: e.pageY,
                        'margin-left': 0,
                        'margin-top': 0,
                  });
                  $('#circle').animate({
                        width: (r * 2),
                        height: (r * 2),
                        'margin-right': -r,
                        'margin-bottom': -r
                  }, {
                        duration: 600,
                        easing: "easeInOutCubic",
                  });
                  $('.confirm').append('<div class="tickwrapper transparent confirmtext">Booking slot unavailable.</div>');
                  setTimeout(function () {
                        $(".tickwrapper").removeClass('transparent');
                  }, 500);
                  setTimeout(hideconfirm, 1200);
                  setTimeout(resetconfirm, 1400);
            }
            //when booking is checked and validation data has been accepted
            $(document).ajaxComplete(function (event, xhr, settings) {
                  if (settings.url === "../db/updatebookings.php") {
                        console.log(type + newbookingsuccess)
                        if (type == 'new' && newbookingsuccess == 'true') {
                              console.log('new booking confirmed');
                              tick();
                        } else {
                              newbookingfailure();
                        }

                  }
            })
            if (type == 'view') {
                  console.log('remove booking confirmed')
                  tick();
            }

      });


});*/