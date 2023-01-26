function fetchitems(): string[] {
  let items = ["a", "b", "c"];
  return items;
}

let result = fetchitems();
console.log(result);

function fetchItems(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
