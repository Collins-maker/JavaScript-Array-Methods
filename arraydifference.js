function difference(arr1, arr2) {
    // Convert the arrays to sets for easier comparison
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    // Find the elements that are in set1 but not in set2
    const diff =[...set1].filter((element) => !set2.has(element));
    const diff2 =[...set2].filter((element) => !set1.has(element));
  
    // Return the difference as an array
    let difference=(`${diff} is in first array but not in the second
    ${diff2} is in the second array but not in first`);
    return difference;

  }

  // console.log(difference(["mum", "dad", "son", "bro"], ["mum", "dad", "son"]));
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  