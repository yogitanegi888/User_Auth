const jwtScreteKey = "123abc";
function checkAnagram(s1,s2){

    var y = s1.split("").sort().join("");
    var z = s2.split("").sort().join("");
  return y===z
}


module.exports.Jwt_Key = jwtScreteKey;
module.exports.checkAnagram= checkAnagram;
