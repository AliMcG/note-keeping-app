import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "rawsome-components";

export default function AuthenticationButton() {
  const { data: sessionData } = useSession();

  return (
    <div className="text-text-primary flex flex-col-reverse items-center justify-evenly gap-1 font-monts text-sm md:flex-row md:gap-4 md:text-lg">
      <p className="text-center">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <Button
        intent={"secondary"}
        className="items-center rounded-full  px-2 py-1.5 font-semibold   md:px-4"
        onClick={
          sessionData ? () => void signOut() : () => void signIn("google")
        }
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
}
