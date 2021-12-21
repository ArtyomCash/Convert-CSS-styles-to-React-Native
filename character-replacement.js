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


let str = '.inputWrite {\n' +
    '  display: block;\n' +
    '  background: #1f2127;\n' +
    '  color: #bcbfc5;\n' +
    '  width: 100%;\n' +
    '  border: 10px solid #40424c;\n' +
    '  padding: 10px;\n' +
    '  font-size: 16px;\n' +
    '}';

console.log(str);

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
        index === 0 ? item : item.slice(0)).join('borderWidth');

   /* let borderWidth = borderTwoStringFirsPart.split('borderWidth');
    let highlightDigit = borderWidth.map((item, index) =>
        index === 0 ? item : item.slice(0, 5)).join('borderWidth');*/

    // console.log('Первая часть', highlightDigit);

    let borderWidthSecond = borderTwoStringFirsPart.split('borderWidth:');
    let borderWidthAfterNumber = borderWidthSecond.map((item, index) =>
        index === 0 ? item : item.slice(5, 16)).join('borderBottomColor: ');

    console.log('Вторая часть', borderWidthAfterNumber);

    let lattice = borderWidthAfterNumber.split('#');
    let quotationLattice = lattice.map((item, index) =>
        index === 0 ? item : item.slice()).join('"#');

    // console.log('quotationLattice часть', quotationLattice);

    let borderWidthSecondSuper = borderWidthSecond.map((item, index) =>
        item.slice(4, 16) + item.slice(0)).join('borderBottomColor: ');
    console.log('borderWidthSecondSuper22222222', borderWidthSecondSuper);


    /*let borderTwoStringSecondPart = border.map((item, index) =>
        index === 0 ? item : item.slice(10, item.length)).join('borderWidth');

    let commonBorder = borderTwoStringFirsPart + borderTwoStringSecondPart;*/

    // перенести border в начало трансформации

    /*function colorwww () {
        let someColor = [];
        let color = borderTwoStringFirsPart.split(',');
        // color.filter(e => { if (e === 'borderWidth') someColor.push(e)});
        color.map((e, index) => {
            // if(index === 1) someColor.push(e);
            if(e === 'borderWidth') someColor.push(e);
        });

        console.log('color', color);

        console.log(someColor);
    }
    colorwww();*/

    let oldColor;
    // let borderColor = color.split('borderWidth');
    // console.log('borderColor<<<<<<<',borderColor);
    /*let borderColor = color.map((giveColor, index) =>
          if(giveColor)
           /!* console.log('giveColor>>>>>', giveColor)
                giveColor.split();*!/


    );*/

    // console.log('color>>>', color);
    /*let borderColor = color.map((item, index) =>
        index === 0 ? item : item.slice(0)).join('borderColor');*/

    return borderTwoStringFirsPart;

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

