onload=()=>{
  moveText("Explore the world’s leading design portfolios")
  
}

let moveText=(test)=>{
    let i=0
    let textView=document.getElementById('text-1-id')
    let speed=50
   
let count=()=>{
    
        if(i<test.length){
        textView.innerHTML+=test.charAt(i)
          i++
          setTimeout(count,speed)
        }
    
    }
   
   
    count()

}
    