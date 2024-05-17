function convert(){
    let cm=Number(document.getElementById("input").value)
    let inch=cm/2.54
    let output=document.getElementById("output")
    output.innerHTML=inch.toFixed(2)+" inches"
}