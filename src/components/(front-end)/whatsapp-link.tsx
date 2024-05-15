// WhatsAppChatLink.js
"use client";
import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { usePathname } from "next/navigation";

const WhatsappLink = () => {
  const phone = "+256778457411";
  const currentPath = usePathname();
  if (currentPath.startsWith("/dashboard")) {
    return null;
  }
  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=${phone}&text=Hello%2C%20I%20have%20an%20inquiry%20about%20a%20tour`}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-[30px] right-[30px] z-30 flex justify-center items-center w-[60px] h-[60px] bg-green-500 rounded-full'
    >
      <BsWhatsapp size={28} color='white' />
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
    </Link>
  );
};

export default WhatsappLink;
