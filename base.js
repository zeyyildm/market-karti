class base {
  sale = 20;
  constructor(firstName, lastName, card, products) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.card = card;
      this.products = products;
  }

  count() {
      let odenecekTutar = 0;

      if (this.urunleriKontrolEt(this.products)) {
          if (this.card) {
              this.products.forEach(product => {
                  odenecekTutar += product.price * (100 - this.sale) / 100;
              });
          } else {
              this.products.forEach(product => {
                  odenecekTutar += product.price;
              });
          }
      } else {
          alert("En az bir ürün satın almalısınız!");
      }

      return odenecekTutar;
  }

  urunleriKontrolEt(products) {
      return products != null && products.length > 0;
  }
}

