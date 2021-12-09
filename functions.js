const StringLength = (string) => {
  return string.length;
}

// Reverse string
const reverseString = (string) => {
    return string.split('').reverse().join('');
}

// Capitalize string
const capitalizeFirstChar = (string) => {
    return string.charAt(0).toUpperCase() + string.splice(1);
}

module.exports = { StringLength, reverseString, capitalizeFirstChar };