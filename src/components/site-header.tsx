"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import CommandMenu from "./command-menu";
import { ModeToggle } from "./mode-toggle";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Instagram, Linkedin, LogIn } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SiteHeader({
  session,
  tourData,
  categoriesData,
}: {
  session: Session | null;
  tourData?: any;
  categoriesData?: any;
}) {
  // console.log(tourData);

  const user = session?.user;
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push("/login");
  }

  // Split the name into parts based on spaces
  const nameParts = user?.name ? user.name.split(" ") : [];

  // Get the first letter of the first name
  const firstNameInitial = nameParts.length > 0 ? nameParts[0].charAt(0) : "";

  // Get the first letter of the last name
  const lastNameInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";

  // Concatenate the initials to form the username
  const username = firstNameInitial + lastNameInitial;

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-[background/95] backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 max-w-screen-xl items-center'>
        <MainNav categoriesData={categoriesData} />

        <MobileNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu tourData={tourData} categoriesData={categoriesData} />
          </div>
          <nav className='flex gap-2 items-center'>
            {session && session.user && user?.email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='cursor-pointer'>
                    {user.image ? (
                      <AvatarImage
                        src='https://github.com/shadcn.png'
                        alt='@kisakye-moses'
                      />
                    ) : (
                      <AvatarFallback>{username}</AvatarFallback>
                    )}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel className='text-center'>
                    {user.name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className='text-center font-light text-sm text-slate-500'>
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href='/dashboard'>Dashboard</Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link href='/login'>
                  <LogIn className='mr-2 h-4 w-4' /> Login
                </Link>
              </Button>
            )}
            <Link
              href='https://linkedin.com/kiskayemoses'
              target='_blank'
              rel='noreferrer'
              className='hidden md:block'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Linkedin className='h-4 w-4' />
                <span className='sr-only'>LinkedIn</span>
              </div>
            </Link>
            <Link
              href='https://instagram.com/@typifymedia'
              target='_blank'
              rel='noreferrer'
              className='hidden md:block'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
