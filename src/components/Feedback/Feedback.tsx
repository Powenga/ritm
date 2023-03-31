import React, { KeyboardEvent, SyntheticEvent, useRef } from 'react';
import { PatternFormat } from 'react-number-format';
import useForm from '../../utils/hooks/useForm';
import Input from '../Inputs/Input/Input';
import TextArea from '../Inputs/TextArea/TextArea';
import Line from '../Line/Line';
import { ReactComponent as FeedbackLine } from '../../images/feedback-line.svg';

import './Feedback.scss';
import {
  INPUT_EMAIL_ATTRIBUTES,
  INPUT_MOBILE_ATTRIBUTES,
  INPUT_NAME_ATTRIBUTES,
  InputNames
} from './constants';
import { TDataFeedback } from '../../types/types';
import { ENTER_KEY, SPACE_KEY } from '../../utils/constants';

type PropTypes = {
  onSubmit: (dataForm: TDataFeedback) => void;
  isPreloaderEnabled: boolean;
  onPolicyClick: (event: SyntheticEvent) => void;
};

const Feedback: React.FC<PropTypes> = ({ onSubmit, isPreloaderEnabled, onPolicyClick }) => {
  const formRef = useRef(null);
  const form = useForm(formRef);

  const preloader = isPreloaderEnabled && (
    <span className="feedback__form__preloader">Запрос отправляется...</span>
  );
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const dataForm: TDataFeedback = {
      policy: false,
      userEmail: '',
      userMessage: '',
      userName: '',
      userPhone: '',
      ...form.values,
      ...form.checkboxValues
    };

    onSubmit(dataForm);
    form.resetForm();
  };

  const handlePolicyKeydown = (event: KeyboardEvent) => {
    if (![SPACE_KEY, ENTER_KEY].includes(event.key)) {
      return;
    }
    event.preventDefault();
    onPolicyClick(event);
  };

  return (
    <section id="feedback" className="section feedback">
      <div className="section__wrapper feedback__wrapper">
        <Line lineSVG={FeedbackLine} classLineSVG="feedback__line" />
        <h2 className="section__title">Форма обратной связи</h2>
        <h3 className="section__subtitle feedback__subtitle">Получить консультацию</h3>
        <p className="feedback__description">
          Если вы хотите больше узнать о нас, наших технологиях и опыте работы, обсудить конкретную
          задачу или просто получить консультацию, напишите нам через форму обратной связи
        </p>
        <form noValidate ref={formRef} className="feedback__form" onSubmit={handleSubmit}>
          <Input
            name={InputNames.USER_NAME}
            value={form.values[InputNames.USER_NAME] || ''}
            placeholderText="Имя"
            typeInput="text"
            errors={form.errors}
            validateAttributes={INPUT_NAME_ATTRIBUTES}
            onChange={form.handleChange}
          />
          <PatternFormat
            format="+7 (###) ###-##-##"
            mask="_"
            value={form.values[InputNames.USER_PHONE] || ''}
            customInput={Input}
            onChange={form.handleChange}
            placeholderText="Телефон"
            errors={form.errors}
            validateAttributes={INPUT_MOBILE_ATTRIBUTES}
            name={InputNames.USER_PHONE}
            typeInput="tel"
          />
          <Input
            name={InputNames.USER_EMAIL}
            value={form.values[InputNames.USER_EMAIL] || ''}
            placeholderText="Email"
            typeInput="email"
            errors={form.errors}
            validateAttributes={INPUT_EMAIL_ATTRIBUTES}
            onChange={form.handleChange}
          />
          <TextArea
            name={InputNames.USER_MESSAGE}
            value={form.values[InputNames.USER_MESSAGE] || ''}
            placeholderText="Сообщение"
            errors={form.errors}
            onChange={form.handleChange}
          />
          <label htmlFor={InputNames.POLICY} className="feedback__form__checkbox">
            <input
              id={InputNames.POLICY}
              name={InputNames.POLICY}
              checked={form.checkboxValues[InputNames.POLICY] || false}
              type="checkbox"
              className="feedback__form__checkbox-input"
              onChange={form.handleChange}
              required
            />
            <span className="feedback__form__checkbox-text">
              Нажимая на кнопку, вы даете согласие на обработку{' '}
              <span
                onClick={onPolicyClick}
                onKeyDown={handlePolicyKeydown}
                tabIndex={0}
                role="button"
                className="feedback__form__checkbox-policy"
              >
                персональных данных.
              </span>
            </span>
          </label>
          {preloader}
          {!isPreloaderEnabled && (
            <button
              className="button feedback__form__button-submit"
              type="submit"
              disabled={!form.isValid}
            >
              Отправить вопрос
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;
