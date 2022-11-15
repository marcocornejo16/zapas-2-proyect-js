
const userOptionHTML = document.getElementById('user-options')

function checkUserLogin() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    userOptionHTML.innerHTML = '';
    if(user) {
      if(user.role === 'ADMIN_ROLE'){
        userOptionHTML.innerHTML = `
        <div class="nav-container">
        <li class='nav-link '>Bienvenido ${user.name}</li>
        <li class="nav-item">
        <a class="nav-link btn-admin" href="/pages/table-products.html">Admin Products</a>
        </li>
        </div>
      `
      }
        userOptionHTML.innerHTML += 
        `<li class="nav-item">
        <a class="nav-link btn-logout" href="#" onclick="logout()">Logout</a>
      </li>`
      
    } else {
        userOptionHTML.innerHTML = `<li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/pages/login.html">Login</a>
      </li>`

      
    }
}
checkUserLogin();


function logout() {
  setTimeout(function() {
    window.location.href='/index.html'
    localStorage.removeItem('currentUser');
    checkUserLogin()
}, 1000)
  }