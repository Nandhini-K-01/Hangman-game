const programmingLanguages = [
    'python', 
    'java', 
    'javascript', 
    'php', 
    'c', 
    'cobol', 
    'perl', 
    'pascal', 
    'lisp', 
    'fortran',
    'angular',
    'react',
    'node',
    'mysql',
    'mongo'
]

const randomWord = () =>{
    var index = Math.floor(Math.random() * programmingLanguages.length)
    return programmingLanguages[index];
}

export default randomWord;