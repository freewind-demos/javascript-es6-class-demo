class User {
    constructor(name) {
        this.name = name
    }

    hello() {
        console.log('Hello, ' + this.name)
    }
}

const user = new User('Freewind')
user.hello()