import React from "react";
import Teaser from "../../../../Teaser";

export default class GreetingsMessage extends React.Component {
  render() {
    return (
      <>
        <h1>О приложении</h1>
        <p>
          Данный репозиторий служит демонстрацией компонентов WebCrossUI, а
          также может быть использован в качестве шаблона для других приложений.
        </p>
        <p>
          Данное оповещение несёт информативный характер и появляется всего 1
          раз.
        </p>
        <p>
          <Teaser />
        </p>
      </>
    );
  }
}
