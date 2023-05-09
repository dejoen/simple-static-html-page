onload=()=>{
  moveText("Explore the world’s leading design portfolios")
  let button=document.getElementById("start-tutorial-button")
  let link=document.getElementById("click-link")
  link.onclick=()=>{
  
   link.setAttribute("href","/tutorial-1.html")
   let href= link.getAttribute("href")
 
  } 
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
    