import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[var(--color-bg-secondary)] py-4 px-4 border-t border-[var(--color-border)]">
      <div className="max-w-screen-xl mx-auto">
        <span className="block text-sm text-[var(--color-text-secondary)] text-center">
          © 2024{" "}
          <a
            href="https://twitter.com/_roru_roru"
            className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
          >
            _roru_roru
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
