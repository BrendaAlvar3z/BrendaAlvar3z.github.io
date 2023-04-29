let join = document.getElementsByClassName("sign-up");
let join2 = document.getElementsByClassName("sign-up-bigger");
console.log(join.length);

let modalContent = null;
let showModal = (event) => {
  
  event.preventDefault();
 
  modalContent = document.createElement('div');
  modalContent.innerHTML = `

  <div class="modal fade" id="sign-up-modal" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-title">Sign Up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="disclaimer">By clicking Sign Up, you are agreeing to our <a href="#">Terms</a>. Read our <a href="#">Privacy Policy</a> and <a href="#">Cookie Policy</a>.</p>
        <div class="container">
          <div class="row justify-content-center">
            <div class="column mb-2">
              <button class="modal-buttons bi bi-envelope-at">Continue with Email</button>
            </div>
            <div class="column mb-2">
              <button class="modal-buttons"></i>Continue with Google</button>
            </div>
            <div class="column mb-2">
              <button class="modal-buttons">Log in with Facebook</button>
            </div>
            <div class="column mb-2">
              <button class="modal-buttons">Log in using phone number</button>
            </div> 
        <a href="#">Trouble logging in?</a>
        <p class="app">Get our app!</p>
        
      </div>
    </div>
  </div>
  `;

  document.body.append(modalContent);

  let modal = new bootstrap.Modal(modalContent.querySelector('.modal'));
  modal.show();
}


for (let i = 0; i < join.length; i++){
    join[i].addEventListener('click', showModal);
}

for (let i = 0; i < join2.length; i++) {
  join2[i].addEventListener('click', showModal);
}