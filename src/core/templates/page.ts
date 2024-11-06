// здесь мы будем создавать заготовку (шаблон) для страниц, у которых оличается только название класса и заголовок
//  мы это  делаем с целью избежать копирование кода (поэтому будем создавать дочерние классы)

abstract class Page {
  protected container: HTMLElement;
  static TextObject = {};

  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = text;
    return headerTitle;
  }

  protected createHeaderDescription(text: string) {
    const description = document.createElement("p");
    description.innerText = text;
    return description;
  }

  render() {
    return this.container;
  }
}

export default Page;
