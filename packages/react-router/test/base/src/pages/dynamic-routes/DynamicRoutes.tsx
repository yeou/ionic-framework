import React, { useState, ReactElement } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
} from '@ionic/react';
import { Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DynamicRoutes: React.FC = () => {
  // Define addRoute before using it in the initial state
  const [routes, setRoutes] = useState<ReactElement[]>([]);

  const addRoute = () => {
    const newRoute = (
      <Route key="lsdjldj" path="/dynamic-routes/newRoute" element={<NewRoute />} />
    );
    setRoutes([...routes, newRoute]);
  };

  // Initialize routes after addRoute is defined
  React.useEffect(() => {
    if (routes.length === 0) {
      setRoutes([
        <Route
          key="sldjflsdj"
          path="/dynamic-routes/home"
          element={<Home update={addRoute} />}
        />,
      ]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <IonRouterOutlet>
      {routes}
      {/* <Route path="/home" element={ <Home update={addRoute} />} /> */}
      <Route path="/dynamic-routes" element={<Navigate to="/dynamic-routes/home" />} />
      <Route element={<Failed />} />
    </IonRouterOutlet>
  );
};

export default DynamicRoutes;

const Home: React.FC<{
  update: Function;
}> = (props) => {
  const updateRoute = () => {
    props.update();
  };

  return (
    <IonPage data-pageid="dynamic-routes-home">
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HOME</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Click Add Route Button</strong>
          <br />
          <button className="" onClick={() => updateRoute()}>
            Add Route
          </button>
          <br />
          <Link to="/dynamic-routes/newRoute">Take me to the newRoute</Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

const NewRoute: React.FC = () => {
  return (
    <IonPage data-pageid="dynamic-routes-newroute">
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Route</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New Route</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

const Failed: React.FC = () => {
  return (
    <IonPage data-pageid="dynamic-routes-failed">
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Route Failed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New Route Failed</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
