import mathjs, {multiply, add, divide, subtract, dot, sum, sqrt} from 'mathjs';
import random from 'random-array';


export class Adadeltajs {
    constructor(X, y) {
        this.X = X;
        this.y = y;
        let isvalid = validateData(X, y);
        if(!isvalid) {
            throw "Input data is invalid";
        }
    }

    //iters provides number of iterations.Or run until converge
    //rho, epsilon - params for model
    fit(iters=100, rho=0.001, eps=0.001) {
        let converge = false;
        let theta0 = random(-0.001, 0.001).oned(this.X.length);
        let m = this.X.length;
        let accupdates = 0;
        let offset = 0.0001;
        while(!converge) {
            let value = multiply(this.X, theta0);
            let loss = subtract(value, this.y);
            let J = sum(multiply(loss, loss));
            let grad = divide(multiply(this.X, loss), m);
            let accgrad = add(multiply(grad, rho), multiply(multiply(grad, grad), (1 - rho)));
            let step = multiply(-1, multiply(divide(sqrt(accupdates + offset), sqrt(accgrad + offset)), grad));
            accupdates = add(multiply(accupdates, rho), multiply((1 + rho), multiply(step, step)))
            theta0 = add(theta0, step);
            
        }

        return theta0;
    }
}


let validateData = function(X, y) {
    if(X.length == 0 || y.length == 0) {
        return false;
    }

    return true;
}
