// http://www.codewars.com/kata/5375f921003bf62192000746

//My Solution
function forEach(collection, callback) {
    for(var iterator = 0; iterator < collection.length; iterator++) {
        // console.log("collection: " + iterator + " " + collection[iterator]);
        callback(collection[iterator]);
    }
}

function print(single) {
    console.log(single);
}

function splitString(string) {
    var stringStash = string.split(" ");
    // console.log("splitString: " + stringStash);
    return stringStash;
}

function isAlphaOrParen(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

function splitWord(word) {
    var wordSplitter = word.split("");
    var builder = [];
    var partial = [];
    var k = 0;
    var l = 0;
    for(var i = 0; i < wordSplitter.length; i++) {
        //forEach(wordSplitter[i],print);
        if(!isAlphaOrParen(wordSplitter[i])) {
            if(l > 0) {
                builder[k] = abbreviateWord(partial.join(""));
                k++;
                l = 0;
            }
            builder[k] = wordSplitter[i];
            k++;
        } else {
            partial[l] = wordSplitter[i];
            // console.log(partial[l])
            l++;
        }
    }
    if(l > 0) {
        //forEach(partial.join(""),print);
        builder[k] = abbreviateWord(partial.join(""));
        k++;
    }
    return builder.join("");
}

function abbreviateWord(word) {
    var wordStash = word.split("");
    // console.log("wordStash: " + wordStash);
    var container = [];
    if(word.length >= 4) {
        container.push(word[0]);
        container.push(word.length - 2);
        container.push(word[word.length - 1]);
        return container.join("");
    } else {
        return word;
    }
}

function abbreviate(string) {
    var stringSplit = splitString(string);
    var answer = [];
    for(var i = 0; i < stringSplit.length; i++) {
        answer[i] = splitWord(stringSplit[i]);
    }
    return answer.join(" ");
}

// Best Practice
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}