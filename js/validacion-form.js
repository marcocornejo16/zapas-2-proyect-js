const tableBody = document.getElementById("table-body");
const registroUsuario = document.querySelector("#registroUsuario");

const users = JSON.parse(localStorage.getItem('users')) || [];

registroUsuario.addEventListener("submit", function(evt) {

    if(!registroUsuario) {
        return;
    }

    evt.preventDefault();

        const usersElements = evt.target.elements
        console.dir(usersElements)
        let newUser = {
            name: usersElements.name.value,
            lastName: usersElements.lastName.value,
            email: usersElements.email.value,
            city: usersElements.city.value,
            country: usersElements.country.value,
            password:usersElements.password.value
            
    }
    console.log('Se ha cargado un nuevo usuario')
    console.dir(newUser)

    const emailExist = checkIfUserExist(newUser.email)
    if(emailExist) {
        // swal con mensaje de alerta
        swal('Error al registrarse', 'El email ingresado ya existe', 'error');
        
    } else {
        swal('¡Bienvenido!', 'Usted se ha registrado con exito', 'success');

        setTimeout(function (){
            window.location.href='/pages/login.html'
        },2000)
        
        
        // Antes de guardar
        users.push(newUser)
        registroUsuario.reset()
        localStorage.setItem('users', JSON.stringify(users))
    }

    
})

function checkIfUserExist(email) {
    return users.some(usr => usr.email === email);
}




