let calcular = () =>{
    let celsius = window.document.querySelector('#txtCel').value
    let fahrenheit = window.document.querySelector('#txtFah')

    if(celsius == null || celsius ==0)
    {
        fahrenheit.style.background = 'Black'
        fahrenheit.value = ''
        fahrenheit.value = 'ERROR'
        fahrenheit.style.color = 'Green'
        window.alert("O campo celsius está com um valor inválido!")
    }
    else{
        fahrenheit.style.color = 'Black'
        fahrenheit.style.background = 'white'
        let formula = Number((1.8 * celsius) + 32).toFixed(1)
        fahrenheit.value = `${formula}°F`
    }
}

let Close = () =>{
    window.alert("BYE BYE")
    window.close()
}