"use client";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { docsConfig } from "@/config/docs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DialogProps } from "@radix-ui/react-alert-dialog";
import { Heart, Plane, SquareStack, Search } from "lucide-react";
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenuHero({
  tourData,
  categoriesData,
  ...props
}: {
  tourData?: any;
  categoriesData?: any;
} & DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  const [favorites, setFavorites] = React.useState<string[]>([]);

  React.useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant='outline'
        className={cn(
          "relative py-5 md:py-7 w-full justify-start rounded-full bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-[30rem]"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className='hidden lg:inline-flex'>
          Search tours, destinations...
        </span>
        <span className='inline-flex lg:hidden'>Search...</span>
        <kbd className='pointer-events-none absolute right-[0.3rem] top-[1rem] hidden h-5 select-none items-center gap-1 rounded  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>
            <Search className='w-4 h-4 flex-shrink-0' />
          </span>
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* Favorites */}
          <CommandGroup key='Your Favorites' heading='Your Favorites'>
            {favorites?.map((fave: any) => (
              <Link
                key={fave.id}
                href={`/tours/${fave.categoryId as string}/${
                  fave.slug as string
                }`}
                className='cursor-pointer'
              >
                <CommandItem
                  key={fave.id}
                  value={fave.title}
                  onSelect={() => {
                    runCommand(() => router.push(fave.href as string));
                  }}
                >
                  <div className='flex flex-col space-x-2'>
                    <div className='flex space-x-1 items-center'>
                      <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                        <Heart className='h-3 w-3 text-red-500 fill-red-500' />
                      </div>
                      <span className='text-base'>{fave.title}</span>
                    </div>
                    <span className='pt-1 ml-8 pl-8 text-xs line-clamp-1'>
                      {fave.description}
                    </span>
                  </div>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>

          {/* App Links */}
          <CommandGroup heading='Links'>
            {docsConfig.mainNav
              .filter((navitem) => !navitem.external)
              .map((navItem) => (
                <Link
                  key={navItem.href}
                  href={`${navItem.href as string}`}
                  className='cursor-pointer'
                >
                  <CommandItem
                    key={navItem.href}
                    value={navItem.title}
                    onSelect={() => {
                      runCommand(() => router.push(navItem.href as string));
                    }}
                  >
                    <FileIcon className='mr-2 h-4 w-4' />
                    {navItem.title}
                  </CommandItem>
                </Link>
              ))}
          </CommandGroup>

          {/* Side Bar */}
          {docsConfig.sidebarNav.map((group: any) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem: any) => (
                <Link
                  key={navItem.href}
                  href={`${navItem.href as string}`}
                  className='cursor-pointer'
                >
                  <CommandItem
                    key={navItem.href}
                    value={navItem.title}
                    onSelect={() => {
                      runCommand(() => router.push(navItem.href as string));
                    }}
                  >
                    <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                      <CircleIcon className='h-3 w-3' />
                    </div>
                    {navItem.title}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          ))}

          {/* Categories */}
          <CommandGroup key='All Categories' heading='All Categories'>
            {categoriesData?.map((category: any) => (
              <Link
                key={category.id}
                href={`/c/${category.slug as string}/`}
                className='cursor-pointer'
              >
                <CommandItem
                  key={category.id}
                  value={category.title}
                  onSelect={() => {
                    runCommand(() => router.push(category.slug as string));
                  }}
                >
                  <div className='flex flex-col space-x-2'>
                    <div className='flex space-x-1 items-center'>
                      <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                        <SquareStack className='h-3 w-3' />
                      </div>
                      <span className='text-base'>{category.title}</span>
                    </div>
                    <span className='pt-1 ml-8 pl-8 text-xs line-clamp-1'>
                      {category.description}
                    </span>
                  </div>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>

          {/* Tours */}
          <CommandGroup key='All Tours' heading='All Tours'>
            {tourData?.map((tour: any) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.categoryId as string}/${
                  tour.slug as string
                }`}
                className='cursor-pointer'
              >
                <CommandItem
                  key={tour.id}
                  value={tour.title}
                  onSelect={() => {
                    runCommand(() => router.push(tour.href as string));
                  }}
                >
                  <div className='flex flex-col space-x-2'>
                    <div className='flex space-x-1 items-center'>
                      <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                        <Plane className='h-3 w-3' />
                      </div>
                      <span className='text-base'>{tour.title}</span>
                    </div>
                    <span className='pt-1 ml-8 pl-8 text-xs line-clamp-1'>
                      {tour.description}
                    </span>
                  </div>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading='Theme'>
            <div className='flex flex-col space-y-2'>
              <button onClick={() => runCommand(() => setTheme("light"))}>
                <CommandItem
                  onSelect={() => runCommand(() => setTheme("light"))}
                >
                  <SunIcon className='mr-2 h-4 w-4' />
                  Light
                </CommandItem>
              </button>

              <button onClick={() => runCommand(() => setTheme("dark"))}>
                <CommandItem
                  onSelect={() => runCommand(() => setTheme("dark"))}
                >
                  <MoonIcon className='mr-2 h-4 w-4' />
                  Dark
                </CommandItem>
              </button>
              <button onClick={() => runCommand(() => setTheme("system"))}>
                <CommandItem
                  onSelect={() => runCommand(() => setTheme("system"))}
                >
                  <LaptopIcon className='mr-2 h-4 w-4' />
                  System
                </CommandItem>
              </button>
            </div>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
