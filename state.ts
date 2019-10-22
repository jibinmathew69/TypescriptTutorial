interface State{
    order: Order
    
    cancelOrder(): void
    verifyPayments(): void
    shipOrder(): void

}

class Order{
    
    constructor() {

    }   
}