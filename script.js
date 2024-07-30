document.addEventListener('DOMContentLoaded', function(){
    //html kodundaki tagları id lerin yardımı ile js değişkenleri içerisine attık.
    const btn1 = document.querySelector('#Addbtn');
    const input = document.querySelector('#input_data');
    const ul = document.querySelector('#icerik_liste');
    const deleteButtonTemplate = document.querySelector('#deleteButtonTemplate').content;


    //submit butonu event ekledi.
    btn1.addEventListener('click',function(){
        //input taglı alandaki value yi değişken içine attık.
        const inputValue = input.value.trim();
        
        //eğer veri girilmezse birşey yapma.
        if (inputValue === '') return;

        //li taglı element oluşturduk.
        const li = document.createElement('li');
        li.textContent = inputValue;

        //removdebtn id li butonu deletebtn değişkeni içerisine attık.
        const deleteBtn = deleteButtonTemplate.cloneNode(true).querySelector('#Removebtn');
        deleteBtn.addEventListener('click',function(){
            ul.removeChild(li);
        })

        //deletebtn yi li içerisine ekledik.
        li.appendChild(deleteBtn);
        //li yi ul içerisine ekledik.
        ul.appendChild(li);

        //bütün işlemler bitince input alanındaki verileri sildik.
        input.value = '';
    })

})

console.log(localStorage);
console.log(sessionStorage);