function generateDocId(nomeProduto){
    console.log(nomeProduto)

    return nomeProduto.replace(/ /g,'')
} 

module.exports = {generateDocId};