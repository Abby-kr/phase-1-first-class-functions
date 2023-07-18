function Spy(){
    return "Mercedes-Benz"
}
function receivesAFunction(Spy){
    Spy();
}
function returnsANamedFunction(){
    return function Spy(){
        return "Ferrari"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "Rolls-Royce"
    }
}