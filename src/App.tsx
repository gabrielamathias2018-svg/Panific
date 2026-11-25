/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BreakfastSection } from './components/BreakfastSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HighlightsSection } from './components/HighlightsSection';
import { MenuSection } from './components/MenuSection';
import { OrdersSection } from './components/OrdersSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { WhatsAppModal } from './components/WhatsAppModal';
import { siteConfig } from './config/siteConfig';

interface ModalState {
  isOpen: boolean;
  message: string;
  contextTitle: string;
}

export default function App() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    message: siteConfig.messages.general,
    contextTitle: 'Atendimento via WhatsApp',
  });

  const openDemoModal = (message: string, contextTitle: string) => {
    setModalState({
      isOpen: true,
      message,
      contextTitle,
    });
  };

  const closeDemoModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-cream-50 text-coffee-900">
      <Header onWhatsAppAction={openDemoModal} />

      <main>
        <HeroSection onOpenDemoModal={openDemoModal} />
        <MenuSection onOpenDemoModal={openDemoModal} />
        <HighlightsSection onOpenDemoModal={openDemoModal} />
        <BreakfastSection onOpenDemoModal={openDemoModal} />
        <OrdersSection onOpenDemoModal={openDemoModal} />
        <AboutSection />
        <ContactSection onOpenDemoModal={openDemoModal} />
      </main>

      <Footer onOpenDemoModal={openDemoModal} />

      <WhatsAppFloat onOpenDemoModal={openDemoModal} />

      <WhatsAppModal
        isOpen={modalState.isOpen}
        message={modalState.message}
        contextTitle={modalState.contextTitle}
        onClose={closeDemoModal}
      />
    </div>
  );
}
