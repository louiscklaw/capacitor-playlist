import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import ExploreContainer from '../components/ExploreContainer';
import { Geolocation } from '@capacitor/geolocation';

import './Tab1.css';

const Tab1: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState({})

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition()
    console.log('Current position:', coordinates);
    console.log('Current position:', coordinates.coords.latitude);
    let { timestamp} = coordinates
    let {latitude, accuracy, longitude} = coordinates.coords
    setCurrentLocation({timestamp, latitude, accuracy, longitude})
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
        <IonButton onClick={ printCurrentPosition}>
          hellowlrd
        </IonButton>

        <pre>{JSON.stringify({currentLocation},null, 2)}</pre>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
