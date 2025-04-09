import React from "react";

function getCurrentYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className=" bottom-0 left-0 w-full bg-[var(--color-bg-secondary)] py-4 px-4 border-t border-[var(--color-border)]">
      <div className="max-w-screen-xl mx-auto">
        <span className="block text-sm text-[var(--color-text-secondary)] text-center">
          © {currentYear}{" "}
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
