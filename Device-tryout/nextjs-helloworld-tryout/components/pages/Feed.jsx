import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useEffect, useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

import { Device } from '@capacitor/device';

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img
            src={authorAvatar}
            className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full"
            alt=""
          />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
  </Card>
);

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

const [id_test, setIdTest]=useState('')
const [info_test, setInfoTest]=useState('')
const [battery_info_test, setBatteryInfoTest]=useState('')
const [language_code_test, setLanguageCodeTest]=useState('')
const [language_tag_test, setLanguageTagTest]=useState('')


  useEffect(()=>{
    (async()=>{
      const id = await Device.getId()
      const info = await Device.getInfo()
      const bi = await Device.getBatteryInfo()
      const lc = await Device.getLanguageCode()
      const lt = await Device.getLanguageTag()

setIdTest(JSON.stringify(id, null, 2))
setInfoTest(JSON.stringify(info, null, 2))
setBatteryInfoTest(JSON.stringify(bi, null, 2))
setLanguageCodeTest(JSON.stringify(lc, null, 2))
setLanguageTagTest(JSON.stringify(lt, null, 2))
    })()
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        helloworld ?
        <pre>{id_test}</pre>
        <pre>{info_test}</pre>
        <pre>{battery_info_test}</pre>
        <pre>{language_code_test}</pre>
        <pre>{language_tag_test}</pre>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
