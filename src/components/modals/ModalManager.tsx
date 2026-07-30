"use client";

import { useApp } from "@/context/AppContext";
import { BookingModal } from "./BookingModal";
import { AuthModal } from "./AuthModal";
import { BlogModal } from "./BlogModal";
import { ContactModal } from "./ContactModal";
import { AIChatWidget } from "./AIChatWidget";

export function ModalManager() {
  const { activeModal } = useApp();

  return (
    <>
      {activeModal === "booking" && <BookingModal />}
      {activeModal === "auth" && <AuthModal />}
      {activeModal === "blog" && <BlogModal />}
      {activeModal === "contact" && <ContactModal />}
      <AIChatWidget />
    </>
  );
}
