/* 
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
*/
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    //return "dsfgdfgdfg";
     var str = userDate.split('/');
    
     if (str.length != 3){
     console.log('incorrect format');
     return "";
     }
    
    if(str[0].length == 1){
        str[0] = '0' + str[0];
    } 
    if (str[1].length == 1){
        str[1] = '0' + str[1];
    } 
    
    userDate = str[2] + str[0] + str[1];
    
    return userDate;
  }
  
  function formatDateBasic(userDate){
    let dateArr = [];
    let elem;
    
    elem = userDate.substring(10,6)
    dateArr.push(elem)
    elem = userDate.substring(3,5)
    dateArr.push(elem)
    elem = userDate.substring(2,0)
    dateArr.push(elem)
    userDate = dateArr[0] + dateArr[1] + dateArr[2];
    //console.log(dateArr)
    //return userDate;
  }

  function formatDateLoop(userDate){
    let begin =0, end = 0;
    let dateArr = [];

    for (let i = 0; i < userDate.length; i++){
        if (userDate[i] !== '/')
        end++
        
      else{
        dateArr.push(userDate.substring(begin, end))
        end++
        begin = end
                
      }
        if( end == userDate.length){
            dateArr.push(userDate.substring(end, begin))
        }
      //console.log(dateArr)        
    }  
    userDate = dateArr[2] + dateArr[1] + dateArr[0];
    return userDate  
  }
  //console.log(formatDateLoop("08/21/2014"));

  //console.log(formatDateBasic("12/31/2014"));

  //test for Date format function
  function test_formatDate(){
      //and for the rest of diff. input valid and invalid data
      //to prevent code duplication in test for each res/expVal, it's better to put in array of objects and go through array
     //like var testData = [{inpData: "", expData: ""}, {inpData: "12/31/1978", expData: "19781231"}, .....];
     //for(testData){ var res = formatDate(each_inp_data); compare with exp_data}
      var arrTestData = [
          {inpData: "", expRes: ""},
          {inpData: "asdasd", expRes: ""},
          {inpData: "12/31/1978", expRes: "19781231"},
          {inpData: "2/3/1978", expRes: "19780203"},
        ];
      for(var i in arrTestData){
          console.log(arrTestData[i]);
        var res = formatDate(arrTestData[i].inpData);
      
      if (res != arrTestData[i].expRes){
        console.log("error, unexpected res=", res, "inpVal=", arrTestData[i].inpData, ", explVal=", arrTestData[i].expRes);
      }else{
          console.log('test case passed');
      }
    }
    }

    //test_formatDate();
    var p = 'The 1 quick brown fox jumped over the lazy Dog. If the Dog reacted, was it really lazy?';
    //\w [a-z, A-Z]
    //\d [0-9]
    var regex = /dog/gi;
    
   // console.log(p.replace(regex, 'ferret'));
    /*
    create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue
    */
    let game = {};

    game.murder ="??";

    game['weapon'] = [
        {type: 'lasers', location: 'lab'}, 
        'dish soap', 
        'guns'
    ];

    game.name = [];
    game.name[0]='Miss Scarlet';
    game.name.push('Mr.Green') //push into nested property 'name'

/*
Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.
*/
function setup() {
    const remove = document.getElementsByClassName('remove');

    for (let i=0; i< remove.length; i++){
        remove[i].addEventListener('click', event => {
            event.target.parentElement.remove();
        });
    } 
  }
  
  // Example case. 
//   document.body.innerHTML = `
//   <div class="image">
//     <img src="https://goo.gl/kjzfbE" alt="First">
//     <button class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://goo.gl/d2JncW" alt="Second">
//     <button class="remove">X</button>
//   </div>`;
  
//   setup();
  
//   document.getElementsByClassName("remove")[0].click();
  //console.log(document.body.innerHTML);


  /*

  */

  function appendChildren(decorateDivFunction) {
    var allDivs = document.getElementsByTagName("div");
  
    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDivFunction(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }
  
//   // Example case. 
//   document.body.innerHTML = `
//   <div id="a">
//     <div id="b">
//     </div>
//   </div>`;
  
  //appendChildren(function(div) {});
  console.log(document.body.innerHTML);

  