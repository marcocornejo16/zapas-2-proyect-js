const userOptionHTML = document.getElementById('user-options')

function checkUserLogin() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    userOptionHTML.innerHTML = '';
    if(user) {
        userOptionHTML.innerHTML = `
        <li class='text-dark'>Bienvenido ${user.name}</li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick="logout()">Logout</a>
      </li>`
      if(user.role === 'ADMIN_ROLE') {
        userOptionHTML.innerHTML += `<li class="nav-item">
        <a class="nav-link" href="/pages/table-products.html">Admin Products</a>
      </li>`
      }
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