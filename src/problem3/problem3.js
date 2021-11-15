class Datasource {
  async getPrices() {
    const response = await fetch("https://static.ngnrs.io/test/prices");

    return new Promise((resolve, reject) => {
      if (response) {
        // return the data
        resolve(response.json());
      } else {
        // return an error
        reject("error");
      }
    });
  }
}
