import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { AppContext } from '../AppContext';
import ExploreContainer from '../components/ExploreContainer';
import { Preferences } from '@capacitor/preferences';

import './Tab1.css';

const Tab1: React.FC = () => {
  const setName = async () => {
    await Preferences.set({
      key: 'name',
      value: 'Max',
    });
  };
  
  const checkName = async () => {
    const { value } = await Preferences.get({ key: 'name' });
    console.log(`Hello ${value}!`);
  };
  
  const removeName = async () => {
    await Preferences.remove({ key: 'name' });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={ setName}>setName</IonButton>
        <IonButton onClick={ checkName}>checkName</IonButton>
        <IonButton onClick={ removeName}>removeName</IonButton>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
