import { useEffect } from "react";

type Shortcut = {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  onKeyDown: (event: KeyboardEvent) => void;
};

export const useKeyboardShortcuts = (shortcuts: Shortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const shortcut = shortcuts.find((s) => {
        return (
          s.key === event.key &&
          (s.ctrlKey === undefined || s.ctrlKey === event.ctrlKey) &&
          (s.metaKey === undefined || s.metaKey === event.metaKey) &&
          (s.shiftKey === undefined || s.shiftKey === event.shiftKey)
        );
      });

      if (shortcut) {
        shortcut.onKeyDown(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
};
