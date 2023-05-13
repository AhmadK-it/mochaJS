export default class User {

    constructor(id, lastname, firstname) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        }

    fullname = () => `${this.firstname} ${this.lastname}`;
    
}

// const user = new User(1, 'Josh', 'Jack')

// console.log(user.fullname());