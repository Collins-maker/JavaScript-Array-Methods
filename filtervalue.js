function filter_array_values(arr) {
    // Use the filter method to remove false values
    const filteredArray = arr.filter((element) => {
      return Boolean(element);
    });
  
    return filteredArray;
  }
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
  