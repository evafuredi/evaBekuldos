let textarea=document.querySelector('textarea');
    let value=document.querySelector('#karakterszam');
    let remainingCount=document.querySelector('#maradek');
    let visszaSzamlalo=0;
    
    function szamlalo(){
        let text = textarea.value;
        let textlength = textarea.value.length;
        value.innerText=`${textlength}`;
        visszaSzamlalo=textarea.value.length;
        maradek.innerText= 1000 - visszaSzamlalo;
    }

       copyText.addEventListener("click",kimasol)
        function kimasol(){
       
        let jelolo=document.querySelector("#copyText");
        textarea.select();
        textarea.setSelectionRange(0, 1000);
        navigator.clipboard.writeText(textarea.value);
    
      }
