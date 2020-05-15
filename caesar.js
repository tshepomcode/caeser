const caesar = function (str, key) {

    var result_str = "";
  var arr = [];
  var new_str_codepoint = 0;
  
  for (var i = 0; i < str.length; i++) {
    // verify that character string is a letter
    // console.log(`Is "${str[i]}" a letter? ${is_letter(str[i])}`);
  
    var char_upper = (str[i].toUpperCase() === str[i]) ? true : false;
    // console.log(`str[${i}] = ${str[i]} and uppercase is ${char_upper}`);
  
  
    if (is_letter(str[i])) {
      // console.log("This is a letter");
      // new_str_codepoint = str[i].codePointAt(0) + key;
      // debugger;
      if (char_upper) {
        new_str_codepoint = get_upper_char(key, str[i]);
      } else {
        new_str_codepoint = get_lower_char(key, str[i]);
      }
  
      result_str += String.fromCodePoint(new_str_codepoint);
      // console.log("The new string is : ", result_str);
      // var str_temp = 3;
    } else {
      // console.log("This is NOT a letter");
      result_str += str[i];
      // console.log("The new string is : ", result_str);
    }
    // check whether character is in upper or lower case
  
  }

  return result_str;

}

const is_letter = function (str) {
  var codepoint_str = str.codePointAt(0);

  if ((codepoint_str >= 65 && codepoint_str <= 90 ||
    codepoint_str >= 97 && codepoint_str <= 122)) {
    return true;
  } else {
    return false;
  }

}

const get_upper_char = function (key, str) {
  var str_min = 65;
  var str_max = 90;
  var str_codepoint = str.codePointAt(0);
  var new_str_codepoint = 0;
  new_str_codepoint = str_codepoint + key;

  if (key > 0) {
    do {
      // new_str_codepoint = str_codepoint + key;

      if (new_str_codepoint > str_max) {
        new_str_codepoint = (str_min - 1) + (new_str_codepoint - str_max);
      }

    } while (new_str_codepoint > str_max);
  } else {
    do {
      // new_str_codepoint = str_codepoint + key;
      if (new_str_codepoint < str_min) {
        new_str_codepoint = (str_max + 1) + (new_str_codepoint - str_min);
      }
    } while(new_str_codepoint < str_min);
    // console.log("Do the opposite of above!\n");
  }


  return new_str_codepoint
}

const get_lower_char = function (key, str) {
  var str_min = 97;
  var str_max = 122;
  var str_codepoint = str.codePointAt(0);
  var new_str_codepoint = 0;
  new_str_codepoint = str_codepoint + key;

  if (key > 0) {
    do {
      

      if (new_str_codepoint > str_max) {
        new_str_codepoint = (str_min - 1) + (new_str_codepoint - str_max);
      }

    } while (new_str_codepoint > str_max);
  } else {
    do {
      // new_str_codepoint = str_codepoint + key;
      if (new_str_codepoint < str_min) {
        new_str_codepoint = (str_max + 1) + (new_str_codepoint - str_min);
      }
    } while(new_str_codepoint < str_min);
    // console.log("Do the opposite of above!\n");
  }


  return new_str_codepoint;
}


module.exports = caesar
