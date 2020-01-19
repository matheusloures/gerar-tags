function gerarTag(tag, keyword){

    return tag+' '+keyword;

}

var arrayOfKeywords= ['treinar', 'testar', 'praticar'];
var keyword = 'inglês';
var keywords = arrayOfKeywords[0]+ ' '+ keyword+', ';
function gerarMultiplasTags(arrayOfKeywords)
{

    console.log(arrayOfKeywords.length)
    for(let i = 0;i<arrayOfKeywords.length-1;i++){
        keywords += arrayOfKeywords[i+1] += ' ' +keyword+', '
    }
    return keywords;

}
var a = gerarMultiplasTags(arrayOfKeywords);
console.log(a);
