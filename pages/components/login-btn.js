import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          className="inline-flex mr-4 items-center border-[0.5px] bg-gradient-to-t to-purple-400 from-blue-400 border-slate-200 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-slate-600"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <p className="mr-5 hover:text-white font-bold text-purple-500">
        Not signed in
      </p>
      <button
        className="inline-flex  items-center border-[0.5px] bg-gradient-to-t to-purple-400 from-blue-400 border-slate-200 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-slate-600"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
