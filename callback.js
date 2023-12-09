// function declaration
function formatName(name) {
  const result = name.toUpperCase(); // zharifah => ZHARIFAH
  return result;
}

function getName(name, callFormatName) {
  const result = callFormatName(name);
  console.log(result);
}

getName("zharifah", formatName);
