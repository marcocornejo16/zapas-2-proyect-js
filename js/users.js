const adminUser = {
    name: `John Doe`,
    email: `johndoe@gmail.com`,
    password: `alfabeta`,
    active: true,
    role: `ADMIN_ROLE`
}

const usersOriginal = JSON.parse(localStorage.getItem('users')) || [];

console.log(usersOriginal)
if(usersOriginal.length === 0) {
    usersOriginal.push(adminUser);
    localStorage.setItem('users', JSON.stringify(usersOriginal))
}



const user = JSON.parse(localStorage.getItem('currentUser'));

const loginForm = document.querySelector('#login-form');
// Debería escuchar el evento submit
loginForm.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    // Obtener lo que el user puso en los campos
    const emailInput = loginForm.elements.email.value;
    const passwordInput = evt.target.elements.password.value;

// Verificar si existe un usuario con ese email
const user = usersOriginal.find((usr) => {
    if(usr.email === emailInput) {
        return true
    }
    else{
        swal('Error en el login', 'los datos ingresados no sson correctos', 'error');
    return
    }
});

if(user.active === false) {

}

if(user === undefined) {
    // A- Que no encuentre el correo
    swal('Error en el login', 'los datos ingresados no sson correctos', 'error');
    return
}


if(user.password === passwordInput) {

    
    swal('Login correcto!', `Bienvenido ${user.name}, Sera redireccinado al home`, 'success');
    localStorage.setItem('currentUser', JSON.stringify(user))

    setTimeout(function() {
        if(user.role === 'ADMIN_ROLE') {
            window.location.href = '/pages/table-products.html'
        } else{
            window.location.href = '/index.html'
        }
    }, 2000)
} else {

    swal('Error en el login', 'los datos ingresados no sson correctos', 'error');
    return
}


console.log(`User encontrado`, user)


})

