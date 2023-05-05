function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts < 100) {
            attempts++;
            if(Math.random() < 0.5) {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if(headsCount === 5) {
            resolve(`${attempts} prova per "heads"`);
        } else {
            reject("Me shume se 100 prova");
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
// console.log( "When does this run now?" );
