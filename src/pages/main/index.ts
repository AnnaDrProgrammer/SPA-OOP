// Main- тут рисуем главную страницу

import Page from "../../core/templates/page";

class MainPage extends Page {
  static TextObject = {
    MainTitle: "Main Page",
    MainDescription: "Main description",
  }; //static - позволяет получать доступ к какому-то полю без создания инстанса класса

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    const description = this.createHeaderDescription(
      MainPage.TextObject.MainDescription
    );

    this.container.append(title);
    this.container.append(description);

    return this.container;
  }
}

export default MainPage;
