import React from 'react';
import {
  IonButtons,
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

interface PageProps { }


const Page: React.FC<PageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const parseID = parseInt(id || '0');
  return (
    <IonPage data-pageid={'params-' + id}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Params {id}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton id="next-page" routerLink={'/params/' + (parseID + 1)} >Go to next param</IonButton>
        <br />
        Page ID: {id}
      </IonContent>
    </IonPage>
  );
};

export default Page;
