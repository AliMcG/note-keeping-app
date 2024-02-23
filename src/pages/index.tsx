import Head from "next/head";
import CreateArea from "~/components/CreateArea";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Note from "~/components/note";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

export default function Home() {
  const { data: sessionData } = useSession();
  const { data, refetch } = api.notes.getLatest.useQuery();
  const { mutate } = api.notes.delete.useMutation({
    onSuccess: () => {
      void refetch();
    },
  });
  const welcomeNote = {
    id: "string;",
    title: "Welcome Note",
    description: "Sign in to add your own notes",
    createdAt: new Date(),
    updatedAt: new Date(),
    createdById: "Dev Team",
  };
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
        className="flex min-h-screen flex-col items-center text-slate-800 "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')",
          backgroundColor: " #0061b5",
        }}
      >
        <Header />
        <div className="mt-20 flex flex-col items-center">
          <CreateArea />
          {sessionData ? (
            <div className="flex flex-row">
              {data?.map((note, index) => (
                <Note key={index} note={note} deleteFunction={deleteFunction} />
              ))}
            </div>
          ) : (
            <Note note={welcomeNote} />
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
