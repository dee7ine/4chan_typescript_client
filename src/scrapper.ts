const PROJECT_NAME: string = 'redactle-open-source-clone';

const API_URL: string = "https://en.wikipedia.org/w/api.php";
const API_PARAMS: Map<string, string> = {
    "action": "query",
    "format": "json",
    "list": "random",
    "rnlimit": "5"
};
abstract class Params{

    common_words: Array<string> = ['the', 'at', 'there', 'some', 'my',
    'of', 'be', 'use', 'her', 'than',
    'and', 'this', 'an', 'would', 'first',
    'a', 'have', 'each', 'make', 'were',
    'to', 'from', 'which', 'like', 'been',
    'in', 'or', 'do', 'into', 'who', 'how',		
    'that', 'by', 'if', 'but', 'will', 'not',
    'up', 'other', 'what', 'more', 'for', 'on',
    'all', 'about', 'go', 'out', 'as', 'with',
    'then', 'no', 'may', 'so', 'such', 'despite', 
    'beneath', 'now', 'during', 'after', 'was', 
    'because', 'unlike', 'unless', 'through',
    'onto', 'when', 'unto', 'beyond', 'off',
    'since', 'along', 'against'];

    common_words_uppercase: Array<string> = this.common_words.map(function(x){ return x.toUpperCase(); }); 
    common_words_lowercase: Array<string> = this.common_words.map(function(x){ return x.toLowerCase(); });
    separators: Array<string> = [' ', '-', '.', ',', '(', ')', '[', ']', ':', '\n', '\t'];
    words: Array<string> = this.common_words.concat(this.common_words_lowercase, this.common_words_uppercase, this.separators);
}

class BaseWikiScrapper extends Params{
    article_title: string = '';
    article_content: string = '';
    
    constructor(article_title: string, article_content: string){
        super();
        this.article_title = article_title;
        this.article_content = article_content
    }
    
}

class WikiScrapper extends BaseWikiScrapper{

    filtered_content:string = '';

    constructor(article_content: string, article_title: string){
        super(article_content, article_title)

    }

}

console.log('compiled')
