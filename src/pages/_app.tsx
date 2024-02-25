import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Montserrat } from "@next/font/google";
import { api } from "~/utils/api";
import Layout from "~/components/Layout";

import "~/styles/globals.css";
// To import and add custom fonts to next.js
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={`${montserrat.variable}`}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
