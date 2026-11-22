/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let sentence = title.split(" ")

    for(let i=0;i<sentence.length;i++){
        let newWord = ""

        if(sentence[i].length > 2){
            for(let j=0;j<sentence[i].length;j++){
                if(j === 0){
                    newWord += sentence[i][j].toUpperCase()
                }else{
                    newWord += sentence[i][j].toLowerCase()
                }
            }
        }else{
            for(let j=0;j<sentence[i].length;j++){
                newWord += sentence[i][j].toLowerCase()
            }
        }
        sentence[i] = newWord
    }

    return sentence.join(" ")
    
};