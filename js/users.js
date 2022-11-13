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

const users = [
    {
        name: `John Doe`,
        email: `johndoe@gmail.com`,
        password: `alfabeta`,
        active: true,
        role: `ADMIN_ROLE`
    },
    {
        name: `Jose Perez`,
        email: `joseperez@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`
    },
    {
        name: `Usuario Inactivo`,
        email: `inactivo@gmail.com`,
        password: `1234`,
        active: false,
        role: `USER_ROLE`
    },
    {
        name: `Maria Gimenez`,
        email: `mariagimenez@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`

    },
    {
        name: `Eusebio Cobos`,
        email: `eusebio@gmail.com`,
        password: `alfabeta`,
        active: false,
        role: `USER_ROLE`
    },
    {
        name: `Usuario Registrado`,
        email: `usuario@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`
    }
];

const user = JSON.parse(localStorage.getItem('currentUser'));

const loginForm = document.querySelector('#login-form');
// Debería escuchar el evento submit
loginForm.addEventListener('submit', (evt)=> {
    // if(loginForm.checkValidity() === false) return    // ** Si usamos el validador de boostrap y aplicamos el "novalidate" al html del form
    evt.preventDefault();
    // Obtener lo que el user puso en los campos
    const emailInput = loginForm.elements.email.value;
    const passwordInput = evt.target.elements.password.value;

// Verificar si existe un usuario con ese email
const user = users.find((usr) => {
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
        } else {
            window.location.href = '/index.html'
        }
    }, 2000)
} else {

    swal('Error en el login', 'los datos ingresados no sson correctos', 'error');
    return
}


console.log(`User encontrado`, user)


})

