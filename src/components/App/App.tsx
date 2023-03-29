import React, { SyntheticEvent, useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { sendForm } from '../../utils/ApiRitm';
import { MESSAGE_SUCCESS } from '../../utils/constants';
import { TDataFeedback } from '../../types/types';
import Policy from '../Policy/Policy';

interface TPopupPropsState {
  title?: string;
  message?: string;
  component?: React.ReactNode;
}

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isPreloaderFeedbackEnabled, setIsPreloaderFeedbackEnabled] = useState(false);
  const [popupProps, setPopupProps] = useState<TPopupPropsState>({
    title: '',
    message: ''
  });
  const closePopup = () => {
    setIsPopupOpened(false);
    setPopupProps({});
  };

  const openPopup = () => {
    setIsPopupOpened(true);
  };

  const onSubmitFeedback = async (dataForm: TDataFeedback) => {
    setIsPreloaderFeedbackEnabled(true);
    try {
      await sendForm(dataForm);

      setPopupProps({ title: MESSAGE_SUCCESS.title, message: MESSAGE_SUCCESS.message });
      openPopup();
    } catch (e) {
      console.log('Ошибка');
    } finally {
      setIsPreloaderFeedbackEnabled(false);
    }
  };

  const onClickPolicy = (evt: SyntheticEvent) => {
    const componentPolicy = <Policy />;
    evt.preventDefault();
    setPopupProps({
      component: componentPolicy
    });
    openPopup();
  };

  return (
    <div className="App">
      <Header />
      <Main
        onSubmitFeedback={onSubmitFeedback}
        isPreloaderFeedbackEnabled={isPreloaderFeedbackEnabled}
        onPolicyClick={onClickPolicy}
      />
      <Footer onClickPolicy={onClickPolicy} />
      {isPopupOpened && (
        <Popup
          closePopup={closePopup}
          title={popupProps.title}
          message={popupProps.message}
          component={popupProps.component}
        />
      )}
    </div>
  );
}

export default App;
