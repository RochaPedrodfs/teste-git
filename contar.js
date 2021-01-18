function naoPareDeContarImparesAte(numero){
    let cont = []
    for (let i = 0; i < numero; i ++) {
        if (i%2==1) {
            cont.push(i)
        }
    }
    return cont
}

console.log(naoPareDeContarImparesAte(30))