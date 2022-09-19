$(document).ready(function () {
  console.log("doc is ready");

 

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    

    let userName = $("#userName").val();
    console.log("user name = ", userName);

    console.log("name length f/n = ", nameLength(userName));

    console.log("you clicked the button");
 
    $("#coolNameFactsOutput").html(getSpiritAnimal(userName));

  
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>";

  console.log("initialized them coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {


  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "the first letter of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;

  return "the last letter of your name is " + name[lastIndex];
}

function reverseName(name) {
 

  let arrName = name.split();

  revName = arrName.reverse();
}

function getSpiritAnimal(x) {
 

  if (x.length == 3) {
    return "Spirit of the rat";
  } else if (x.length  == 4) {
    return "Spirit of the ox";
  } 
    else if (x.length == 5) {
      return "Spirit of the snake"
    }
  else if (x.length  == 6) {
    return "Spirit of the tiger";
  } 
    else if (x.length == 7) {
      return "Spirit of the monkey"
    }
  else if (x.length  == 8) {
    return "Spirit of the goat";
  } 
    else if (x.length == 9) {
      return "Spirit of the pig"
    }
  else if (x.length  == 10) {
    return "Spirit of the dog";
  } 
    else if (x.length > 10) {
      return "Spirit of the dragon!!!"
    }
  else {
    return "Why is your name so short you are just a germ";
  }
}