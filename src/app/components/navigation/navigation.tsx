"use client";

import { forwardRef } from "react";

import { cn } from "../../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

const CustomNavigationMenu = () => {
  return (
    <NavigationMenu className="py-2 bg-emerald-700">
      <NavigationMenuList>
        <NavigationMenuItem className="text-white">
          <ListItem key="users" title="Users" href={"./users"} />
        </NavigationMenuItem>
        <NavigationMenuItem className="text-white">
          <ListItem key="posts" title="Posts" href={"./posts"} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </a>
  );
});
ListItem.displayName = "ListItem";

export { CustomNavigationMenu };
