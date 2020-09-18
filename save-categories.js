function saveCategories(categories, newCategory) {
  categories.push(newCategory);
  console.log(categories)
  categories.sort();
  console.log(categories)
  return categories.map(x => x);
}
console.log(saveCategories(['Cat 3', 'Cat 1'],'Cat 2'), )


exports.saveCategories = saveCategories;
