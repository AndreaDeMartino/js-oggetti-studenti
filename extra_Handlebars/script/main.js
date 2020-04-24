$(document).ready(function () {

  /****************************************************
  * TASK DAY 1
  ****************************************************/

  // OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
  // Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
  // Ricordo il link alla documentazione per download/cdn e referenza sull’utilizzo base:
  // https://handlebarsjs.com/installation/
  // Buon lavoro ragazzi e benvenuti nel mondo degli oggetti JS e di handlebars! :top:

  /****************************************************
  * TASK DAY 2
  ****************************************************/

  // Estendere la chat fatta con handlebars inserendo i messaggi iniziali, visibili al caricamento della pagina, generati da un array di oggetti.
  // Gli oggetti conterranno proprietà come testo e orario
  // Usiamo Handlebars per la generazione anche di questi messaggi, come avete fatto ieri per i messaggi inseriti dall’utente

  var sendButton = $('.send-button');
  var chatBox = $('.chat-main');

  // Creation of the messages at the beginning (TASK 2)
  startMessages();
  
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

  // FUNCTION: Start messages on chat-main (TASK DAY 2)
  function startMessages(){
    // Handlebars Config
    var source = $("#message-template").html();
    var template = Handlebars.compile(source);

    // Creation of array of objects "message"
    var messages = [
      {
        text: 'Ciao',
        time: '10:40',
        type: 'sent'
      },
      {
        text: 'Che si dice?',
        time: '20:10',
        type: 'received'
      },
      {
        text: 'Tutto bene',
        time: '22:37',
        type: 'sent'
      }
    ];

    for (var i = 0; i < messages.length; i++){
      // Get html template with dinamic values
      var html = template(messages[i]);
      // Add html template on chat container
      chatBox.append(html);
      scrollChat();
    }
  }

  // FUNCTION: Add User and Bot Messages
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
    scrollChat()
  }

  // FUNCTION: Chat scroll
  function scrollChat(){
    // Scroll on inserting a new message:
    // 1) Get the height of the message chat container
    var pixelScroll = $('.chat-main').height();
    // 2) Scroll on the container that has the overflow-Y
    $('.chat-main').scrollTop(pixelScroll);
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