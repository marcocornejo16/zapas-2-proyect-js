const tableBody = document.getElementById("table-body");
const registroUsuario = document.querySelector("#registroUsuario");

const user = JSON.parse(localStorage.getItem('currentUser')) || [];

registroUsuario.addEventListener("submit", function(evt) {

    if(!registroUsuario) {
        return;
    }

    evt.preventDefault();

        const usersElements = evt.target.elements
        console.dir(usersElements)
        let newUsers = {
            name: usersElements.name.value,
            lastName: usersElements.lastName.value,
            email: usersElements.email.value,
            city: usersElements.city.value,
            country: usersElements.country.value,
            password:usersElements.password.value
            
    }
    console.log('Se ha cargado un nuevo usuario')
    console.dir(newUsers)

    user.push(newUsers)

    registroUsuario.reset()
    localStorage.setItem('currentUser', JSON.stringify(user))
})




