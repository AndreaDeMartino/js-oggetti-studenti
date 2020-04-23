$(document).ready(function () {

  // OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
  // Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
  // Ricordo il link alla documentazione per download/cdn e referenza sull’utilizzo base:
  // https://handlebarsjs.com/installation/
  // Buon lavoro ragazzi e benvenuti nel mondo degli oggetti JS e di handlebars! :top:

  var sendButton = $('.send-button');
  var chatBox = $('.chat-main');


  // Insert message on button click
  sendButton.click(function (){
    addMessage('sent');
    setTimeout(addMessage, 2000 , 'received')
  })

  // Insert message on enter button on keyboard
  $('#insert-message').keyup(function(e){
    if (e.which == 13){
      addMessage('sent');
      setTimeout(addMessage, 2000 , 'received')
    }
  })


  /****************************************************
  * FUNCTIONS
  ****************************************************/

  function addMessage(type){
    var messageText = $('#insert-message').val().trim();

    // Handlebars Config
    var source = $("#message-template").html();
    var template = Handlebars.compile(source);

    // Creation of Object "message"
    var message = {
      text: messageText,
      time: timeStamp(),
      type: type
    }
    
    // Text for received messages
    if (type == 'received'){
      message.text = 'ok';
    } else{
      $('#insert-message').val(' ');
    }

    // Get html template with dinamic values
    var html = template(message);

    // Add html template on chat container and clean inputbox
    chatBox.append(html);
  }


  // FUNCTION: Get and print Time
  function timeStamp(){
    var time = new Date()
    var hour = timeFix( time.getHours() )
    var min = timeFix( time.getMinutes() );
    var finalDate = hour + ':' + min;
    return finalDate;
  }


  // FUNCTION: Fix Time with 0 on single numbers
  function timeFix(date){
    if (date < 10){
      date = ('0' + date);    
    }
    return date;
  }

  

});