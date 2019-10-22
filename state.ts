interface State{
    order: Order
    
    cancelOrder(): void
    verifyPayments(): void
    shipOrder(): void

}

class Order{
    
    public currentState: State
    
    constructor() {

    }   
    public setState(state: State){
        this.currentState = state
    }

    public getState(): State{
        return this.currentState
    }
    
}   
