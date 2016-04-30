$(window).load(init());

function init() {
  console.log("init");
  $("#button").click(function() {
    console.log("clicked");
    var text = "Sample text";
    send(text);
  });
}

function send(text) {
  console.log(text);
  var json = JSON.stringify({'text': text});
  
  $.ajax({
    type: 'POST',
    url: 'cgi/sample.cgi',
    contentType: 'application/json',
    data: json,
    success: function(data) {
      console.log(data);
      console.log(data.text);
      $('#result').empty();
      $('#result').val(data.text);
    }
  });
  
  return false;
}
