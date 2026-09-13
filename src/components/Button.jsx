import { Link } from "react-router-dom";

const VARIANT_STYLES = {
  primary:
    "bg-signal text-white hover:bg-signal-dark shadow-[0_0_0_1px_rgba(79,124,255,0.4)]",
  secondary:
    "bg-transparent text-ink-900 dark:text-paper-50 border border-ink-300/60 dark:border-ink-600 hover:border-signal hover:text-signal",
  ghost:
    "bg-transparent text-signal hover:text-signal-dark underline-offset-4 hover:underline",
};

/**
 * Reusable button. Renders as an internal <Link>, an external <a>,
 * or a native <button> depending on which props are passed.
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  icon: Icon,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.98]";
  const styles = `${base} ${VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...rest}>
        {children}
        {Icon && <Icon size={16} aria-hidden="true" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...rest}
      >
        {children}
        {Icon && <Icon size={16} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} {...rest}>
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </button>
  );
}
