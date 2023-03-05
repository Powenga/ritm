import "./Steps.scss";

import iconBox from "../../../images/icon-box.svg";
import iconBrowser from "../../../images/icon-browser.svg";
import iconDevices from "../../../images/icon-devices.svg";
import iconInternet from "../../../images/icon-internet.svg";

const Steps = () => {
  return (
    <div className="steps">
      <h3 className="section__subtitle steps__title">
        Взаимодействие с нами состоит из следующих шагов
      </h3>
      <ul className="section__list steps__list">
        <li className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">1</p>
          </div>

          <p className="advantage__item-title steps__item-title">
            Постановка задачи
          </p>
          <p className="advantage__item-description steps__item-description">
            Обсуждаем с вами ваш бизнес-процесс и задачу. Общаемся и узнаем
            потребности.
          </p>
        </li>
        <li className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">2</p>
          </div>
          <p className="advantage__item-title steps__item-title">
            Техническое задание
          </p>
          <p className="advantage__item-description steps__item-description">
            Интерпретируем вашу потребность в техническое задание, выбираем стек
            технологий.
          </p>
        </li>
        <li className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">3</p>
          </div>
          <p className="advantage__item-title steps__item-title">
            Коммерческое предложение
          </p>
          <p className="advantage__item-description steps__item-description">
            Обсуждаем и корректируем элементы будущего решения, формируем
            коммерческое предложение.
          </p>
        </li>
        <li className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">4</p>
          </div>
          <p className="advantage__item-title steps__item-title">
            Заключение договора
          </p>
          <p className="advantage__item-description steps__item-description">
            Ведём переговоры о сумме и сроках выполнения работ. Заключаем
            договор и начинаем сотрудничество.
          </p>
        </li>
        <li className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">5</p>
          </div>
          <p className="advantage__item-title steps__item-title">
            Запуск продукта
          </p>
          <p className="advantage__item-description steps__item-description">
            Завершаем работы и демонстрируем финальный результат, запускаем ваш
            новый продукт.
          </p>
        </li>
        <li className="section__item steps__item">
          <div className="steps__item-number-wrapper">
            <p className="steps__item-number">6</p>
          </div>
          <p className="advantage__item-title steps__item-title">
            Поддержка продукта
          </p>
          <p className="advantage__item-description steps__item-description">
            Обучаем ваших сотрудников и поддертваем работу в течение всей жизни
            экосистемы.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Steps;