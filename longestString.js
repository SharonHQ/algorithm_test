//This function returns the longest word in a list

const rokket = list => {
  const sortList = list.sort((a, b) => b.length - a.length);
  return sortList[0];
}

const list = ['best', 'company', 'ever']
console.log(rokket(list)) // this outputs 'company'