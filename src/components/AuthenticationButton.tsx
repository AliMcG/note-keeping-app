import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex justify-evenly items-center gap-4 font-mono">
      
      <p className="text-center text-2xl">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white px-5 py-2 font-semibold no-underline transition hover:bg-white/60 items-center"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
