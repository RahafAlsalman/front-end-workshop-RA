
$(document).ready(function(){
    const itemName=$('#product');
    const quantity=$('#quantity');
    const price=$('#price');
    const btn=$('#btn');
    let counter=1;
    
    btn.click(function(e){
        e.preventDefault();
        let n=  itemName.val();
        let q= quantity.val();
        let p= price.val();
        
        if(n=="" || q=="" || p==""){
            alert("please macke sure you chosse all thing")
            return;
        }
        let x=$('tbody').append(
            `<tr>
            <td>${counter}</td>
            <td>${n}</td>
            <td>${q}</td>
            <td>${p}</td>
            <td>${p*q}</td>
            <td></td>
            
            
            </tr>`
        );
     counter++
    
    });
});
