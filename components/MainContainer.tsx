import Head from "next/head";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  keyword: string;
}
const MainContainer: FC<Props> = ({ children, keyword }) => {
  return (
    <>
      <Head>
        {/* <meta keywords={'nada movies latest show' + keyword} /> */}
        <title>Nada</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
