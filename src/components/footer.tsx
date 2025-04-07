import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-16 p-16 bg-[var(--color-bg-primary)] mt-8">
      <div className="max-w-screen-xl mx-auto">
        <hr className="my-4 border-[var(--color-border)]" />
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
