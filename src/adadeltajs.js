import mathjs, {multiply, add, divide, subtract, dot, sum} from 'mathjs';


export class Adadeltajs {
    constructor(X, y) {
        this.X = X;
        this.y = y;
    }

    fit(iters=100, rho=0.001) {
        let converge = false;
        while(!converge) {
            let value = multiply(this.X, theta0);
            let loss = subtract(value, this.y);
            let J = sum(multiply(loss, loss));
            let grad = divide(multiply(this.X, loss), m);
            let accgrad = add(multiply(grad, rho), multiply(multiply(grad, grad), (1 - rho)));
        }
    }
}
