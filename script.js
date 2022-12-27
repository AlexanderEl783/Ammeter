// кнопки 1 и 2
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');

const btnOn = document.getElementById('btn-on');
const btnOff = document.getElementById('btn-off');
const image = document.querySelector('.background-img');
const btnLaNull = document.getElementById('la-null');
const btnLbNull = document.getElementById('lb-null');
const btnLcNull = document.getElementById('lc-null');


// кнопка обнуления la
btnLaNull.addEventListener('click', function () {
    if (btnLaNull.classList.contains('slide')) {
        btnLaNull.classList.remove('slide');
    }
    else {
        // valueThree.innerHTML = "0.00";
        btnLaNull.classList.add('slide');
    }
    startAmper();
    arrCount();
    arrCountBlack()
    valueLaNull();
    valueLbNull();
    valueLcNull();
}
);

function valueLaNull() {
    if (btnLaNull.classList.contains('slide')) {
        valueThree.innerHTML = "0.00";
    };
};
// valueLaNull();

// кнопка обнуления lb
btnLbNull.addEventListener('click', function () {
    if (btnLbNull.classList.contains('slide')) {
        btnLbNull.classList.remove('slide');
    }
    else {
        // valueFour.innerHTML = "0.00";
        btnLbNull.classList.add('slide');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();

}
);

function valueLbNull() {
    if (btnLbNull.classList.contains('slide')) {
        valueFour.innerHTML = "0.00";
    };
};
// valueLbNull();

// кнопка обнуления lc
btnLcNull.addEventListener('click', function () {
    if (btnLcNull.classList.contains('slide')) {
        btnLcNull.classList.remove('slide');
    }
    else {
        // valueFive.innerHTML = "0.00";
        btnLcNull.classList.add('slide');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();

}
);

function valueLcNull() {
    if (btnLcNull.classList.contains('slide')) {
        valueFive.innerHTML = "0.00";
    };
};
// valueLcNull();

btnOne.addEventListener('click', function () {
    if (!btnOne.classList.contains('slide')) {
        btnOne.classList.add('slide');
        image.src = "images/1.jpg";
    }
    else if (btnTwo.classList.contains('slide') &&
        !btnThree.classList.contains('slide')) {
        image.src = "images/2.jpg";
    }
    else if (btnThree.classList.contains('slide') &&
        btnTwo.classList.contains('slide') &&
        !tumblr.classList.contains('power-on')) {
        image.src = "images/3.jpg";

    }
    else if (btnOne.classList.contains('slide') &&
        btnTwo.classList.contains('slide') &&
        btnThree.classList.contains('slide') &&
        tumblr.classList.contains('power-on')) {
        image.src = "images/on.jpg"
    }

    else {
        btnOne.classList.remove("slide");
        image.src = "images/0.jpg";
    }
});

btnTwo.addEventListener('click', function () {
    if (!btnTwo.classList.contains('slide') &&
        btnOne.classList.contains('slide')) {
        btnTwo.classList.add('slide');
        image.src = "images/2.jpg";
    }
    else if (
        btnOne.classList.contains('slide') &&
        !btnThree.classList.contains('slide')) {
        btnTwo.classList.remove("slide");
        image.src = "images/1.jpg";
    }
});

btnThree.addEventListener('click', function () {
    if (!btnThree.classList.contains('slide') &&
        btnTwo.classList.contains('slide') &&
        btnOne.classList.contains('slide')) {
        btnThree.classList.add('slide');
        image.src = "images/3.jpg";

    } else if (
        btnOne.classList.contains('slide') &&
        btnTwo.classList.contains('slide') &&
        !tumblr.classList.contains('power-on')) {
        btnThree.classList.remove("slide");
        image.src = "images/2.jpg";
    }
});

btnOn.addEventListener('click', function () {
    if (btnThree.classList.contains('slide')) {
        image.src = "images/on.jpg";
        tumblr.classList.add('power-on');
    }
});

btnOff.addEventListener('click', function () {
    if (tumblr.className.includes(downClass) &&
        btnThree.classList.contains('slide')) {
        image.src = "images/3.jpg";
        tumblr.classList.remove('power-on');
    };
});

// кнопка 3
const upClass = 'tumblr-on';
const downClass = 'tumblr-off';
const tumblr = document.querySelector('.tumblr');
const checkboxesLight = document.querySelector('.checkboxes-lights');

tumblr.addEventListener('click', function () {
    if (tumblr.className.includes('power-on')) {
        if (~tumblr.className.indexOf(downClass)) {
            tumblr.className = tumblr.className.replace(downClass, upClass);
            startAmper();
            amper.classList.remove('amper-hide');

            // перезагрузка всех лампочек при включении тумблера
            lOneOne.classList.remove('hide-light');
            lOneTwo.classList.remove('hide-light');
            lOneThree.classList.remove('hide-light');
            lOneFour.classList.remove('hide-light');
            lOneFive.classList.remove('hide-light');
            lTwoOne.classList.remove('hide-light');
            lTwoTwo.classList.remove('hide-light');
            lTwoThree.classList.remove('hide-light');
            lTwoFour.classList.remove('hide-light');
            lTwoFive.classList.remove('hide-light');
            lThreeOne.classList.remove('hide-light');
            lThreeTwo.classList.remove('hide-light');
            lThreeThree.classList.remove('hide-light');
            lThreeFour.classList.remove('hide-light');
            lThreeFive.classList.remove('hide-light');
        }
        else {
            tumblr.className = tumblr.className.replace(upClass, downClass);
            amper.classList.add('amper-hide');
            blackcableA.classList.add('hide-cable');
            blackcableB.classList.add('hide-cable');
            blackcableC.classList.add('hide-cable');
            redcableC.classList.add('hide-cable');
        };
        checkboxesLight.classList.toggle('show-lights');
    };
});

// checkboxes
const lOneOne = document.getElementById('l1-1');
const lOneTwo = document.getElementById('l1-2');
const lOneThree = document.getElementById('l1-3');
const lOneFour = document.getElementById('l1-4');
const lOneFive = document.getElementById('l1-5');
const lTwoOne = document.getElementById('l2-1');
const lTwoTwo = document.getElementById('l2-2');
const lTwoThree = document.getElementById('l2-3');
const lTwoFour = document.getElementById('l2-4');
const lTwoFive = document.getElementById('l2-5');
const lThreeOne = document.getElementById('l3-1');
const lThreeTwo = document.getElementById('l3-2');
const lThreeThree = document.getElementById('l3-3');
const lThreeFour = document.getElementById('l3-4');
const lThreeFive = document.getElementById('l3-5');

const bOneOne = document.getElementById('b1-1');
const bOneTwo = document.getElementById('b1-2');
const bOneThree = document.getElementById('b1-3');
const bOneFour = document.getElementById('b1-4');
const bOneFive = document.getElementById('b1-5');
const bTwoOne = document.getElementById('b2-1');
const bTwoTwo = document.getElementById('b2-2');
const bTwoThree = document.getElementById('b2-3');
const bTwoFour = document.getElementById('b2-4');
const bTwoFive = document.getElementById('b2-5');
const bThreeOne = document.getElementById('b3-1');
const bThreeTwo = document.getElementById('b3-2');
const bThreeThree = document.getElementById('b3-3');
const bThreeFour = document.getElementById('b3-4');
const bThreeFive = document.getElementById('b3-5');

// 1 ряд
bOneOne.addEventListener('click', function () {
    if (lOneOne.className.includes('hide-light')
    ) {
        lOneOne.classList.remove('hide-light');
    }
    else {
        lOneOne.classList.add('hide-light');
        lOneTwo.classList.add('hide-light');
        lOneThree.classList.add('hide-light');
        lOneFour.classList.add('hide-light');
        lOneFive.classList.add('hide-light');


    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bOneTwo.addEventListener('click', function () {
    if (lOneOne.className.includes('hide-light') ||
        lOneTwo.className.includes('hide-light')
    ) {
        lOneOne.classList.remove('hide-light');
        lOneTwo.classList.remove('hide-light');
    }
    else {
        lOneTwo.classList.add('hide-light');
        lOneThree.classList.add('hide-light');
        lOneFour.classList.add('hide-light');
        lOneFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bOneThree.addEventListener('click', function () {
    if (lOneOne.className.includes('hide-light') ||
        lOneTwo.className.includes('hide-light') ||
        lOneThree.className.includes('hide-light')
    ) {
        lOneOne.classList.remove('hide-light');
        lOneTwo.classList.remove('hide-light');
        lOneThree.classList.remove('hide-light');
    }
    else {
        lOneThree.classList.add('hide-light');
        lOneFour.classList.add('hide-light');
        lOneFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bOneFour.addEventListener('click', function () {
    if (lOneOne.className.includes('hide-light') ||
        lOneTwo.className.includes('hide-light') ||
        lOneThree.className.includes('hide-light') ||
        lOneFour.className.includes('hide-light')
    ) {
        lOneOne.classList.remove('hide-light');
        lOneTwo.classList.remove('hide-light');
        lOneThree.classList.remove('hide-light');
        lOneFour.classList.remove('hide-light');
    }
    else {
        lOneFour.classList.add('hide-light');
        lOneFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bOneFive.addEventListener('click', function () {
    if (lOneOne.className.includes('hide-light') ||
        lOneTwo.className.includes('hide-light') ||
        lOneThree.className.includes('hide-light') ||
        lOneFour.className.includes('hide-light') ||
        lOneFive.className.includes('hide-light')

    ) {
        lOneOne.classList.remove('hide-light');
        lOneTwo.classList.remove('hide-light');
        lOneThree.classList.remove('hide-light');
        lOneFour.classList.remove('hide-light');
        lOneFive.classList.remove('hide-light');
    }
    else {
        lOneFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});

// 2 ряд
bTwoOne.addEventListener('click', function () {
    if (lTwoOne.className.includes('hide-light')
    ) {
        lTwoOne.classList.remove('hide-light');
    }
    else {
        lTwoOne.classList.add('hide-light');
        lTwoTwo.classList.add('hide-light');
        lTwoThree.classList.add('hide-light');
        lTwoFour.classList.add('hide-light');
        lTwoFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bTwoTwo.addEventListener('click', function () {
    if (lTwoOne.className.includes('hide-light') ||
        lTwoTwo.className.includes('hide-light')
    ) {
        lTwoOne.classList.remove('hide-light');
        lTwoTwo.classList.remove('hide-light');
    }
    else {
        lTwoTwo.classList.add('hide-light');
        lTwoThree.classList.add('hide-light');
        lTwoFour.classList.add('hide-light');
        lTwoFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bTwoThree.addEventListener('click', function () {
    if (lTwoOne.className.includes('hide-light') ||
        lTwoTwo.className.includes('hide-light') ||
        lTwoThree.className.includes('hide-light')
    ) {
        lTwoOne.classList.remove('hide-light');
        lTwoTwo.classList.remove('hide-light');
        lTwoThree.classList.remove('hide-light');
    }
    else {
        lTwoThree.classList.add('hide-light');
        lTwoFour.classList.add('hide-light');
        lTwoFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bTwoFour.addEventListener('click', function () {
    if (lTwoOne.className.includes('hide-light') ||
        lTwoTwo.className.includes('hide-light') ||
        lTwoThree.className.includes('hide-light') ||
        lTwoFour.className.includes('hide-light')
    ) {
        lTwoOne.classList.remove('hide-light');
        lTwoTwo.classList.remove('hide-light');
        lTwoThree.classList.remove('hide-light');
        lTwoFour.classList.remove('hide-light');
    }
    else {
        lTwoFour.classList.add('hide-light');
        lTwoFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bTwoFive.addEventListener('click', function () {
    if (lTwoOne.className.includes('hide-light') ||
        lTwoTwo.className.includes('hide-light') ||
        lTwoThree.className.includes('hide-light') ||
        lTwoFour.className.includes('hide-light') ||
        lTwoFive.className.includes('hide-light')
    ) {
        lTwoOne.classList.remove('hide-light');
        lTwoTwo.classList.remove('hide-light');
        lTwoThree.classList.remove('hide-light');
        lTwoFour.classList.remove('hide-light');
        lTwoFive.classList.remove('hide-light');
    }
    else {
        lTwoFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});

// 3 ряд
bThreeOne.addEventListener('click', function () {
    if (lThreeOne.className.includes('hide-light')
    ) {
        lThreeOne.classList.remove('hide-light');
    }
    else {
        lThreeOne.classList.add('hide-light');
        lThreeTwo.classList.add('hide-light');
        lThreeThree.classList.add('hide-light');
        lThreeFour.classList.add('hide-light');
        lThreeFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bThreeTwo.addEventListener('click', function () {
    if (lThreeOne.className.includes('hide-light') ||
        lThreeTwo.className.includes('hide-light')
    ) {
        lThreeOne.classList.remove('hide-light');
        lThreeTwo.classList.remove('hide-light');
    }
    else {
        lThreeTwo.classList.add('hide-light');
        lThreeThree.classList.add('hide-light');
        lThreeFour.classList.add('hide-light');
        lThreeFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bThreeThree.addEventListener('click', function () {
    if (lThreeOne.className.includes('hide-light') ||
        lThreeTwo.className.includes('hide-light') ||
        lThreeThree.className.includes('hide-light')
    ) {
        lThreeOne.classList.remove('hide-light');
        lThreeTwo.classList.remove('hide-light');
        lThreeThree.classList.remove('hide-light');
    }
    else {
        lThreeThree.classList.add('hide-light');
        lThreeFour.classList.add('hide-light');
        lThreeFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bThreeFour.addEventListener('click', function () {
    if (lThreeOne.className.includes('hide-light') ||
        lThreeTwo.className.includes('hide-light') ||
        lThreeThree.className.includes('hide-light') ||
        lThreeFour.className.includes('hide-light')
    ) {
        lThreeOne.classList.remove('hide-light');
        lThreeTwo.classList.remove('hide-light');
        lThreeThree.classList.remove('hide-light');
        lThreeFour.classList.remove('hide-light');
    }
    else {
        lThreeFour.classList.add('hide-light');
        lThreeFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});
bThreeFive.addEventListener('click', function () {
    if (lThreeOne.className.includes('hide-light') ||
        lThreeTwo.className.includes('hide-light') ||
        lThreeThree.className.includes('hide-light') ||
        lThreeFour.className.includes('hide-light') ||
        lThreeFive.className.includes('hide-light')
    ) {
        lThreeOne.classList.remove('hide-light');
        lThreeTwo.classList.remove('hide-light');
        lThreeThree.classList.remove('hide-light');
        lThreeFour.classList.remove('hide-light');
        lThreeFive.classList.remove('hide-light');
    }
    else {
        lThreeFive.classList.add('hide-light');
    }
    startAmper();
    arrCount();
    arrCountBlack();
    valueLaNull();
    valueLbNull();
    valueLcNull();
    reduceW();
    plusLc();
});

// амперметры
const amper = document.querySelector('.amper-div')
const amperOne = document.getElementById('amper1');
const amperTwo = document.getElementById('amper2');
const amperThree = document.getElementById('amper3');
const amperFour = document.getElementById('amper4');
const amperFive = document.getElementById('amper5');
const amperSix = document.getElementById('amper6');
const amperSeven = document.getElementById('amper7');
const amperEight = document.getElementById('amper8');
const amperZero = document.getElementById('amper0');

const yellow = document.querySelectorAll('.yellow');
const valueOne = document.getElementById('value1');
const valueTwo = document.getElementById('value2');
const valueThree = document.getElementById('value3');
const valueFour = document.getElementById('value4');
const valueFive = document.getElementById('value5');
const valueSix = document.getElementById('value6');
const valueSeven = document.getElementById('value7');
const valueEight = document.getElementById('value8');
const valueZero = document.getElementById('value0');

function startAmper() {
    valueZero.innerHTML = "0.00";
    valueOne.innerHTML = "1.40";
    valueTwo.innerHTML = "12.30";
    valueThree.innerHTML = "0.90";
    valueFour.innerHTML = "0.90";
    valueFive.innerHTML = "0.30";
    valueSix.innerHTML = "0.35";
    valueSeven.innerHTML = "0.36";
    valueEight.innerHTML = "0.36";
    valueLaNull();
    valueLbNull();
    valueLcNull();

};

function offAmper() {
    valueOne.innerHTML = "0.00";
    valueTwo.innerHTML = "0.00";
    valueThree.innerHTML = "0.00";
    valueFour.innerHTML = "0.00";
    valueFive.innerHTML = "0.00";
    valueSix.innerHTML = "0.00";
    valueSeven.innerHTML = "0.00";
    valueEight.innerHTML = "0.00";
};

const arrLight = [lOneOne, lOneTwo, lOneThree, lOneFour, lOneFive, lTwoOne, lTwoTwo, lTwoThree, lTwoFour, lTwoFive, lThreeOne, lThreeTwo, lThreeThree, lThreeFour, lThreeFive];

const arrYellow = [valueTwo, valueThree, valueFour, valueFive, valueSix, valueSeven, valueEight];

function arrCount() {

    let i;
    for (i = 0; i < arrLight.length; i++) {
        if (arrLight[i].className.includes('hide-light')) {
            let y;
            for (y = 0; y < arrYellow.length; y++) {
                arrYellow[y].innerHTML = (Number(arrYellow[y].innerHTML) + Number(0.25)).toFixed(2);
            };
        };
    };
    reduceW();
};

function arrCountBlack() {
    let i;
    for (i = 0; i < arrLight.length; i++) {
        if (arrLight[i].className.includes('hide-light')) {
            valueOne.innerHTML = (Number(valueOne.innerHTML) + Number(0.1)).toFixed(2);
        };
    };
    reduceW();

};

// red cable
const redBtnC = document.getElementById('red-c');
const redcableC = document.getElementById('red-cable-c');

redBtnC.addEventListener('click', function () {
    if (redcableC.classList.contains('hide-cable') && tumblr.classList.contains('power-on')) {
        redcableC.classList.remove('hide-cable');
    }
    else {
        redcableC.classList.add('hide-cable');
        startAmper();
        arrCount();
        arrCountBlack();

    }
    plusLc();
    reduceW();
    valueLaNull();
    valueLbNull();
    valueLcNull();
});

// black cable
const blackBtnA = document.getElementById('black-a');
const blackBtnB = document.getElementById('black-b');
const blackBtnC = document.getElementById('black-c');
const blackcableA = document.getElementById('black-cable-a');
const blackcableB = document.getElementById('black-cable-b');
const blackcableC = document.getElementById('black-cable-c');

blackBtnA.addEventListener('click', function () {
    if (blackcableA.classList.contains('hide-cable') && tumblr.classList.contains('power-on')) {
        blackcableA.classList.remove('hide-cable');
        blackcableB.classList.add('hide-cable');
        blackcableC.classList.add('hide-cable');
    }
    else {
        blackcableA.classList.add('hide-cable');
        startAmper();
        arrCount();
        arrCountBlack();

    }
    plusLc();
    reduceW();
    valueLaNull();
    valueLbNull();
    valueLcNull();
});

blackBtnB.addEventListener('click', function () {
    if (blackcableB.classList.contains('hide-cable') && tumblr.classList.contains('power-on')) {
        blackcableB.classList.remove('hide-cable');
        blackcableA.classList.add('hide-cable');
        blackcableC.classList.add('hide-cable');
    }
    else {
        blackcableB.classList.add('hide-cable');
        startAmper();
        arrCount();
        arrCountBlack();
    }
    plusLc();
    reduceW();
    valueLaNull();
    valueLbNull();
    valueLcNull();
});

blackBtnC.addEventListener('click', function () {
    if (blackcableC.classList.contains('hide-cable') && tumblr.classList.contains('power-on')) {
        blackcableC.classList.remove('hide-cable');
        blackcableB.classList.add('hide-cable');
        blackcableA.classList.add('hide-cable');
    }
    else {
        blackcableC.classList.add('hide-cable');
        startAmper();
        arrCount();
        arrCountBlack();

    };
    plusLc();
    reduceW();
    valueLaNull();
    valueLbNull();
    valueLcNull();

});

function plusLc() {
    if (!redcableC.classList.contains('hide-cable') && !blackcableC.classList.contains('hide-cable')) {
        valueZero.innerHTML = Number(233).toFixed(2);
    }

    else if (!redcableC.classList.contains('hide-cable') && !blackcableB.classList.contains('hide-cable')) {
        valueZero.innerHTML = Number(231).toFixed(2);
    }

    else if (!redcableC.classList.contains('hide-cable') && !blackcableA.classList.contains('hide-cable')) {
        valueZero.innerHTML = Number(229).toFixed(2);
    }

    else {
        valueZero.innerHTML = "0.00";
    }
};

function hideAllCables() {
    blackcableA.classList.add('hide-cable');
    blackcableB.classList.add('hide-cable');
    blackcableC.classList.add('hide-cable');
    redcableC.classList.add('hide-cable');
};

function reduceW() {
    if (!redcableC.classList.contains('hide-cable') && !blackcableA.classList.contains('hide-cable') ||
        !redcableC.classList.contains('hide-cable') && !blackcableB.classList.contains('hide-cable') ||
        !redcableC.classList.contains('hide-cable') && !blackcableC.classList.contains('hide-cable')
    ) {
        valueOne.innerHTML = "0.00";
        valueTwo.innerHTML = "0.00";
    }
}