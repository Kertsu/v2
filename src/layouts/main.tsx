import { ReactNode, useEffect } from "react";
// import Loader from "../components/loader";

const Main = ({ children }: { children: ReactNode }) => {
  // const [loaderVisible, setLoaderVisible] = useState<boolean>(true);
  // const [loaderDone, setLoaderDone] = useState<boolean>(false);

  // const handleLoaderVisibility = () => {
  //   setLoaderVisible(false);

  //   setTimeout(() => {
  //     setLoaderDone(true);
  //   }, 2);
  // };

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", });
      }
    }

  }, [])

  return (
    <>
      {/* <Loader
        onLoaderComplete={handleLoaderVisibility}
        loaderVisible={loaderVisible}
      />
      {loaderDone && children} */}
      {children}
    </>
  );
};

export default Main;
