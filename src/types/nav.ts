import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  id?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  description?: string;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
