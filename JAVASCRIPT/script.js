let TextArea_length = document.getElementById('Text_Area').getAttribute('maxlength');

document.getElementById('Text_Area').addEventListener('keyup',function(){
    let str = document.getElementById('Text_Area').value;
    let len = str.length;

    TC = len;
    R = TextArea_length - len;

    let T_Character = document.querySelector('.T_Character span').textContent=TC;
    let Remaining = document.querySelector('.Remaining span').textContent=R;
});



