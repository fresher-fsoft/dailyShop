import { Observable, of } from "rxjs";
import { promise } from 'protractor';

export class MockAuthService{
    user = {
        email:'user1@gmail.com',
        password:'123456',
        role: 0 // 0: user, 1: admin.
    }
    login(username: string, password: string): Observable<any>{
        if(username === this.user.email && password === this.user.password)
            return of({
                status: 1, // 1: succesfully, -1: error(The user credentials were incorrect)
                message: 'login succesfully',
                data: this.user
            });
        else{
            return of({
                status: -1,
                message: 'The user credentials were incorrect',
            })
        }
    }
}