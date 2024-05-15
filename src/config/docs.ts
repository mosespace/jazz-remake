import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tours",
      href: "/tours",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "About",
      href: "/about-us",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ],

  sidebarNav: [
    {
      title: "Explore",
      items: [
        {
          id: "12",
          title: "About",
          href: "/about-us",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
        {
          id: "13",
          title: "Tours",
          href: "/tours",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
        {
          id: "14",
          title: "Cancellation",
          href: "/cancellation-policy",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
      ],
    },
    {
      title: "Discover",
      items: [
        {
          id: "15",
          title: "Why Book With Us",
          href: "/why-book-with-us",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
        {
          id: "16",
          title: "Travel Info",
          href: "/#travel-info",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
        {
          id: "17",
          title: "Uganda Overview",
          href: "/#uganda-overview",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          id: "18",
          title: "Our Team",
          href: "/#our-team",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
        {
          id: "19",
          title: "Contact",
          href: "/contact-us",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          items: [],
        },
      ],
    },
  ],
};
