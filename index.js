function show(){
    let first=document.getElementById('f-name').value;
    let last=document.getElementById('l-name').value;
    let select=document.getElementById('select').value;
    document.getElementById('first_name').innerText=`${first}`;
    document.getElementById('last_name').innerText=`${last}`;
    document.getElementById('gender').innerText=`${select}`;
    let ans=document.querySelectorAll('.c-box');
    for(let i=0;i<ans.length;i++){
        if(ans[i].checked){
            let parent=document.getElementById('show-output');
            
            let last=document.createElement('p');
            last.innerText=`${ans[i].value}`;
            parent.appendChild(last);
        }
    }

}