// This is an unfinished hot mess

$('#dynamic-test').on('show.bs.modal', function (event) {
    var thumbImage = new Array();
    thumbImage[0] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/1-800x800.png';
    thumbImage[1] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/2-800x800.png';
    thumbImage[2] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/3-800x800.png';
    thumbImage[3] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/4-800x800.png';
    thumbImage[4] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/5-800x800.png';
    thumbImage[5] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/6-800x800.png';
    thumbImage[5] = 'https://cdn.sdmurphy.net/images/dev/gallery-8x8/7-800x800.png';
  
    var button = $(event.relatedTarget)
    // var imageSrc = "https://cdn.sdmurphy.net/images/dev/gallery-8x8/7-800x800.png"
    var replacementText = "Dynamically inserted body text."
    var replacementH4 = 'Dynamically inserted H4 text.'
  
    var modal = $(this)
    // $('.modal-image').attr("src", imageSrc);
    modal.find('.modal-title').text('Dynamically inserted title.');
    modal.find('.modal-text').text(replacementText);
    modal.find('.sub-title').text(replacementH4);  
    for (i=0;i<thumbImage.length;i++) {
      modal.find('.thumbs').append(
        '<span class="the-thumbs"><img src=\" ' + thumbImage[i] + '\" height="100" width="100"></span>'
      );
    }  
  })
  
  document.getElementById("modal2").onclick = function () {
    alert('hello!'); 
  };
  
  // version 2, trying to build the modal from scratch, but getting a lot of weird cloning crap going on
  $('#myDynModal').on('show.bs.modal', function (event) {
      var modalContent = document.createElement('div'); // create content div
      modalContent.className = 'modal-content'; // give it modal class
      modalContent.id = 'modalContent'; // give it an id
      document.getElementById('modalDialog').appendChild(modalContent); // insert into modal-dialog
  
      var modalHeader = document.createElement('div'); // create header div
      modalHeader.className = 'modal-header'; // give it modal class
      modalHeader.id = 'modalHeader'; // give it an id
      document.getElementById('modalContent').appendChild(modalHeader); // insert into content
  
      var modalTitle = document.createElement('h5'); // create header h5
      modalTitle.className = 'modal-title'; // give it modal class
      modalTitle.id = 'modalTitle'; // give it an id
      modalTitle.innerHTML = 'Modal Title';
      document.getElementById('modalHeader').appendChild(modalTitle); // insert into header
  
      var modalHeaderClose = document.createElement('button'); // create close button
      modalHeaderClose.className = 'close'; // give it modal class
      modalHeaderClose.id = 'modalHeaderClose'; // give it an id
      modalHeaderClose.setAttribute("data-dismiss", "modal");
      modalHeaderClose.setAttribute("aria-label", "Close");
      document.getElementById('modalHeader').appendChild(modalHeaderClose); // insert into header
  
      var modalCloseX = document.createElement('span'); // create span with 'x'
      modalCloseX.id = 'modalCloseX'; // give it an id
      modalCloseX.setAttribute("aria-hidden", "true");
      modalCloseX.innerHTML="&times;";
      document.getElementById('modalHeaderClose').appendChild(modalCloseX); // insert into header
  
      var modalInner = document.createElement('div'); // create body div
      modalInner.className = 'modal-body'; // give it modal class
      modalInner.id = 'modalInner'; // give it an id
      
      modalInner.innerHTML = 'Dynamically created modal-content, then modal-body with this text.'; // add some random text
      document.getElementById('modalContent').appendChild(modalInner);           // insert modal-body into modal-content
     
  });
  
  
  // $('#myDynModal').on('show.bs.modal', function (event) {
  //     var button = $(event.relatedTarget);
  //     var modal = $(this);
  //     var wrapper = document.getElementById9('myDynModal');
  //     var modalInner = document.createElement("div");
  //     modalInner.setAttribute("class", "modal-body" );
  
  //     modalInner.appendChild(document.createTextNode('Chuck Norris can slam a revolving door.'));
  
  // });
  
  // modal.find()
  
  // document.getElementById("dynModal3").onCLick = function() {
  //   var modal = $(this);
  //   var wrapper = document.getElementById9('myDynModal');
  //   var modalInner = document.createElement("div");
  //   }
  
  
    // var childDiv = "This is child div content";
  
    // modal.find()
    // document.getElementById('myDynModal').appendChild(childDiv);
    // element.appendChild(document.createTextNode('Chuck Norris can eat rice with one chop stick.'));
    // document.getElementbyId('lc').appendChild(element);
  
  // document.getElementById("dynModal3").onclick = function () {
  // var modalInner = document.createElement("div");
  // modalInner.setAttribute("class", "modal-dialog" );
  //   var modal3Title = "This is Modal 3 Title";
  //   var modal3Test = "This is the Modal 3 Text";
  //   modalInner.innerHTML = 
  //       '<div class="modal-content">' +
  //       '<div class="modal-header">' +
  //         '<h5 class="modal-title">'+ modal3Title +'</h5>' +
  //         '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
  //          '<span aria-hidden="true">&times;</span>' +
  //         '</button>' +
  //       '</div>' +
  //       '<div class="modal-body">' +
  //         '<p>'+ modal3Test +'</p>' +
  //       '</div>' +
  //       '<div class="modal-footer">' +
  //         '<button type="button" class="btn btn-primary">Save changes</button>' +
  //         '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
  //       '</div>' +
  //     '</div>';
  
  // };