export class User {
    public username: string
    private password: string
    private LOGIN_ATTEMPTS: number
    
    constructor(username:string="", password:string="") {
        this.username = username
        this.password = password
    }

    public User(username:string, password:string) {

    }
    public login(password:string):boolean {
        return
    }
    private validatePassword(password:string):boolean {
        if (password === this.password) {
            return true
        }
        else {
            return false
        }
    }
    incrementAttemps() {
        this.LOGIN_ATTEMPTS++
    }
    public getLoginAttempts(): number {
        return this.LOGIN_ATTEMPTS
    }
}
