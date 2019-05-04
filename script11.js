 var game=1;
var a=new Array(3);
for(var i=0;i<3;i++)
{
    a[i]=new Array(3);
}
function clickbtn(btn)
{
   if(game==1)
   {
  document.getElementById(btn).value="x";
  
  document.getElementById(btn).disabled="disable";
  game=game-1;
  arrayx(btn);
  winner();
  
   }
   else
   {
       document.getElementById(btn).value="o";
       
       document.getElementById(btn).disabled="disable";
       game=game+1;
       arrayo(btn);
        winner();
       

   
      
   }
}
function arrayx(btn)
{
   var ba=document.getElementById(btn);
   if(ba.id=="1")
      a[0][0]="x";
      else if(ba.id=="2")
                a[0][1]="x";
                else if(ba.id=="3")
                         a[0][2]="x";
                         else if(ba.id=="4")
                                   a[1][0]="x";
                                   else if(ba.id=="5")
                                             a[1][1]="x";
                                             else if(ba.id=="6")
                                                        a[1][2]="x";
                                                        else if(ba.id=="7")
                                                                   a[2][0]="x";
                                                                   else if(ba.id=="8")
                                                                              a[2][1]="x";
                                                                              else if(ba.id=="9")
                                                                                         a[2][2]="x"; 
}

function arrayo(btn)
{
   var b=document.getElementById(btn);
   if(b.id=="1")
      a[0][0]="o";
      else if(b.id=="2")
                a[0][1]="o";
                else if(b.id=="3")
                         a[0][2]="o";
                         else if(b.id=="4")
                                   a[1][0]="o";
                                   else if(b.id=="5")
                                             a[1][1]="o";
                                             else if(b.id=="6")
                                                        a[1][2]="o";
                                                        else if(b.id=="7")
                                                                   a[2][0]="o";
                                                                   else if(b.id=="8")
                                                                              a[2][1]="o";
                                                                              else if(b.id=="9")
                                                                                         a[2][2]="o"; 
}
var check=0,flag=0;


function winner()
{ check=check+1;
   //alert(check);

   for(var i=0;i<3;i++)
       {
           for(var j=0,m=2,k=1;j<3;j++,k++)
                {
                    if(a[i][j]=="x" && a[i][j+1]=="x" && a[i][j+2]=="x")
                       {
                          
                             document.getElementById("res").innerHTML="x won the game !!";
                             flag=1;
                             disable();
                       }
                       else if(a[i][j]=="o" && a[i][j+1]=="o" && a[i][j+2]=="o")
                               {
                                   document.getElementById("res").innerHTML="o won the game !!";
                                   flag=1;
                                   disable();
                               }
                   if(a[i][j]=="x" && a[i+1][j]=="x" && a[i+2][j]=="x")
                       {
                           document.getElementById("res").innerHTML="x won the game !!";
                           flag=1;
                           disable();
                       }
                       else if(a[i][j]=="o" && a[i+1][j]=="o" && a[i+2][j]=="o")
                       {
                           document.getElementById("res").innerHTML="o won the game !!";
                           flag=1;
                           disable();
                       }
                   if(k==1)
                   {
                      if(a[i][i]=="x" && a[i+1][i+1]=="x" && a[i+2][i+2]=="x")
                           {
                               document.getElementById("res").innerHTML="x won the game !!";
                               flag=1;
                               disable();
                           }
                       else if(a[i][i]=="o" && a[i+1][i+1]=="o" && a[i+2][i+2]=="o")
                           {
                               document.getElementById("res").innerHTML="o won the game !!";
                               flag=1;
                               disable();
                           }

                       
                       if(a[j][m]=="x" && a[j+1][m-1]=="x" && a[j+2][m-2]=="x")
                           {
                               document.getElementById("res").innerHTML="x won the game !!";
                               flag=1;
                               disable();
                           }
                       else  
                       if(a[j][m]=="o" && a[j+1][m-1]=="o" && a[j+2][m-2]=="o")
                           {
                               document.getElementById("res").innerHTML="o won the game !!";
                               flag=1;
                               disable();
                           }
                       }
                   
                   }
     if(check==9 && flag==0)
       {
        document.getElementById("res").innerHTML="its a tie, play again!!";
                               disable();
       }
       }
      
     
            
   }
   function disable()
   {
       for(var i=1;i<10;i++)
       {
           document.getElementById(i).disabled="disable";
       }
      
   }
   function reset()
   {
       for(var i=1;i<10;i++)
       {
           document.getElementById(i).value="";
       }
 
   document.getElementById("res").innerHTML="";
   for(var i=1;i<10;i++)
       {
           document.getElementById(i).disabled="";
       }

   
   for(i=0;i<3;i++)
   {
       for(j=0;j<3;j++)
       {
           a[i][j]="";
       }
   }
   game=1;
   check=0;
   flag=0;
   }  
