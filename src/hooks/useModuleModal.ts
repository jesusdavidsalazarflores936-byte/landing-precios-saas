"use client";

import { useCallback, useState } from "react";

export interface UseModuleModalReturn<TModule> {
  selectedModule: TModule | null;
  isOpen: boolean;
  openModule: (module: TModule) => void;
  closeModule: () => void;
}

export function useModuleModal<TModule>(): UseModuleModalReturn<TModule> {
  const [selectedModule, setSelectedModule] = useState<TModule | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [returnFocusTo, setReturnFocusTo] = useState<HTMLElement | null>(null);

  const openModule = useCallback((module: TModule) => {
    setReturnFocusTo(document.activeElement as HTMLElement | null);
    setSelectedModule(module);
    setIsOpen(true);
  }, []);

  const closeModule = useCallback(() => {
    setIsOpen(false);
    setSelectedModule(null);
    returnFocusTo?.focus();
    setReturnFocusTo(null);
  }, [returnFocusTo]);

  return {
    selectedModule,
    isOpen,
    openModule,
    closeModule,
  };
}
