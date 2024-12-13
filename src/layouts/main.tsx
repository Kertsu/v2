import { ReactNode, useState } from "react";
import Loader from "../components/loader";

const Main = ({ children }: { children: ReactNode }) => {
  const [loaderVisible, setLoaderVisible] = useState<boolean>(true);
  const [loaderDone, setLoaderDone] = useState<boolean>(false);

  const handleLoaderVisibility = () => {
    console.log("setting loader visibility");
    setLoaderVisible(false);

    setTimeout(() => {
      console.log("3grd");
      setLoaderDone(true);
    }, 2);
  };

  return (
    <>
      <Loader
        onLoaderComplete={handleLoaderVisibility}
        loaderVisible={loaderVisible}
      />
      {loaderDone && children}
    </>
  );
};

export default Main;
