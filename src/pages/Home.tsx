import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { ToDoList } from '../components/ToDoList/ToDoList';
import './Home.css';

const Home: React.FC = () => {

  const items = ["Learn React", "Learn Ionic", "Learn Firebase"];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ToDoList items={items}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
