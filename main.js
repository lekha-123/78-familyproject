var images = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXfwwNtT_kpI3fjdxWUtH4U52kdlfoeo5nA&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XL2Tphx1TyQPEOH_0i0tJHPtVDjTdK4PWw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisBvRs2te2dg0eUBETHF0pLafDBa7mE_q_A&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSt75WAwOUHkn-LT_ll5koiVCjXfJyk3oN9Q&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnEaTPafVndBoGMMnzX2M1RshIvX6kvHCAw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgIGh1RBUeDybeW6y98w6rKQ7UfwhSLGoUg&usqp=CAU"
  ];
  var namesarray=[
      "father","mother","sister", "brother", "grandma","grandpa"
  ]
  var i = 0;
  function nextslide() { 
   
     if(i == 5)
       {
         i=0;
       }
     
      document.getElementById("img1").src = images[i];
      document.getElementById("names").innerHTML=namesarray[i];
    i++;
   
  }
  
  
  