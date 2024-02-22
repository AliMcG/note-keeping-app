import Head from "next/head";
import AuthenticationButton from "~/components/AuthenticationButton";
import CreateArea from "~/components/CreateArea";
import Footer from "~/components/Footer";
import Note from "~/components/note";

import { api } from "~/utils/api";

export default function Home() {
  const { data, refetch } = api.post.getLatest.useQuery();
  const { mutate } = api.post.delete.useMutation({
    onSuccess: () => {
      void refetch();
    },
  });

  function deleteFunction(id: string) {
    mutate({ id: id });
  }
  return (
    <>
      <Head>
        <title>Note Keeping App</title>
        <meta name="description" content="Best note keeping App in world!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className=" flex min-h-screen flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')",
          backgroundColor: " #0061b5",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <AuthenticationButton />
        </div>
        <CreateArea />
        <div>
          {data?.map((note, index) => (
            <Note key={index} note={note} deleteFunction={deleteFunction} />
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
