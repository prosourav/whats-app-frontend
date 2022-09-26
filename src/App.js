import "./App.css";
import Messenger from "./Page/Messenger.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
import PersonProvider from "./context/PersonProvider";

function App() {
  const clientId =
    "625789928583-huvp1ompr62u98r20i8ipcigdr8tlij7.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <PersonProvider>
          <Messenger />
        </PersonProvider>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
