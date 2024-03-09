import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex justify-evenly items-center text-sm md:text-lg gap-1 md:gap-4 font-monts flex-col-reverse md:flex-row">
      <p className="text-center">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white px-2 md:px-4 py-1.5 font-semibold no-underline transition hover:bg-white/60 items-center"
        onClick={sessionData ? () => void signOut() : () => void signIn("google")}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
