/*let description = 'ПрИвЕт';

function words(description) {
    let newWord = [];
    let word = description.split('');
    console.log('word>>', word);
    word.filter((e) => {
        if (e === 'р') {
            e = 'R';
            newWord.push(e);
        }
    });

    // console.log(newWord.join(''));
    let ttt = newWord.join('');
    return console.log(ttt);
}

words(description);*/

// let str = 'my-short-string';
/*let str = '.boxWide {\n' +
    '  display: flex;\n' +
    '  flex-direction: column;\n' +
    '  border-bottom: 2px solid #40424c;\n' +
    '  position: relative;\n' +
    '  padding: 0px 10px;\n' +
    '  padding-bottom: 5px;\n' +
    '}';*/


let str = '.changeBtn {\n' +
    '  padding: 10px;\n' +
    '  width: 100%;\n' +
    '  background-color: #1f2127;\n' +
    '  border-radius: 3px;\n' +
    '  border: 3px solid #c49426;\n' +
    '  font-size: 24px;\n' +
    '  text-transform: uppercase;\n' +
    '  color: #c49426;\n' +
    '  cursor: pointer;\n' +
    '}';

// console.log(str);

function camelize(str) {
    let newStr = str.split('-');
    let camelCase = newStr.map((item, index) =>
        index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');

    let comma = camelCase.replace(/\;/g, "\,");

    let px = comma.split('px');
    let withoutPx = px.map((item, index) =>
        index === 0 ? item : item[0] + item.slice(1)).join('');

    let string = withoutPx.split(':');
    let upperQuotationMark = string.map((item, index) =>
        index === 0 ? item : item.slice(1)).join(': "');

    let stringSecond = upperQuotationMark.split(',');
    let upperQuotationMarkSecond = stringSecond.map((item, index) =>
        index === 0 ? item : item.slice(0)).join('",');

    let oneQuote = upperQuotationMarkSecond.replace(/\"/g, "\'");

    let solid = oneQuote.split('solid');
    let solidDelite = solid.map((item, index) =>
        index === 0 ? item : item.slice(1)).join('');

    let border = solidDelite.split('border');
    let borderTwoStringFirsPart = border.map((item, index) =>
                             item.slice(0)).join('borderWidth: \n' +
                                                 '  borderColor');

    let borderColorSplit = borderTwoStringFirsPart.split('borderColor');
    let borderWidth = borderColorSplit.map((item, index) =>
                      item.substr(3, 2));

    let superNumber = [];
    let numberWidth = borderWidth.map((val) => {
        if(!!+val) superNumber.push(`"${+val}",`);
    });

    let borderWidthNumber = borderTwoStringFirsPart.split('borderWidth:');
    let widthBorder = borderWidthNumber.map(e =>
        e.slice(0)).join('borderWidth: ' + superNumber);

    /*let findLattice = widthBorder.split('borderColor:');
    let deleteLattice = findLattice.map(e =>
        e[1] + e.slice(5)).join('borderColor: ');*/

    let findBorderColor = widthBorder.split('borderColor:');
    let deleteBorderColor = findBorderColor.map((item, index) =>
        index === 0 ? item : item.slice(5)).join('borderColor: "');

    let oneQuoteSecond = deleteBorderColor.replace(/\"/g, "\'");

    return oneQuoteSecond;

}
console.log(camelize(str));


/*let ary = [8,1,2,3,4,5,6,7];
console.log(ary);
console.log(ary.push(ary.shift()));  // results in [1, 2, 3, 4, 5, 6, 7, 8]


let a = ["a","b","c"];
console.log(a);
let b = a.shift();
let r = a.push(b);
console.log(r);*/


/*let a = "[{'column1':'value0','column2':'value1','column3':'value2'}]";
let b = a.replace(/\'/g, "\"");
console.log(b);*/

/*
function key() {
    document.addEventListener("keydown", (e) => {
        console.log(e.keyCode);
    })
}

key();*/

/*
let link = document.createElement('a');
link.href = 'data:text/plain;charset=UTF-8,' + encodeURIComponent("Привет");
link.innerHtml = 'Open the text file';
//set default action on link to force download, and set default filename:
link.download = 'some file name.txt';

//now put the link somewhere in the html document:
document.body.appendChild(link);*/

