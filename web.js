document.addEventListener('DOMContentLoaded',()=>{
    
    document.querySelector('#btn_enviar').addEventListener ("click",()=>{
        const mensaje=document.querySelector('input').value
        window.location=`https://api.whatsapp.com/send?phone=573136162380&text=${mensaje}`
        
    })
    
})