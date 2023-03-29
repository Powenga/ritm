import './Main.scss';
import React, { SyntheticEvent } from 'react';
import Techs from '../Techs/Techs';
import Dev from '../Dev/Dev';
import Process from '../Process/Process';
import Feedback from '../Feedback/Feedback';
import FAQ from '../FAQ/FAQ';
import Contacts from '../Contacts/Contacts';
import { TDataFeedback } from '../../types/types';

type PropTypes = {
  onSubmitFeedback: (dataForm: TDataFeedback) => void;
  isPreloaderFeedbackEnabled: boolean;
  onPolicyClick: (event: SyntheticEvent) => void;
};

const Main: React.FC<PropTypes> = ({
  onSubmitFeedback,
  isPreloaderFeedbackEnabled,
  onPolicyClick
}) => {
  return (
    <main className="main">
      <Techs />
      <Dev />
      <Process />
      <Feedback
        onSubmit={onSubmitFeedback}
        isPreloaderEnabled={isPreloaderFeedbackEnabled}
        onPolicyClick={onPolicyClick}
      />
      <FAQ />
      <Contacts />
    </main>
  );
};

export default Main;
