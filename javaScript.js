
const pinGenerator = document.getElementById('pin-generator');
pinGenerator.addEventListener('click', function () {
    const pin = (Math.random() * 10000 + '').split('.')[0];
    document.getElementById('generate-pin-field').value = pin;
})

function enterNumberId(id) {
    const calBtnNumber = document.getElementById(id);
    calBtnNumber.addEventListener('click', function () {
        inputIntoField(id);
    })
}

function inputIntoField(id) {
    const number = document.getElementById(id).innerText;
    const getFieldValue = document.getElementById('pin-match-field').value;
    totalNumber = getFieldValue + number;
    document.getElementById('pin-match-field').value = totalNumber;
}

//clear pin
const clearField = document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('pin-match-field').value = '';
})

//delete a pin from pin field
const deletePin = document.getElementById('delete').addEventListener('click', function () {
    const fieldValue = document.getElementById('pin-match-field').value;
    const editedPin = fieldValue.slice(0, -1)
    document.getElementById('pin-match-field').value = editedPin;
})

//submit pin
const submitBtn = document.getElementById('submit-btn').addEventListener('click', function () {
    const pin1 = document.getElementById('generate-pin-field').value;
    const pin2 = document.getElementById('pin-match-field').value;
    if (pin1 === pin2) {
        document.getElementById('pin-match').style.display = 'block';
        document.getElementById('pin-not-match').style.display = 'none';
    }
    else {

        document.getElementById('pin-not-match').style.display = 'block';
        document.getElementById('pin-match').style.display = 'none';

        //action control
        const tryNumber = document.getElementById('try').innerText;
        const tryDecrese = tryNumber - 1;
        document.getElementById('notify-action').style.display='block';
        if (tryDecrese < 1) {
            
            countdoun(tryDecrese);
            document.getElementById('notify-action').style.display='none';
        }
        console.log(tryDecrese);
        document.getElementById('try').innerText = tryDecrese;
    }

})

//countdown

function countdoun(id) {
    let time=15;
    setInterval(updateCount,1000);
    const countPlace= document.getElementById('submit-btn');
    function updateCount(){
        countPlace.innerHTML='00 : '+time;
        time--;
        document.querySelector('#submit-btn').disabled = true;
        if(time<0){
            document.querySelector('#submit-btn').disabled = false;
            location.reload();
        }
    }
}

enterNumberId('0');
enterNumberId('1');
enterNumberId('2');
enterNumberId('3');
enterNumberId('4');
enterNumberId('5');
enterNumberId('6');
enterNumberId('7');
enterNumberId('8');
enterNumberId('9');



