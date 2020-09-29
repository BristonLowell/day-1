let buttonCount = 0


function coolButton(){
  
  buttonCount ++;
  if (buttonCount == 1){
    document.getElementById("helloWorld").classList.add("hidden")
  }
  else if (buttonCount == 2){
    document.getElementById("coolSubtitle").classList.add("hidden")
  }
  else if (buttonCount == 3){
    document.getElementById("likeSports").classList.remove("hidden")
  }
  else if (buttonCount == 4){
    document.getElementById("likeVideoGames").classList.remove("hidden")
  }
  else{
    document.getElementById("likeBoardGames").classList.remove("hidden")
  }
}