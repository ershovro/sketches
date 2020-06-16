let regex, str, replaceWith;

/*
* Выбрать повторяющиеся слова, которые находятся непосредственно друг под другом.
* Предполагается использование моноширинного шрифта. Строки длиннее 32х символов переносятся.
* Пример:
* This sentence is pretty long and
* this sentence is also a test — Да
* */
regex = /\b(\w+)\b.{33}\1/smg;
str = "\nThis sentence is pretty long and \nthis sentence is also a test\n";
console.log(regex.test(str));

/*
* Убрать повторяющиеся пробелы и знаки табуляции,
* оставить по одному пробелу между словами и по два между предложениями.
* Пример:
* Extra       spaces => Extra spaces
* Sentence.      Sentence. => Sentence.  Sentence.
* */

str = ' Extra       spaces';
regex = /(?:(\.)(?=(\s)))?\s+/g;
str.replace(regex, '$1$2 ')

/*
* Преобразовать текст, обрамленный в звездочки, в курсив.
* Не трогать текст в двойных звездочках (жирный).
* *this is italic*" => <em>this is italic</em>
* **bold text (not italic)** => **bold text (not italic)**
* */

str = '*italic text **with bold** *';
regex = /(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g;
replaceWith = '<em>$1</em>';
console.log(str.replace(regex, replaceWith));
str = '*italic* **bold** *italic* **bold**';
console.log(str.replace(regex, replaceWith));