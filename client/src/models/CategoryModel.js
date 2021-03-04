export class CategoryModel {
  constructor(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.items = [];
  }
  setItems(items) {
    items.forEach((item) => {
      this.items.push(item);
    });
  }
}
