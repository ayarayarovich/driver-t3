"use client";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const session = useSession();
  return (
    <>
      {session.status === "unauthenticated" && (
        <Button onPress={() => signIn("discord")}>Sign In</Button>
      )}
      {session.status === "loading" && "..."}
      {session.status === "authenticated" && (
        <Popover showArrow placement="bottom">
          <PopoverTrigger>
            <User
              avatarProps={{
                src: session.data.user.image ?? undefined,
              }}
              description={session.data.user.email}
              name={session.data.user.name}
            />
          </PopoverTrigger>
          <PopoverContent className="p-4">
            <Button color="danger" variant="solid" className="min-w-32" onPress={() => signOut()}>
              Sign Out
            </Button>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
