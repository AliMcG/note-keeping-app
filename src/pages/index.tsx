import Head from "next/head";
import CreateArea from "~/components/CreateArea";
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
      <div className="mt-20 flex flex-col items-center">
        {sessionData ? (
          <>
            <CreateArea />
            <div className="flex flex-col md:flex-row">
              {data?.map((note, index) => (
                <Note key={index} note={note} deleteFunction={deleteFunction} />
              ))}
            </div>
          </>
        ) : (
          <Note note={welcomeNote} />
        )}
      </div>
    </>
  );
}
